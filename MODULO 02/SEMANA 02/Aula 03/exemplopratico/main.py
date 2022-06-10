from bcb import sgs, currency
import matplotlib.pyplot as plt

#ipca = sgs.get(('IPCA', 433), last=24)
#
#print(ipca)

#plt.title("IPCA Acumulado 24 meses")
#plt.plot(ipca)
#plt.show()

df = currency.get(['USD'], start='2020-01-01', end='2022-06-01', side='ask')

df.head()

plt.title("Cotação Dólar desde 2020")
plt.plot(df)

plt.show()