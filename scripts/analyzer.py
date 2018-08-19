import os
import yaml
import json
from yaml.reader import ReaderError
import reader


class Analyzer(object):
    def __init__(self):
        self.cwd = os.getcwd()
        self.all_notes = {}
        self.default_dbname = 'property'
        self.current_filename = ''
        self.current_key = ''
        self.property_dict = {}
        self.usage_dict = {}
        self.bond_dict = {}
        self.predefine_dict = {
            'property': self.property_dict,
            'usage': self.usage_dict,
            'bond': self.bond_dict
        }

    def muti_generate(self, roots, dbname=''):
        for root in roots:
            self.generate(root)

        self.make_list()

        if not dbname:
            output_db = self.default_dbname
        else:
            output_db = dbname
        self.write_out(output_db + '.json')

    def generate(self, root, dbname=''):
        files = os.listdir(root)
        os.chdir(root)
        notebooks = sorted([file for file in files if file.endswith('yml')])
        print('work on these files:\n')
        # print(notebooks)
        try:
            [self.handle_file(notebook) for notebook in notebooks]
        except ReaderError:
            print('error on: ', self.current_filename)
            raise
            # finally:
            #    pass
            # print(self.all_notes)

        print(f'\nfinished {root}')
        os.chdir(self.cwd)

    def handle_file(self, file_name):
        self.current_filename = file_name
        # print(self.current_filename)
        with open(file_name, 'r') as f:
            content = yaml.load(f.read())
        # print(content)
        for each in content:
            self.find(each, content[each])
            # self.find_property(each, content[each])
            # self.all_notes[each] = content[each]
        del content

    def find_prop(self, substance, v):
        for k in self.predefine_dict:
            if k in v:
                p = v.get(k)
                to_dict = self.predefine_dict[k]
                if p.__class__ == list:
                    for each in p:
                        self.add_to_dict(to_dict, each, substance)
                elif p.__class__ == str:
                    self.add_to_dict(to_dict, p, substance)

    def find(self, k, v):
        # print(k, v)
        if v.__class__ == list or v.__class__ == str:
            return
        k = v.get('formula', k)
        '''
                print(p)
        if p:
            if p.__class__ == list:
                for each in p:
                    self.add_to_dict(each, k)
            elif p.__class__ == str:
                self.add_to_dict(p, k)
        '''
        self.find_prop(k, v)

    def add_to_dict(self, to_dict, prop, substance):
        if prop in to_dict:
            to_dict[prop].append(substance)
        else:
            to_dict[prop] = [substance]

    def write_out(self, dbname):
        # self.all_notes['title'] = self.default_dbname
        # self.all_notes['vol'] = '＄'
        # print(self.all_notes)
        # self.all_notes.pop('meta')
        # r = reader.Reader(self.all_notes)
        # r.make_glossary()
        for key in self.predefine_dict:
            with open(f'../data/{key}.json', 'w') as db:
                json.dump(self.predefine_dict[key], db, ensure_ascii=False, indent=2)

    def make_list(self):
        l = iter([i for i in self.property_dict])
        with open('../data/properties.txt', 'w') as txt:
            for p in l:
                #l = [next(l)]
                line = f'{p} {next(l)} {next(l)} {next(l)} {next(l)}\n'
                print(line)
                txt.write(line)


if __name__ == '__main__':
    roots = ['../chemistry/basic', '../chemistry/chemistry']
    a = Analyzer()
    a.muti_generate(roots)
    print(a.property_dict)
    print(a.usage_dict)
