import os
import yaml

root = '../gitbook/basic'
files = os.listdir(root)
os.chdir(root)
notebooks = sorted([file for file in files if file.endswith('yml')])
print(notebooks)

for book in notebooks:
    a, b, filename = book.split('.')[0].split('-')
    os.system(f'tail -n +4 "{book}" > "{filename}.md"')

#def get_link(title, path):
#    return f'    * [{title}]({path}.md)'

'''

for book in notebooks:
    a, b, filename = book.split('.')[0].split('-')
    with open(book, 'r') as f:
        content = yaml.load(f.read())
    path = 'chemistry/' + filename  # README'
    title = content['meta']['title']
    print(get_link(title, path))
'''