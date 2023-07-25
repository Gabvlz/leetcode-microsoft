function esPalindromo(x: number): boolean {
    if (x < 0) {
        return false;
    }
    let numeroInvertido = 0;
    const numeroOriginal = x;
    while (x > 0) {
        numeroInvertido = numeroInvertido * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return numeroOriginal === numeroInvertido;
}
