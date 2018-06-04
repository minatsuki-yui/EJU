import yaml

with open('../化学/meta.yml','r') as y:
    s = yaml.load(y.read())

p = s['predefine']
d = {}
for e in p:
    for k in e:
        d[k] = e[k]

print(d)