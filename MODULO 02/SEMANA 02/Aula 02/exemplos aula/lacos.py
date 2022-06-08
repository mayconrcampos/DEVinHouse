"""
    Laços de repetição
"""

# tabuada

#for i in range(1, 11):
#    print(f"Tabuada de {i}")
#    for j in range(1, 11):
#        print(f"{i} x {j} = {i * j}")

# tabuada com while

i = 1
j = 1

while i <= 10:
    print(f"Tabuada de {i}")
    while j <= 10:
        print(f"{i} x {j} = {i * j}")
        j += 1

        if j == 11:
            j = 1
            i += 1
            if i == 11:
                break
    break

