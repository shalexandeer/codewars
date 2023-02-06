//synchronus
// const getUserSync = (id) =>{
//     let nama = (id === 1) ? 'Sandhika' : 'Galih' 
//     return {id,nama}
// }
// const userSatu = getUserSync(1)
// console.log(userSatu);

// const userDua = getUserSync(2)
// console.log(userDua);

// const halo = 'Hello world';
// console.log(halo);


// asynchronus
const getUserSync = (id, callback) => {
    const time = id === 1 ? 3000 : 2000
    setTimeout(() => {
        const nama = (id === 1) ? 'Sandhika' : 'Galih' 
        callback({id, nama})
    },time)
}
const userSatu = getUserSync(1, (hasil) => console.log(hasil))
const userDua = getUserSync(2, (hasil) => console.log(hasil))
const halo = "hello world"
console.log(halo);