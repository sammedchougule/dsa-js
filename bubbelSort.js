
// TODO: Bubble Sort (sorting...)
// A sorting algorith where the largest values bubble up at the top

function bubbleSort(array){
    for(let i = array.length; i > 0; i--){ // "i--" if array length is 6 then 6-1 = 5, loop places bigger element at last then it will not check that last element, so we do 'i--'
        // above loop check till last and place it at the end, and then check again
        console.log("Sorting -> "+array) // This will show how the looping working

        let isSwapped; // TODO: This variable helps if there is only one bigger element and other elements are sorted

        for(let j=0; j<i-1; j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]] // swapping elements

                isSwapped = true; //TODO: if swapping is not possible then show result
            }
        }
        if(!isSwapped){
            break; //TODO: if swapping not done then show result (in case 1st element is only big and other all sorted)
        }
    }
    return array;
}

const res = bubbleSort([56,22,81,20,72,28])
console.log(res); // O/P => [10,21,28,36,52,56]

/*
 -> 56,52,21,36,10,28
 -> 52,21,36,10,28,56
 -> 21,36,10,28,52,56
 -> 21,10,28,36,52,56
 -> 10,21,28,36,52,56
 -> 10,21,28,36,52,56
 */