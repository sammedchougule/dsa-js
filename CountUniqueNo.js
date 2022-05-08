// count Unique Numbers
//  i j
// [1,1,2,2,3,4,4,5,6,7,8,8]

// O/P -> 8

// Conditions
// i=0(index no.), j=1
// array[i] !== array[j]
// 1. i++
// 2. array[i] = array[j]

function countUnique(array){
    if(array.length > 0){
        let  i = 0;
        for (let j = 1; j < array.length; j++){
            if(array[i] !== array[j]){
                //if in array ith value is same as j then go next index value that i++
                i++;
                array[i] = array[j] 
                // it will replace the [j]th value in [i]'th value
                // console.log(array) // Can see how it will looping
                // console.log(i) // O/P => [1,2,3,4,5,6,7,8]
            }
        }
        return i + 1;
        // return the only unique values in array
    }
    else {
        throw new Error("Array is Empty")
    }
}

const result = countUnique([1,1,2,2,3,4,4,5,6,7,8,8]);
console.log(result) // O/P => 8

// O(n) Linear time complexity