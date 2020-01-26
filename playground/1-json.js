const fs = require('fs')
//stringify : js의 값을 json 문자열로 변환한다. 

// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// console.log(bookJSON) //string &&& object 아님

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author) //js object 임

// const dataBuffer = fs.readFileSync('1-json.json') //content of the file
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
// console.log(dataBuffer.toString())


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gunther'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)