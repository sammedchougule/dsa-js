// TODO: 
// String Anagram
// 'hello' -> 'llheo' = this is Anagram
// 'samm' -> 'saam' = this is not anagram
// In Anagram string should be same.length and they can be in any order


// Conditions to solve 

// string1 & string2 should be same length
// String 'hello'
// {h:1,e:1,l:2,o:1}
// We need to check letter how many times repeated then reduce it till it become 0, like
// {h:0,e:0,l:0,o:0}  In this ex: 'hello' -> 'llheo', It is Anagram
// {h:0,e:0,l:[l],o:0}  In this ex: 'hello' -> 'llleo', It is Not Anagram becoz in string2 l is 3 times and in string1 it is only 2 times.

isAnagram = (string1,string2) => {
    if(string1.length != string2.length){
        return false;
    }
    let counter = {}
    for(let letter of string1){
        counter[letter] = (counter[letter] || 0) + 1;
        // in this we checking if letter is first time  or inly one then (0+1=1), if its two (l) { (0+1(1stl)) + 1(2ndl) } 
        // console.log(counter[letter]); // O/P = > 1,1,1,2,1
    }
    //console.log(counter) //{ h: 1, e: 1, l: 2, o: 1 }
    for (let items of string2){
        if(!counter[items]){
            //console.log('for third l') // if there is 3rd l then it will print
            // checks if letters are not similar, if not then false
            return false;
            // If letters are not match then it give false, 
            }
        counter[items] -= 1;
        // 
    }
    return true;
}

const result = isAnagram('hello','llheo');
console.log(result) // O/P = > true