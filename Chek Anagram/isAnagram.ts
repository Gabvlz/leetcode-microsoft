function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const charS : Record<string, number> = {} //Se tipea cada key y así lo acepta como objeto clave
    const charT : Record<string, number> = {}
    for (const char of s) {
        charS[char] = (charS[char] || 0) +1;
    }
    for (const char of t) {
        charT[char] = (charT[char] || 0) +1;
    }
    for (const char in charS){ // Comparamos frecuencias para s y t
        if (charS[char] !== charT[char]){
            return false;
        }
        if (!(char in charT)){
            return false;
        }
    }
    return true
};