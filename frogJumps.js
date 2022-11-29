let solution = (a) => {
    if(a.length == 1 && a[0] != 0) return a.length
    let array = []
    let steps = 0;
    for(let i = 0 ; i < a.length;){
        array.push(a[i])
        i+=a[i];
        steps = i
        if(i == 0) return -1
        if(array.reduce((a,b) => a+b,0) >= a.length || array.reduce((a,b) => a+b,0) < 0) return array.length
    }
    console.log(steps);
} 
console.log(solution([1, 2]));

