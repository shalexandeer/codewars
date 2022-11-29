let count = (e) => {
    var count = {};
    [...e].forEach(function(s){
        count[s] ? count[s]++ : count[s]= 1
    })
    return count
   
}
console.log(count("abatasajadagha"))