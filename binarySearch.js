
// TODO: Binary Search
// Divide & Conquerer Technique
// Find the index of given no in a sorted array, 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -> output

// Condtion
// min = 0, element in array is => 1
// max = array.length - 1,  element in array is => 15
// midIndex = (min + max) / 2 = (0+14) / 2 => 7, element on 7th index is 8
// if array[midIndex] < number(7)
// min = midIndex + 1

// else if array[midIndex] > number
// max = midIndex - 1, min = 0, max = 8, array => { 1,2,3,4,5,6,7 }, then again 
// (min + max) / 2 => 3
// index + 1 => 4 (min), max = 6 { 5, 6, 7 }
// (min + max) / 2 = 5 + 1 => 6 (min), max = 6
// (min + max) / 2 => 6
// else midIndex = > element = 7

function searchAlog(array,num) {
    let min = 0;
    let max = array.length - 1;
    while(min <= max){
        let midIndex = Math.floor((min + max) / 2);
        // console.log("midIndex=>" + midIndex + " min=>"+ min + " max=>" + max);
        // This will show the how loop run
        if(array[midIndex] < num){
            min = midIndex + 1
        }else if(array[midIndex] > num){
            max = midIndex - 1;
        }else{
            return midIndex;
        }
    }
    return -1;
}

const result = searchAlog([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(result); // O/P => 6 (index value of 7)

// time complexity is binary O(log (n))