const name = 'Andrew'
const userAge = 27
const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)


const product = {
    label : 'Red notebook',
    price : 3,
    stock : 201,
    salePrice : undefined
}

// const label = product.label
// const stock = product.stock
//default 있으면 그게 나온다.
const {label:productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
const transaction  = (type, {label, stock}) => {
    console.log(type,label,stock)    
}

transaction('order',product)