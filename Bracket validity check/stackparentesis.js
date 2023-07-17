function isValid(s) {
    const stack = [];
    const parentesis = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let char of s) {
      if (char in parentesis) {  // Paréntesis de apertura
        stack.push(char);
      } else {  // Paréntesis de cierre
        const bracketsAbierto = stack.pop();
        if (char !== parentesis[bracketsAbierto]) {
          return false;  // Paréntesis de cierre inválido
        }
      }
    }
  
    return stack.length === 0;
  }
  