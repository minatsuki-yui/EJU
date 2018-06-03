import yaml


class Reader(object):
    def __init__(self):
        self.glossary = {}
        self.data_stack = []
        self.skip_words = ['meta']
        self.magic_words = ['alias',
                            'note',
                            'property',
                            'production',
                            'inspection',
                            'alias',
                            'formula',
                            'usage',
                            'equation',
                            'structure',
                            'industry',
                            'lab',
                            'color',
                            'phenomenon',
                            'extra',
                            'bond',
                            'name',
                            'example',
                            'title',
                            'type',
                            'desc'
                            ]

    def read_file(self,path_to_file):
        with open(path_to_file, 'r') as f:
            data = yaml.load(f.read())
        self.read(data)

    def read(self, data):

        for key in data:
            value = data[key]
            key = key.strip()

            if key not in self.skip_words:
                print(1)

            # if type(data) == list:
            #    if each != dict:
            #        return
            #    else:
            #        self.read(each)

            if key in self.magic_words:
                self.do_magic(key, data)

            if type(value) == dict:
                self.data_stack.append({
                    'key': key,
                    'value': value
                })
                self.read(value)

            if type(value) == str:
                self.add_to_glossary(key, value.strip())
        if self.data_stack:
            self.data_stack.pop()

    def do_magic(self, key, data):
        if key == 'desc':
            self.add_to_glossary(self.data_stack[-1]['key'], data['desc'])
        elif key == 'alias':
            print(data['alias'])
            alias = self.data_stack[-1]['key']
            self.add_to_glossary(data['alias'], alias)

    def add_to_glossary(self, k, v):
        #print(k)
        clean_k = k.strip()
        if clean_k in self.magic_words:
            return
        # print(clean_k, '=', v)
        if type(v) == str:
            clean_v = v.strip()
        else:clean_v = v
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
    r.read_file('../化学/basic/1-1-pure_substance&mixture.yml')
    print(r.glossary)