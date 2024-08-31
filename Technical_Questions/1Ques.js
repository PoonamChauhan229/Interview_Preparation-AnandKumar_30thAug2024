// Create a function that takes an array of numbers and return "Boom!" ,if the digit 7 appears in the array.
// Otherwise, return "there is no 7 in the array".

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"

//javascript methods
function sevenBoom(arr){
    //console.log(arr)
    //include method both in string and array
    // convert into a string
    //join()
    let newstr=arr.join("")
    //console.log(newstr.includes('7'))
    if(newstr.includes('7')){
        console.log("Boom")
    }else{
        console.log("there is no 7 in the array")
    }
    
}
// Testcase1:
sevenBoom([1, 2, 3, 4, 5, 6, 7]) //➞ "Boom!"

//Testcase2:
sevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"

//Testcase3:
sevenBoom([2, 55, 60, 97, 86]) //➞ "Boom!"

var q
let a;
const b; //error
