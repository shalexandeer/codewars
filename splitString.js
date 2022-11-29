// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the 
// missing second character of the final pair with an underscore ('_').



let solution = (str) =>{
    if(str.length % 2 != 0)str = str.concat('_')
    return str.match(/.{2}/g);
}   

console.log(solution('abcdefg')); 