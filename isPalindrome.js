
// TODO:  How  do you check if given string is a Palindrome or not

// For Strings
// ex: nayan -> true
// ex: sammed -> false
// ex: level -> true
// ex: noon -> true

// For Numbers
// ex: 121 -> true
// ex: 123 -> false
// ex: 101 -> true


// TODO: Case 1: (with inbuilt functions)

// function isPal(str){

//     let rev = str.split("").reverse().join("");
//     // console.log(rev);
//     return str.toLowerCase() === rev.toLowerCase();
// }

// console.log(isPal('nayan')) // O/P => true

// console.log(isPal('sammed')) // O/P => false

// TODO: Case 2:

function isPal(str){
    let newStr = str.toLowerCase();

    let left = 0;
    let right = newStr.length - 1;

    while(left < right) {
        if(newStr[left] !== newStr[right]) return false;

        left++;
        right--;
    }
    return true;
}

console.log(isPal('nayan')) // O/P => true