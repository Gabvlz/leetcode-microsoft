function longestCommonPrefix(strs: string[]): string {
    let k: string = strs[0];
        for (let i = 1; i < strs.length; i++) {
          while (strs[i].indexOf(k) !== 0) {
            k = k.slice(0, -1);
            if (k === '') {
              return k;
            }
          }
        }
    
        return k;
    };