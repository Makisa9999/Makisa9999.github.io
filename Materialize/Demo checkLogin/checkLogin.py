def checkLogin (user, password):
    uNames = ["Oliver", "Andrew", "Mario"]
    pWords = ["Oliver1", "Andrew1", "Mario1"]
    boolean = False
    for i in range (0, len(uNames), 1):
        if user == uNames[i]:
            if password == pWords[i]:
                boolean = True
    return boolean

print(checkLogin("Oliver", "Oliver1"))
print(checkLogin("Andrew", "Andrew1"))
print(checkLogin("Mario", "Mario1"))
print(checkLogin("Oliver", "Andrew1"))