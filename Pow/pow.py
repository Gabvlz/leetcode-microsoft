def pow(x,n):
    if n == 0:
        return 1
    if n<0:
        x = 1/x
        n = -n
    return P(x,n)
def P(x,n):
    if n == 1:
        return x
    Px = P(x,n//2) # Matematicamente el comportamiento de x con n ya indica potencia, por lo que con N//2 aseguramos que el número sea un entero redondeando hacia abajo
    if n % 2 == 0: # % me entrega el residuo de la división indicando si n = 0 es par, línea de codigo que ayuda a verificar si es impar o impar y así cual if ejecutar
        return Px * Px # Ya que la función ejecutada Px divine n por la mitad
    else:
        return Px * Px * x # Al ser impar es el doble de la función Px por el argumento x (la base)