def inverte(f):
    def inverte(stringue):
        return f(stringue[::-1])

    return inverte


@inverte
def minhaStringue(stringue):
    return stringue



if __name__== "__main__":
    print(minhaStringue("Maycon Robson Campos"))