arr = ["kuldeepBish", "chandan", "aadharsh", "mohammedSaif"]
arrayWithLen = {}

for item in arr:
    arrayWithLen[item] = len(item)
arr = []
for i in range(len(arrayWithLen)):
    maxLen = max(arrayWithLen, key=arrayWithLen.get)

    arr.append(maxLen)
    del arrayWithLen[maxLen]
print(arr)
