import os
# import yaml
import json


class Summary(object):
    def __init__(self):
        self.root = '../chemistry/'
        self.output = '../docs/.vuepress/sidebar.json'
        self.sections = ['basic', 'chemistry']

        self.group_now = 1
        self.section_index = 0
        # self.section_now = ''

        self.groups = [
            '物質の構成',
            '物質量と化学反応式',
            '物質の変化',
            '物質の状態',
            '熱·電·平衡',
            '無機非金屬',
            '無機金屬',
            '有機',
            '高分子'
        ]
        self.data = {}

    def make(self):

        [self.make_section(d) for d in self.sections]
        print(self.data)

        self.dump()

    def make_section(self, di):
        working_dir = self.root + di
        files = os.listdir(working_dir)
        os.chdir(working_dir)
        notebooks = sorted([file for file in files if file.endswith('yml')])
        self.data[f"/{di}/"] = []

        children = []

        for book in notebooks:
            group, index, filename = book.split('.')[0].split('-')
            if self.group_now != int(group):

                self.data[f"/{di}/"].append({
                    'title': self.groups[self.section_index],
                    'children': children
                })
                children = [filename]
                self.group_now = int(group)
                self.section_index += 1
            else:
                children.append(filename)

        self.data[f"/{di}/"].append({
            'title': self.groups[self.section_index],
            'children': children
        })

        os.chdir('..')

    def dump(self):
        with open(self.output, 'w') as dist:
            json.dump(self.data, dist, indent=4, ensure_ascii=False)


if __name__ == '__main__':
    s = Summary()
    s.make()
