a = input()
b = input()
c = input()
d = input()
e = input()
f = input()

data = []

data.append(a)
data.append(b)
data.append(c)
data.append(d)
data.append(e)
data.append(f)
wins = 0
for i in range(0, len(data), 1):
    if data[i] == "W":
        wins = wins + 1

if wins == 6 or wins == 5:
    print(1)
elif wins == 4 or wins == 3:
    print(2)
elif wins == 2 or wins == 1:
    print(3)
else:
    print(-1)