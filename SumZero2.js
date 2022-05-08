
// TODO: Solution 2
// Checking sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] => input
// 1st pair [-4,4] = (-4 + 4) = 0
// 2nd pair [-2, 2] = (-2 + 2) = 0

function getSumPairZero(array){
    
    let left = 0; // In given array it will be -5
    let right = array.length-1; // In given array it will be 8

    // NOTE : This works Only if the array is sorted, Otherwise u need to sort the array first.

    while(left < right){
        sum = array[left] + array[right];
        if(sum === 0){
            return[array[left],array[right]];
        }
        else if(sum > 0) {
            right --; 
            // If sum is > than 0 like +1, +2.. this will shift right index value to -- 1, In give array it will be 6
        }
        else {
            left ++ 
            // If sum is < than 0 like -1,-2.. then it will shift the left index value to  + 1, In give array it will be -4
        }
    }
}

const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
// Big O notation is O(n) Linewar time complexity
console.log(result);