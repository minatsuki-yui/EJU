import json
import yaml

def get_common(el):
    #with open('../化学/meta.yml', 'r') as y:
    #    meta = yaml.load(y.read())
    with open('../data/all_elements.json', 'r') as j:
        data = json.loads(j.read())
    '''
    
    

    common_els = meta.get('symbols')['common']

    groups = {}

    for x in range(1,19):
        groups[str(x)] = []

    for el in common_els:
        groups[data[el]['group']].append(el)

    return groups
    '''
    return data[el]

if __name__ == '__main__':
    print(get_common_group())