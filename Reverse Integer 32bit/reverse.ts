function reverse(x: number): number {
    const minnum = -Math.pow(2,31)//indicamos restricciones de mínimo y máximo para 32bit
    const maxnum = -minnum -1
    const negative = x<0
    let reverse = 0//se irá almacenando el valor invertido
    if (negative) {x=-x}//si el valor de x es negativo lo utilizamos como valor absoluto de x
    while (x>0){
        const residuo = x % 10//para obtener el último dígito
        reverse = reverse * 10 + residuo
        x = Math.floor(x/10)//se divide en 10 para eliminar el último digito y continuar almacenando en reverse
    }
    if (reverse > maxnum) {return 0}
    if (reverse < minnum) {return 0}
    return negative ? -reverse : reverse//si es negativo devuelve reverse agregando el signo -, si no es negativo devuelve reverse
};