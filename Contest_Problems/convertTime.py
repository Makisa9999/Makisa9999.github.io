
time1 = input()

a = time1[0:2]
minutes = time1[3:5]
a = int(a)
b = ""
if a <= 12:
    b = "AM"
else:
    b = "PM"
c = a - 12  
if c > 9:
    zeroOnStart = ""
else:
    zeroOnStart = "0"
if b == "AM":
    print(time1, b)
else:
    print(zeroOnStart+str(c)+":"+str(minutes), b)