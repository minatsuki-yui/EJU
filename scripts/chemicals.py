import reader

class Concepts(object):
    def __init__(self):
        self.description = ''
        self.note = ''


class Equation(object):
    def __init__(self, eq):
        self.name = ''
        self.reactants = []
        self.products = []
        self.conditions = ''
        self.phenomenon = ''
        self.notice = ''
        self.__merge(reader.read(eq))

    def __merge(self, eq_obj):
        self.name = eq_obj.get('name')
        self.reactants = eq_obj.get('reactants')
        self.products = eq_obj.get('products')
        self.conditions = eq_obj.get('conditions')
        self.phenomenon = eq_obj.get('phenomenon')
        self.notice = eq_obj.get('notice')



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
        self.lab = Equation(method.get('lab'))
        self.industry = Equation(method.get('industry'))


if __name__ == '__main__':
    NH3 = {
        'names': ['アンモニア'],
        'formula': 'NH3',
        'production': {
            'lab': '2NH4Cl + Ca(OH)2 -> 2NH3 + CaCl2 + 2H2O',
            'industry': {
                'equation': 'N2 + 3H2 -> 2NH3 ···Fe3O4 400–600°C 200–1000 atm',
                'notice': '放熱反應',
                'name': 'ハーバー・ボッシュ法'
            }
        }
    }

    nh3 = Chemicals(NH3)
    print(nh3.production_methods.industry.reactants)

