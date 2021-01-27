row1 = input()
row2 = input()
row3 = input()
row4 = input()

row1List = row1.split()
row2List = row2.split()
row3List = row3.split()
row4List = row4.split()

addedRow1 = 0
addedRow2 = 0
addedRow3 = 0
addedRow4 = 0
addedColumn1 = 0
addedColumn2 = 0
addedColumn3 = 0
addedColumn4 = 0

for i in range(0, 1, 1):
    addedRow1 = int(row1List[i]) + int(row1List[i+1]) + int(row1List[i+2]) + int(row1List[i+3])
    addedRow2 = int(row2List[i]) + int(row2List[i+1]) + int(row2List[i+2]) + int(row2List[i+3])
    addedRow3 = int(row3List[i]) + int(row3List[i+1]) + int(row3List[i+2]) + int(row3List[i+3])
    addedRow4 = int(row4List[i]) + int(row4List[i+1]) + int(row4List[i+2]) + int(row4List[i+3])
    addedColumn1 = int(row1List[i]) + int(row2List[i]) + int(row3List[i]) + int(row4List[i])
    addedColumn2 = int(row1List[i+1]) + int(row2List[i+1]) + int(row3List[i+1]) + int(row4List[i+1])
    addedColumn3 = int(row1List[i+2]) + int(row2List[i+2]) + int(row3List[i+2]) + int(row4List[i+2])
    addedColumn4 = int(row1List[i+3]) + int(row2List[i+3]) + int(row3List[i+3]) + int(row4List[i+3])

if addedRow1 == addedRow2 == addedRow3 == addedRow4 == addedColumn1 == addedColumn2 == addedColumn3 == addedColumn4:
    print("magic")
else:
    print("not magic")
'''
5 10 1 3
10 4 2 3
1 2 8 5
3 3 5 0
'''