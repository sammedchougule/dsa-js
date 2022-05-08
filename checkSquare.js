
// TODO: Checking Square in another array
// arr1 = [1,2,3,4], arr2 = [1,9,4,16] - Case1
// arr1 = [1,2,4,2], arr2=[1,4,4,16] - Case2

// Conditions

// Case2
// map1={1:1,2:2,4:1}
// map2={1:1,4:2,16:1}

function checkSquare(arr1,arr2){
    let map1 = {};
    let map2 = {};

    for (item of arr1){
        map1[item] = (map1[item] || 0) + 1;
    }
    //console.log("map1 ",map1); // This gives a obj of arr1
    // O/P => map1 { '1': 1, '2': 2, '4': 1 }
    for (item1 of arr2){
        map2[item1] = (map2[item1] || 0) + 1;
    }
    //console.log("map2 ",map2); // This gives a obj of arr2, 
    // O/P => map2  { '1': 1, '4': 2, '26': 1 }

    // Getting key from map1
    for (let key in map1){
        console.log("key ", key)
        if(!map2[key * key]){ // Checking obj key compare in term of square
            return false; 
        }
        if(map1[key] !== map2[key * key]){ // vlaue comapre
            return false;
        }
    }
    return true;
}

const res = checkSquare([1,2,4,2],[1,4,4,16]);
console.log(res); // O/P => 'true', if arra1 values squares present in arr2

// O(n) time complexity linear