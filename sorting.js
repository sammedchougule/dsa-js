
// TODO: Sorting using Recursion function

// [2,3,1,4] -> By Default case, 
// [2,1,3,4] -> if (i > j) then replace it with i = j, then
// [1,2,3,4] -> final array is sorted

let myArray = [2,3,1,4]

let myNewArray = [];

let i = 0;
let j = 1;

// First we check if the array is sorted, then we run below function

function isSorted(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i+1]){
            return false;
        }
    }
    return true;
}

// We run one more funtion to check conditions for sorting elments in array

function sortCheck(array){

    // just checking
        // const re = isSorted(array); 
        // console.log(re); 
        //Checking array if it false then give false untill its true and then give sorted array
    // checked

    if(isSorted(array)){
        myNewArray = array; // we storing the sorted array in this "myNewArray"
        return;
    }
    else if (array[i] < array[j]) { // check ith element is less than jth element, if true then, 
        // go for next element => i++ and j++
        i++;
        j++;
        sortCheck(array); // agian we call funtion here, and check again 
        // else i > j then do below else part as swapping
    }
    else {
        [array[i],array[j]]=[array[j],array[i]] 
        // swaping elements => i will be j, and j will be i, if i is greater than j,
        // then again start from bigining as doing below i=0 & j=1, becoz its swapped
        i=0;
        j=1;
        sortCheck(array);
    }
}
sortCheck(myArray);
console.log(myNewArray);