
// TODO: Find the maximum occuring charecter in given String?

//Ex: "hello world" => O/P => "l" (which element is repeating more times)

function getCharString(str){

    const map = {};
    str.split("").forEach(element => {
        map[element] = map[element]?map[element]+1:1;
        // console.log(map[element]); // Shows how many times elements are in the array [1,1,1,2,1,1,2,1,3,1]
    });
    let max = 1;
    char = str[0];
    for(let k in map){
        if(map[k] > max){ // if whichever is highest that will return
            max = map[k];
            char = k;
            //console.log(k,"is repeated "+map[k],"times") // l is repeated 3 times
        }
    }
    return char;
}


const res = getCharString("Helloworld");
console.log(res)



/*
   console.log(str.split('')); 
  ['H', 'e', 'l', 'l',
  'o', 'w', 'o', 'r',
  'l', 'd']
  */