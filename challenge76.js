let numbersArray = (array) => {
    let sew = []
    array.forEach((e,i) => (isNaN(e)) ? sew.push(i): sew.push(parseInt(e)))
    return sew
}
console.log(numbersArray(['2','5','a','7','b','a']));