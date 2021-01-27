'''
12 34 12 34 12 34 12 34
x2 x2 x2 x2 x2 x2 x2 x2 

1+4+3+8+1+4+3+8+1+4+3+8+1+4+3+8 = 64 not divisible with 10 so not valid
'''
creditCardNumber = 4724090327084834
creditCardNumberString = str(creditCardNumber)
sumNumber1 = 0
for i in range(0, 16, 2):
    twoNumbers = creditCardNumberString[i:i+2]
    print(twoNumbers)
    twoNumbersFirstDigit = int(twoNumbers[0])
    print(twoNumbersFirstDigit)
    twoNumbersSecondDigit = int(twoNumbers[1])
    print(twoNumbersSecondDigit)
    twoNumbersSecondDigit = twoNumbersSecondDigit * 2 
    print(twoNumbersSecondDigit)
    if twoNumbersSecondDigit > 9:
        secondDigitStr = str(twoNumbersSecondDigit)
        print(secondDigitStr)
        secondDigitStrFirstDigit = int(secondDigitStr[0])
        print(secondDigitStrFirstDigit)
        secondDigitStrSecondDigit = int(secondDigitStr[1])
        print(secondDigitStrSecondDigit)
        finalSumSecondDigit = secondDigitStrFirstDigit + secondDigitStrSecondDigit
        print(finalSumSecondDigit)
        sumNumber = twoNumbersFirstDigit + finalSumSecondDigit
        print(sumNumber)
#ne mozes svaki put kada ovaj loop prodje kroz ovo da saberes sumNumber u sumNumber1 zato sto onda kada
#ne treba da prodje kroz if statement sabrace ga opet.
#Debug why your card isn't valid
    sumNumber1 = sumNumber1 + sumNumber
    print(sumNumber1)
    print("break")

if sumNumber1 % 10 == 0:
    print("Card is valid!")
else: 
    print("Card is invalid!")