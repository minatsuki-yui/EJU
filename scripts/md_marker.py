class MdMaker(object):
    def __init__(self):
        self.data = None
        self.glossary = None

    def read(self, data):
        pass

    def make_glossary(self):
        self.read(self.data)
        print(len(self.glossary))
        glossary_list = []
        for each in self.glossary:
            glossary_list.append(f'## {each}')
            glossary_list.append(f'{self.glossary[each]}\n')

        with open('../gitbook/GLOSSARY.md', 'w') as g:
            g.write('\n'.join(glossary_list))
