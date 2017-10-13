 function search_A_2D_Matrix(matrix, target){
   
   const m = matrix.length;
   const n = matrix[0].length;
   let start = 0;
   let end = m*n - 1;
   
    while (start + 1 < end) {
        let mid = Math.floor(start + (end - start) / 2);
        let x = Math.floor(mid / n), y =  mid % n;
        if (matrix[x][y] == target) {
            return true
        } else if (matrix[x][y] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
   
    x = Math.floor(start / n), y = start % n ;
    if (matrix[x][y] === target) {
        return true;
    }
    x = Math.floor(end / n), y = end % n ;
    if (matrix[x][y] === target) {
        return true
    }
    return false;
   
   return 0;
 }
 
 search_A_2D_Matrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
],3)