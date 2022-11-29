function sortArray(array) {
    // Return a sorted array.
    indices = []
    array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);
    // return array
    console.log(array);
    console.log(indices[0]);
}
let arr = [5, 8, 6, 3, 4] 
console.log(sortArray(arr))
