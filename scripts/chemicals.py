class Concepts(object):
    def __init__(self):
        self.description = ''
        self.note = ''


class Chemicals(Concepts):
    def __init__(self, substance):
        super(Concepts, self).__init__()
        self.names = substance.get('names')
        self.formula = substance.get('formula')
        self.property = substance.get('property')
        self.production_methods = ProductionMethods(substance.get('production'))
        self.inspection_methods = substance.get('inspection')
        self.equations = substance.get('equations')
        self.can_react_with = []
        self.usage = substance.get('usage')


class ProductionMethods(object):
    def __init__(self, method):
        self.lab = method.get('lab')
        self.indusry = method.get('indusry')


if __name__ == '__main__':
    NH3 = {
        'names': ['アンモニア'],
        'formula': 'NH3',
        'production': {
            'lab': '2NH4Cl + Ca(OH)2 -> 2NH3 + CaCl2 + 2H2O',
            'indusry': 'N2 + 3H2 -> 2NH3 ···Fe3O4'
        }
    }

    n = Chemicals(NH3)
    print(n.production_methods.lab)
