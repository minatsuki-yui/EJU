class Reader(object):
    def __init__(self, all_data):
        self.data = all_data
        self.glossary = {}
        self.key = ''
        self.super_key = ''
        self.value = ''
        self.magic_words = ['note',
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
                            'component',
                            'components',
                            'title',
                            'type'
                            ]
        self.make_glossary()

    def has_description(self, value):
        if type(value) == str:
            return value
        elif type(value) == list:
            self.walk(value)
        elif type(value) == dict:
            return value.get('desc')
        else:
            return False

    def walk(self, data):
        for each in data:
            if (type(data) == list):
                if each != dict:
                    return
                else:
                    self.walk(each)
            self.key = each
            self.value = data[each]
            if type(self.value) == dict:
                self.super_key = self.key
                self.walk(self.value)
            if self.has_description(self.value):
                if self.key == 'desc':
                    self.add_to_glossary(self.super_key, self.value)
                else:
                    self.add_to_glossary(self.key, self.value)

    def make_glossary(self):
        self.walk(self.data)
        print(len(self.glossary))
        glossary_list = []
        for each in self.glossary:
            glossary_list.append(f'## {each}')
            glossary_list.append(f'{self.glossary[each]}\n')

        with open('../gitbook/GLOSSARY.md', 'w') as g:
            g.write('\n'.join(glossary_list))

    def add_to_glossary(self, k, v):
        clean_k = k.strip()
        if clean_k in self.magic_words:
            return
        print(clean_k, '=', v)
        self.glossary[clean_k] = v

    @staticmethod
    def read(eq):
        if type(eq) == str:
            return __class__.read_equation(eq)
        elif type(eq) == dict:
            eq_obj = __class__.read_equation(eq.get('equation'))
            eq_obj['phenomenon'] = eq.get('phenomenon')
            eq_obj['notice'] = eq.get('notice')
            eq_obj['name'] = eq.get('name')
            return eq_obj

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
