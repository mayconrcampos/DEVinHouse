import time

"""
Calculando tempo de execução
"""

hora_inicio = time.time()

for n in range(10):
    time.sleep(0.1)
    
   


hora_final = time.time()
total = hora_final - hora_inicio

print(f"{total:.3f}segs")