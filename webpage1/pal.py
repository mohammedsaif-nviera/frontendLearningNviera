# a b c d d e m a d a m g o e o k l t m t
string = "abcddemadamgoeokltmt"
newString = ""


def palindrome(word):
    if word == word[::-1]:
        return True
    return False


for letter in range(len(string)):
    for i in string[letter:]:
        newString += i
        if palindrome(newString):
            if len(newString) > 1:
                print(newString)
    newString = ""
