
text = "12 Jim 1.45 m Sally 187 cm Joey 1064 mm Roel 15.23 dm Karl 134 cm Melanie 18.9 dm Jill 1.54 m Sam 133 cm Joel 1877 mm Roger 17.83 dm Karen 178 cm Marnie 17.9 dm"
sublist = text.split()
names = []
height = []
units = []
for i in range(1, len(sublist), 3):
    names.append(sublist[i])
for l in range(2, len(sublist), 3):
    height.append(sublist[l])
for n in range(3, len(sublist), 3):
    units.append(sublist[n])
names2 = []
allInMeters = []
for k in range(0, len(names), 1):
    if units[k] == "m":
        allInMeters.append(float(height[k]))
        names2.append(names[k])
    elif units[k] == "dm":
        newheight = float(height[k]) / 10
        allInMeters.append(newheight)
        names2.append(names[k])
    elif units[k] == "cm":
        newheight = float(height[k]) / 100
        allInMeters.append(newheight)
        names2.append(names[k])
    else: 
        newheight = float(height[k]) / 1000
        allInMeters.append(newheight)
        names2.append(names[k])
'''
#Don't know how to select the biggest height
maxvalue = max(allInMeters)
aa = allInMeters.index(maxvalue)
print(names2[aa])
'''
#['Jim', 'Sally', 'Joey', 'Roel', 'Karl', 'Melanie', 'Jill', 'Sam', 'Joel', 'Roger', 'Karen', 'Marnie']
#[1.45,    1.87,   1.064, 1.523,   1.34,    1.89,      1.54,  1.33,  1.877,  1.783,    1.78,    1.79]
namesFinal = []
values = []

for i in range(0, 5):
    max1 = max(allInMeters)
    indexof = allInMeters.index(max1)
    values.append(allInMeters[indexof])
    namesFinal.append(names2[indexof])
    allInMeters.remove(allInMeters[indexof])
    names2.remove(names2[indexof])
for i in range(len(namesFinal)):
    print(namesFinal[i])