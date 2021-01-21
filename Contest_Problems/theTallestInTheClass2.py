def toMeters (a, b):
    if b == "mm":
        a = float(a) / 1000
        return a
    elif b == "cm":
        a = float(a) / 100
        return a
    elif b == "dm":
        a = float(a) / 10
        return a
    else:
        return a


data = open("DATA.txt", "r")
lst = []
for line in data: 
    a = data.read()
asplit = a.split()
names = []
height = []
units = []
for i in range(0, len(asplit), 3):
    names.append(asplit[i])
    height.append(asplit[i+1])
    units.append(asplit[i+2])
'''
['Jim', 'Sally', 'Joey', 'Roel', 'Karl', 'Melanie', 'Jill', 'Sam', 'Joel', 'Roger', 'Karen', 'Marnie']
['1.45', '187', '1064', '15.23', '134', '18.9', '1.54', '133', '1877', '17.83', '178', '17.9']
['m', 'cm', 'mm', 'dm', 'cm', 'dm', 'm', 'cm', 'mm', 'dm', 'cm', 'dm']
'''
lstHeights = []
beforeNames = names
for i in range(0, len(units), 1):
    b = toMeters(height[i], units[i])
    b = float(b)
    lstHeights.append(b)

finalNames = []
finalHeights = []

for i in range(0, 5):
    maxheight = max(lstHeights)
    indexof = lstHeights.index(maxheight)
    finalHeights.append(lstHeights[indexof])
    finalNames.append(beforeNames[indexof])
    lstHeights.remove(lstHeights[indexof])
    beforeNames.remove(beforeNames[indexof])
    
print(finalNames)
print(finalHeights)
