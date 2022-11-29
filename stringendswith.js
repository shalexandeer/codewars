let solution = (str,ending) =>{
    return (str.slice(-(ending.length)) == ending || ending == '') ? true : false
}
console.log(solution('abcd','e'));