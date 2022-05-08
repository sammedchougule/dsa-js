
// TODO: Selection Sort
// [0,2,34,22,10,19]
// assume that 1st element is min and check in array till last, if is there small then swap

// Case1: 

function selectionSort(array){
    for (let i = 0; i < array.length; i++){

        //console.log('Loop -> '+array) // Looping 

        let min = i;
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }

            //console.log(array) // can see how swapping done
            
        }
        if(i !== min){
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

const res = selectionSort([0,2,34,22,10,19]);
console.log(res)