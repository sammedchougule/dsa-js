
// TODO: Find the sum of 4 largest numbers in an array

// [1,2,3,4,3,5,4,6,7,8] => Total elements - 10
// Coutn largest sum of Consegative Digits
// num [4,6,7,8] = 4
// sum = 25

// Conditions

// num > num.length -> error 
// total num of digits - sum of digits + 1 = loops
// 10 - 4 + 1 = 7

function findLargest(array,num){
    if(num>array){
        throw new Error("num is must not be array length")
    }else{
        let max = 0;
        // Initiall value of will be 0
        for (let i = 0; i < array.length - num + 1; i++){ // run loops 7 times
            let temp = 0;
            //console.log(temp);  
            for(let j = 0; j < num; j++){ // j < num => run only for 4 values, similarly run next every 4 values
                // console.log('i' + i + 'j', j); // O/P => Shows the every Loops
                temp += array[i + j];
                // console.log(temp); 
                // O/P => gives the sum of an 4 values in an array, means every 4 values in array
            }
            if(temp > max){
                max = temp; // if temp value is greater than max, then it will be added in max.
            }
        } 
         return max;
    } 
}

const result = findLargest([1,2,3,4,3,5,4,6,7,8],4)
console.log(result) // O/P => 25 Becoz sum of largest number in an arry are [4,6,7,8]