text = "700 6 500 300 300 100 100 100"

sublist = text.split()

total = int(sublist[0])

numberOfItems = int(sublist[1])

lst = []

for i in range(0, numberOfItems, 1):
    lst.append(int(sublist[2+i]))

