
// TODO: Helper Recursive Function
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9] => Output
// Solution if number % 2 !== 0 

function findOdd(array){
    let result = [];

    function helperRecursive(inputArray){
        //console.log("Calling...") // can check how many times its calling
        if(inputArray.length === 0){
            return;
        }if(inputArray[0] % 2 !== 0){ // Equation For odd number 
           result.push(inputArray[0])
        }
        helperRecursive(inputArray.slice(1)) 
        // "slice" used for ignoring the every 1st element then check remaining element   
    }
    helperRecursive(array);
    return result;

}

const res = findOdd([1,2,3,4,5,6,7,8,9,10]);
console.log(res);