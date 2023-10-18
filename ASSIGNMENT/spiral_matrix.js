const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Define the boundaries
  let fline = 0;
  let lline = 2;
  let left = 0;
  let right = 2;
  
  while (fline <= lline && left <= right) {
    // left to right 
    for (let i = left; i <= right; i++) {
      console.log("first line ",matrix[fline][i]);
    }
    fline++;
  
    // first to last 
    for (let i = fline; i <= lline; i++) {
      console.log("last line top to bottom",matrix[i][right]);
    }
    right--;
  
    // lastline
    if (fline <= lline) {
      // right to left 
      for (let i = right; i >= left; i--) {
        console.log("last line right to left " ,matrix[lline][i]);
      }
      lline--;
    }
  
    // left to middle line
    if (left <= right) {
      // Traverse from lline to fline along the leftmost column
      for (let i = lline; i >= fline; i--) {
        console.log("bottom line to middle till middle to matrix ", matrix[i][left]);
      }
      left++;
    }
  }
  