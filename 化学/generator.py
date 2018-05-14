import os
import yaml
import json
from yaml.reader import ReaderError


class Generator(object):
    def __init__(self):
        self.all_notes = {}
        self.default_dbname = 'まとめ'
        self.current_filename = ''

    def generate(self, dbname=''):
        cwd = os.listdir(os.getcwd())
        notebooks = sorted([each for each in cwd if each.endswith('yml')])
        print('work on these files:\n')
        # print(notebooks)
        try:
            [self.handle_file(notebook) for notebook in notebooks]
        except ReaderError:
            print(self.current_filename)
            raise
        finally:
            pass
            # print(self.all_notes)
        if not dbname:
            self.write_out(self.default_dbname + '.json')

        print('\nfinished')

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
        self.all_notes['title'] = self.default_dbname
        self.all_notes['vol'] = '＄'
        with open(dbname, 'w') as db:
            json.dump(self.all_notes, db, ensure_ascii=False)


if __name__ == '__main__':
    g = Generator()
    g.generate()
