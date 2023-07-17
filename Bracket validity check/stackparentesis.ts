function isValid(s: string): boolean {
    const stack: string[] = [];
    const brackets: { [key: string]: string } = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let char of s) {
      if (char in brackets) {  // Paréntesis de apertura
        stack.push(char);
      } else {  // Paréntesis de cierre
        const parentesisAbierto = stack.pop();
        if (char !== brackets[parentesisAbierto]) {
          return false;  // Paréntesis de cierre inválido
        }
      }
    }
  
    return stack.length === 0;
  }
  