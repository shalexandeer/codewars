
let a = [121, 144, 19, 161, 19, 144, 19, 11] 
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
function comp(array1, array2){
    //your code here
    return JSON.stringify(array1.sort((a,b) => a-b).map((item) => {return item * item})) == JSON.stringify(array2.sort((a,b) => a-b))
   
}
console.log(comp(a,b));