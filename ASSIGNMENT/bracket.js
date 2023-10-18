function bracket(br) {
    const arr = [];
  
    for (let i = 0; i < br.length; i++) {
      const brac = br[i];
      if (brac === '(' || brac === '[' || brac === '{') {
        arr.push(brac);
      } else {
        if (arr.length === 0) {
          return false;
        }
  
        const left = arr.pop();
  
        if (
          (brac === ')' && left !== '(') ||
          (brac === ']' && left !== '[') ||
          (brac === '}' && left !== '{')
        ) {
          return false;
        }
      }
    }
  
    return arr.length === 0;
  }
  

  console.log(bracket("{)}")); 
  