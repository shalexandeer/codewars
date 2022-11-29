let createPhoneNumber = (numbers) => {
    return `(${numbers.slice(0,3).toString().replace(/\W/g, '')}) ${numbers.slice(3,6).toString().replace(/\W/g, '')}-${numbers.slice(6,10).toString().replace(/\W/g, '')}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))