import yaml
import chemicals
import os


class Upper(object):
    def __init__(self, reader):
        self.data_stack = reader.data_stack
        self.key = None
        self.value = None
        self.property = None
        self.apply_to = None

    def update(self):
        if self.data_stack:
            self.key = self.data_stack[-1]['key']
            self.value = self.data_stack[-1]['value']
            if self.value.__class__ == dict:
                self.apply_to = self.value.get('is')
                self.property = self.value.get('property')

class Reader(object):
    def __init__(self):
        self.glossary = {}
        self.wiki = {}
        self.data_stack = []
        self.db = chemicals.DB()
        self.upper = Upper(self)
        self.magic_words = ['is',
                            'property'
                            ]

    def read_file(self, path_to_file):
        with open(path_to_file, 'r') as f:
            data = yaml.load(f.read())
        self.read(data)

    def read_files(self, path_to_files):
        files = os.listdir(path_to_files)
        os.chdir(path_to_files)
        notebooks = sorted([file for file in files if file.endswith('yml')])
        for f in notebooks:
            print(f)
            self.read_file(f)

    def read(self, data):

        for key in data:

            value = data[key]
            key = key.strip()

            if key in self.magic_words:
                self.do_magic(key, value)

            if value.__class__ == dict:
                self.in_stack(key, value)
                #print(self.upper.data_stack)
                self.read(value)

            if key in chemicals.common_elements:
                if self.data_stack:
                    self.set_element_attr(key, value)

        if self.data_stack:
            self.out_stack()

    def in_stack(self, k, v):
        self.data_stack.append({
            'key': k,
            'value': v
        })
        self.upper.update()

    def out_stack(self):
        self.data_stack.pop()
        self.upper.update()

    def set_element_attr(self, k, v):
        self.db.elements[k].__setattr__(self.upper.key, v)

    def set_wiki(self):
        self.wiki[self.upper.key] = []

    def append_wiki(self, data):
        self.wiki[self.upper.key].append(data)

    def do_is_magic(self,data,props):
        self.wiki[props] = []

        if type(data) == str:
            if data in self.wiki:
                self.append_wiki(data)
            self.bond(data, props)
        else:
            for each in data:
                if each in self.wiki:
                    self.append_wiki(each)
                self.bond(each, props)

    def do_magic(self, key, data):


        if key == 'is':
            self.do_is_magic(data,self.upper.key)

        elif (key == 'property') or (key == 'usage'):
            # print(data)
            if data.__class__ == str:
                self.bond(data, self.upper.key)
                if self.upper.apply_to:
                    print(data)
                    self.do_is_magic(self.upper.apply_to,data)
            else:
                for each in data:
                    self.bond(each, self.upper.key)
                    if 'is' in self.upper.value:
                        print('here',each,self.upper.apply_to)
                        if self.upper.apply_to.__class__ == str:
                            self.bond(self.upper.apply_to, each)
                        else:
                            for x in self.upper.apply_to:
                                self.bond(x, each)
                

        elif key == 'alias':
            # print(data['alias'])
            alias = self.upper.key
            self.add_to_glossary(data['alias'], alias)

    def bond(self, k, p):
        # print(k)
        # print(k)
        if '族' in k:

            g = k.split('族')[0]
            if '～' in g:
                s, e = g.split('～')
                for x in range(int(s), int(e) + 1):
                    self.map_group(p, str(x))

            # print(g)
            if 'del' in k:
                skip = k.split('del ')[-1].split(',')
                # print(skip)
                self.map_group(p, g, skip)
            else:
                self.map_group(p, g)

        if k in self.db.elements:
            # self.wiki[self.upper.key()].append(k)
            self.db.elements[k].property.append(p)
        if k in self.wiki:
            self.handle_nested_el(k,p)

    def handle_nested_el(self, key,props):
        all_els = []
        els = self.wiki[key]
        for el in els:
            if el in self.wiki:
                all_els.extend(self.wiki[el])
            else:
                all_els = els

        #print(key, all_els, self.wiki)

        # self.wiki[key] = all_els

        # print(self.wiki)

        for e in all_els:
            # print(self.data_stack[-1]['key'])
            self.db.elements[e].property.append(props)

    def map_group(self, k, g, skip=()):
        # print(g)
        for each in chemicals.elements:
            if each in self.db.elements:
                # if k == 'ハロゲン':
                #    print(chemicals.elements[each]['group'])
                #    print(g)
                # print(each, 'is', k, chemicals.elements[each]['group'], g, g == chemicals.elements[each]['group'])
                #          each not in skip)
                if (g == chemicals.elements[each]['group']) and (each not in skip):
                    # print(each)
                    self.wiki[k].append(each)
                    self.db.elements[each].property.append(k)

    def add_to_glossary(self, k, v):
        # print(k)
        clean_k = k.strip()
        if clean_k in self.magic_words:
            return
        # print(clean_k, '=', v)
        if type(v) == str:
            clean_v = v.strip()
        else:
            clean_v = v
        self.glossary[clean_k] = clean_v

    # @staticmethod
    # def read(eq):
    #    if type(eq) == str:
    #        return __class__.read_equation(eq)
    #    elif type(eq) == dict:
    #        eq_obj = __class__.read_equation(eq.get('equation'))
    #       eq_obj['phenomenon'] = eq.get('phenomenon')
    #        eq_obj['notice'] = eq.get('notice')
    #        eq_obj['name'] = eq.get('name')
    #        return eq_obj

    @staticmethod
    def read_equation(eq):

        # e.g: CH3COONa + NaOH -> CH4 + Na2CO3 ···固体加热

        reaction = eq.split('···')

        before, after = reaction[0].replace(' ', '').split('->')
        eq_obj = {
            'reactants': before.split('+'),
            'products': after.split('+')
        }

        if len(reaction) > 1:
            eq_obj['conditions'] = reaction[1].split(' ')

        return eq_obj

if __name__ == '__main__':
    r = Reader()
    r.read_files('../化学/basic')
    for a in chemicals.common_elements:
        print(a, r.db.elements[a].property)
    print(r.wiki)
