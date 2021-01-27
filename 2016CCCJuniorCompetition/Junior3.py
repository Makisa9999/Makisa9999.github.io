word = input()
n = len(word)

def printSubStr(str, low, high):
     
    for i in range(low, high + 1):
        print(str[i], end = "")

maxLength = 1
start = 0

for i in range(n):
    for j in range(i, n):
        flag = 1
        for k in range(0, ((j - i) // 2) + 1):
            if (word[i + k] != word[j - k]):
                flag = 0
 
            # Palindrome
        if (flag != 0 and (j - i + 1) > maxLength):
            start = i
            maxLength = j - i + 1
print(maxLength)