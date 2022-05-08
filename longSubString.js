
// TODO: Longest Substring without repeating charechter

// input: s = "abcabcbb"
// ouput: 3
// Explaination: The answer is "abc", with the length of 3

// NOTE: Substring is every letter must be unique and in sequence

// Technique: Sliding Window

var lengthOfLongestSubstring = function (str) {

    if(!str){
        return 0;
    }

    let end = 0;
    let start = 0;
    let maxlength = 0;

    const UniquCharechters = new Set();

    while(end < str.length){
        if(!UniquCharechters.has(str[end])){
            UniquCharechters.add(str[end]);
            end++;
            maxlength = Math.max(maxlength,UniquCharechters.size);
            
            //console.log(UniquCharechters); // Checking

        }
        else{
            UniquCharechters.delete(str[start]);
            start++;

            //console.log(UniquCharechters); // Checking

        }
    }
    console.log("Unique Set is ->", UniquCharechters)
    return maxlength;
    
};

console.log(lengthOfLongestSubstring("abcabcbb"));
// O/P => 3, charecter of abc+abc has 3 charechters repeateing 


