"""
Usando o zip
"""

#lista1 = [1, 2, 3, 4, 5, 6, 7, 8]
#lista2 = ["Batata", "Cebola", "Alho", "Cenoura", "Goiaba", "Beterraba", "Alface", "Pinhão"]
#
#
#for i, j in zip(lista1, lista2):
#    print(i, j)
#


# Calculando itens de duas listas
nums1 = [1, 2, 3, 4, 5, 6, 7]
nums2 = [10, 11, 12, 13, 14, 15, 16, 17]

for n1, n2 in zip(nums1, nums2):
    print(n1 * n2)

multiplicados = [n * n1 for n, n1 in zip(nums1, nums2)]

print(multiplicados)


