let deleteNth = (arr,n) => {
    var count = {}
    arr.forEach((e) =>  count[e] ? count[e]++ : count[e]= 1 );
    console.log(Object.values(count));
    for([key,val] of Object.entries(count)){
        if(val > n){
            Object.assign({val : n})
        }
    }
    console.log(count);
}
console.log(deleteNth([20,37,20,21], 1));