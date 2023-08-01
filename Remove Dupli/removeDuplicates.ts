const removeDuplicates = (nums : number[]): number => {
    if (nums.length === 0) {
        return 0; //Se verifica que la lista nums contenga números, si no es así retorna 0
    }
    let k : number = 1; //Iniciamos posición 1 de conteo
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums [i]; //Si el número siguiente es distinto, se suma a la lista k
            k++;
        }
    }
    return k;
}