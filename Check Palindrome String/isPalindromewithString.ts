function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-zA-Z0_9]/g,'');//Primero se indican todas las letras a minusculas y se reemplaza todos los caracteres que nosean alfanumericos por una cadena vacía 
    let left = 0;
    let right = s.length - 1;//Se da inicio a las variables que representan los indices primero y último
    while(left<right){//Si el indice primero es menor que el último se cumple la condición y se da inicio al bucle
        if(s[left] !== s[right])//Si son distintos los indices en alguna comparación entrega false
        return false;
        left++;
        right--;//Se avanza al siguiente par de caracteres y se sigue comparando
    }
    return true;
};