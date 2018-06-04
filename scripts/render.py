import os


class Maker(object):
    def __init__(self):

        self.magic_dict = {'desc': '定义', 'formula': '化学式', 'property': '性质', 'equations': '反应方程', 'calculation': '计算公式',
                           'phenomenon': '现象', 'production': '产物', 'note': '※', 'is': '包括', 'max': '最大的是',
                           'have': '有此现象的', 'lab': '实验室制法', 'industry': '工业制法', 'usage': '用途', 'alias': '别名',
                           'structure': '结构', 'example': '例子', 'bond': '结合', 'monomer': '単量体', 'allotrope': '同素异形体',
                           'solubility': '可溶性'}
        self.output_dir = '../EJU/gitbook/chemistry/'
        self.working_dir = os.getcwd()

    def replace(self, s):
        for each in self.magic_dict:
            if each in s:
                s = s.replace(each, self.magic_dict[each])
            if 'equation' in s:
                s = s.replace('equation', '反应方程')

        return s

    def handle_line(self, s):
        s = self.replace(s)
        if s.startswith(' '):
            return s[2:]
        elif s == '\n':
            return s
        else:
            return f'```\n\n## {s}\n```yaml\n'

    def make_md(self, f):
        lines = self.read_file_lines(f)
        body = lines[4:]
        render_text = [self.handle_line(l) for l in body]
        render_text.append('```')
        #print(render_text[0])
        name = f.split('-')[-1].split('.')[0] + '.md'
        #print(name)
        with open(self.output_dir+name,'w') as md:
            md.write(''.join(render_text).split('\n',2)[-1])
        print(''.join(render_text))

    @staticmethod
    def read_file_lines(path_to_file):
        with open(path_to_file, 'r') as f:
            data = f.readlines()
        return data  # [l for l in data if l != '\n']

    def make_files(self, path_to_files):
        files = os.listdir(path_to_files)
        os.chdir(path_to_files)
        notebooks = sorted([file for file in files if file.endswith('yml')])
        for f in notebooks:
            # print(f)
            self.make_md(f)


if __name__ == '__main__':
    m = Maker()
    #m.make_md('../化学/basic/1-1-pure_substance&mixture.yml')
    m.make_files('../化学/chemistry')
