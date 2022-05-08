// TODO: Recursion : when function call itself
// otherwise it will get claeed for infinite time
// if a function itself then there must be an end point

// function demo() {
//     console.log("bas kar bhai");
//     //console.log(demo()); // calling function inside function
//     // it will run some time itself then, after sometime 
//     // it will show error as => (isStackOverflowError(e))
//     // it stops and returns => "Maximum call stack size exceeded"
// }
// demo();

let counter = 1;
function demo(number){
    if(counter > number){
        return;
    }
    console.log("Hi sammed"+counter);
    counter ++;
    demo(number); // Recursion function
}

 demo(5); // if you give some vlaue as '5' number then while calling,
 // runs 10 times as "Hi sammed1, Hi sammed2..,Hi sammed5"

// demo(); // Here if you dont give any vlaue, then it will run infinite time and stops somepoint of time
