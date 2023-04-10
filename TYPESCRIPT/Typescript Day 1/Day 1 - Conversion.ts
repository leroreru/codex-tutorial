let stringBool ='false' //false diconvert akan selalu true,karena sting kosong saja yang bernilai false
console.log(typeof stringBool)

let newStringBool = Boolean(stringBool);
console.log(typeof newStringBool);
console.log(typeof newStringBool.toString());
console.log(+newStringBool)


//number ke string
let string =20
let newString = String(string)
console.log(typeof newString)
console.log(newString)