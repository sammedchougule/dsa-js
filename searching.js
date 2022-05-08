// Serching

let  name = ["sam","vivek","vishal","ajeet"];
// console.log(name.indexOf('vishal')); // O/P gives the index of an element in an array
// console.log(name.includes('visha')); // O/P gives true if element is presnt in array if not then false

// TODO: Linear Search Algorithm

const users = [{username: "sam", email: "sam@gmail.com"},
                {username: "vivek", email: "vk@gmail.com"},
                {username: "vishal", email: "vishaa@gmail.com"}
            ]

function searchUser(array,val){
    for (let item of array){
        if(item['username'] === val){
            return true;
        }
    }
    return false;
}

const res = searchUser(users,"vivek")
console.log(res) // O/P => 

// time complexity is linear, O(n)