
// TODO: Solution 1
// Checking sum zero - Problem 1
// [-5,-4,-3,-2,0,2,4,6,8] => input
// 1st pair [-4,4] = (-4 + 4) = 0
// 2nd pair [-2,] = (-2 + 2) = 0

function getSumPairZero(array){
    for (let number of array){
        //console.log('Outer Loop'); // Shows How many time loop runs and gives 'Outer Loop'
        for(let j = 1; j < array.length; j++){
            //console.log('Inner Loop');  // Shows How many time loop runs and gives 'Inner Loop'
            if(number + array[j] === 0){
                return [number, array[j]];
            }
        }
    }
}

const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
// Big O notation is O(n^2) quadratic is time complexity
console.log(result);

// More Improvise Methos in SumZero2.js