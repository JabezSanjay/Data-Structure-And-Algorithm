# Method-1
def reverseStringOne(string):
    string = string[::-1]
    return string


# Method-2
def reverseStringTwo(string):
    reversedString = ""
    for i in string:
        reversedString = i + reversedString
    return reversedString


reverseStringOne("Hello")
reverseStringTwo("Hello")
