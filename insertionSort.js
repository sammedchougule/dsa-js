
// TODO: Insertion Sort

// Step1 : Consider 2nd element, arr
// Step2 : arr[j] > curr is true then swap

const arr = [8,2,4,1,3]

const sorted = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i]; // curr = current element ex:"2"
        let j = i-1; // j is 8
        while(j >= 0 && arr[j] > curr){  // (8 > 0 && 8 > 2) then,
            arr[j+1] = arr[j] // [8,2,4,1,3]  
            j--;
        }
        //console.log("Loop -> "+arr); // Show how loop runs
        arr[j+1] = curr; // [2,8,4,1,3]
        //console.log("Swapping -> "+arr); // Show how Swapping run
    }
    return arr; 
}

console.log(sorted(arr))
