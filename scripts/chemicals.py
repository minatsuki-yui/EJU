import re
import yaml
import json
import scaffold

common_elements = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar',
                    'K', 'Ca', 'V', 'Cr', 'Mn', 'Fe', 'Ni', 'Cu', 'Zn', 'Br', 'Sr', 'Pd', 'Ag', 'Cd', 'Sn', 'I', 'Cs',
                    'Ba', 'Pt', 'Au', 'Hg', 'Pb']

chemical_reg = ''


def is_chemical(text):
    if text in common_elements:
        return True


def get_common():
    # with open('../化学/meta.yml', 'r') as y:
    #    meta = yaml.load(y.read())
    with open('../data/all_elements.json', 'r') as j:
        data = json.loads(j.read())

    return data


elements = get_common()


class Element(object):

    def __init__(self, symbol):
        self.z = 0
        self.symbol = 0
        self.en_name = 0
        self.jp_name = 0
        self.group = 0
        self.period = 0
        self.weight = 0
        self.density = 0
        self.melt = 0
        self.boil = 0
        self.property = []

        el = elements[symbol]

        for each in el:
            self.__setattr__(each, el[each])


class Chemical(object):
    def __init__(self, substance):
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


class Equation(object):
    def __init__(self, eq_obj):
        self.name = eq_obj.get('name')
        self.reactants = eq_obj.get('reactants')
        self.products = eq_obj.get('products')
        self.conditions = eq_obj.get('conditions')
        self.phenomenon = eq_obj.get('phenomenon')
        self.notice = eq_obj.get('notice')

class DB(object):

    def __init__(self):
        self.elements = {}
        for chemical in common_elements:
            self.elements[chemical] = Element(chemical)

if __name__ == '__main__':

    d = DB()
    print(d.elements['He'].jp_name)
