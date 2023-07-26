function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    let y = 0;
    const n = x;
    while (x > 0) {
        y = y * 10 + x % 10; //x % 10 utilizado para regresar el residuo, residuo= en este caso el último digito del número original n
        x = Math.floor(x/10); //utilizamos Math.floor dividiendo en 10 para obtener el siguiente digito, en este caso entrega 12,3, aproxima al número entero hacia abajo por lo que nos entrega 12, repitiendo el while me entrega el digito 2 almacenandolo en 'y' y así volviendo a realizar el ejercicio para obtener el siguiente digito hasta que x sea 0  
    }
    return n === y;//comparamos número almacenado invertido con número original
};
