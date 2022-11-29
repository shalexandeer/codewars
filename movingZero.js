function moveZeros(arr) {
    let out = []
    let string = []
    let last = []
    arr.forEach(e => {
        string.push(e.toString());
    });
    for(let i = 0; i < string.length; i++){
        if (/^\d+$/.test(string[i]) == true){
            last.push(parseInt(string[i]))
        }else{
            last.push(string[i])
        }
    }
    
    last.forEach((e,i) => {
        if(e == 0){
            out.push(e)
            last.splice(i, 1)
        }
    });
    return last.concat(out);
  
    
}
let arr = [false,1,0,1,2,0,1,3,"a"]
moveZeros(arr)