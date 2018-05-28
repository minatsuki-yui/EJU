import sys
import os
root = '../化学'
files = os.listdir(root)
os.chdir('../gitbook')
notebooks = sorted([file.split('.')[0].split('-')[-1] for file in files if file.endswith('yml')])
print(notebooks)
[os.system(f'mkdir {n}') for n in notebooks]