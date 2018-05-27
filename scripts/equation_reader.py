def read(eq):
    assert type(eq) == str
    before, after = eq.replace(' ', '').split('->')
    return {
        'reactants': before.split('+'),
        'products': after.split('+')
    }


if __name__ == '__main__':
    print(read('NH3 + HCl -> NH4Cl'))
