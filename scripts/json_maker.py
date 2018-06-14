import os
import yaml
import json
from yaml.reader import ReaderError
import reader


class Generator(object):
    def __init__(self):
        self.cwd = os.getcwd()
        self.all_notes = {}
        self.default_dbname = 'property'
        self.current_filename = ''
        self.current_key = ''
        self.property_dict = {}

    def muti_generate(self, roots, dbname=''):
        for root in roots:
            self.generate(root)

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
            self.find_property(each, content[each])
            # self.all_notes[each] = content[each]
        del content

    def find_property(self, k, v):
        print(k, v)
        if v.__class__ == list or v.__class__ == str:
            return
        p = v.get('property')
        print(p)
        if p:
            if p.__class__ == list:
                for each in p:
                    self.add_property_dict(each, k)
            elif p.__class__ == str:
                self.add_property_dict(p, k)

    def add_property_dict(self, p, s):
        if p in self.property_dict:
            self.property_dict[p].append(s)
        else:
            self.property_dict[p] = [s]

    def write_out(self, dbname):
        # self.all_notes['title'] = self.default_dbname
        # self.all_notes['vol'] = '＄'
        # print(self.all_notes)
        # self.all_notes.pop('meta')
        # r = reader.Reader(self.all_notes)
        # r.make_glossary()
        with open('../data/' + dbname, 'w') as db:
            json.dump(self.property_dict, db, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    roots = ['../chemistry/basic', '../chemistry/chemistry']
    g = Generator()
    g.muti_generate(roots)
    print(g.property_dict)
