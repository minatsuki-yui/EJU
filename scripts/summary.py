import os
import yaml


class Summary(object):
    def __init__(self):
        self.root = ''#'../chemistry/'
        self.output = '../gitbook/SUMMARY.md'
        self.sections = ['basic', 'chemistry']

        self.part_now = 0
        self.section_num = 0
        self.page_list = [
            '# Summary\n',

            '* [Introduction](README.md)\n',

            '### basics\n'
        ]
        self.parts = [
            '* [物質の構成](basic/composition.md)',
            '* [物質量と化学反応式](basic/equation.md)',
            '* [物質の変化](basic/change.md)',
            '* [物質の状態](chemistry/state.md)',
            '* [熱·電·平衡](chemistry/heb.md)',
            '* [無機非金屬](chemistry/nonmetal.md)',
            '* [無機金屬](chemistry/metal.md)',
            '* [有機](chemistry/organic.md)',
            '* [高分子](chemistry/macromolecule.md)'
        ]

    @staticmethod
    def get_link(t, p):
        return f'    * [{t}]({p}.md)'

    def make(self):
        section = self.sections
        self.make_section(section[0])
        self.page_list.append('\n### main\n')
        self.make_section(section[1])
        content = '\n'.join(self.page_list)
        print(content)
        with open(self.output, 'w') as md:
            md.write(content)

    def make_section(self, di):
        working_dir = self.root + di
        files = os.listdir(working_dir)
        os.chdir(working_dir)
        notebooks = sorted([file for file in files if file.endswith('yml')])

        for book in notebooks:
            a, b, filename = book.split('.')[0].split('-')
            if a != self.section_num:
                self.section_num = a
                part_title = self.parts[self.part_now]
                self.page_list.append(part_title)
                self.part_now += 1
            with open(book, 'r') as f:
                content = yaml.load(f.read())
            path = di + '/' + filename  # README'
            # print(path)
            title = content['meta']['title']
            file_summary = self.get_link(title, path)
            # print(file_summary)
            self.page_list.append(file_summary)
        os.chdir('..')


if __name__ == '__main__':
    s = Summary()
    s.make()
