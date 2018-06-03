import os
import yaml
import json
from yaml.reader import ReaderError
import reader


class Generator(object):
    def __init__(self):
        self.cwd = os.getcwd()
        self.all_notes = {}
        self.default_dbname = 'まとめ'
        self.current_filename = ''

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
        print(self.current_filename)
        with open(file_name, 'r') as f:
            content = yaml.load(f.read())
        # print(content)
        for each in content:
            self.all_notes[each] = content[each]
        del content

    def write_out(self, dbname):
        # self.all_notes['title'] = self.default_dbname
        # self.all_notes['vol'] = '＄'
        #print(self.all_notes)
        self.all_notes.pop('meta')
        #r = reader.Reader(self.all_notes)
        #r.make_glossary()
        with open(dbname, 'w') as db:
            json.dump(self.all_notes, db, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    roots = ['../化学/basic','../化学/chemistry']
    g = Generator()
    g.muti_generate(roots)
