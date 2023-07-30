function myPow(x: number, n: number): number {
    if (n === 0){
        return 1;
    }
    if (n < 0){
        x = 1 / x;
        n = -n;
    }
    return P(x,n);
}
    function P(x: number, n: number): number {
        if (n === 1){
            return x;
        }
        const Px = P(x,Math.floor(n/2));
        if (n % 2 === 0) {//si n es par
            return Px * Px;
        } else {
            return Px * Px * x;//para n impar
        }
    }