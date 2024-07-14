let names = ["potato", "tomato", "onion", 1, 2]
let colors =[]
console.log(names[0])
console.log(names)
console.log(colors)
console.log(typeof(names))
console.log(typeof(colors))
console.log(names.length)
// 配列の中身を表示
for(let i = 0; i < names.length; i++) {
  console.log(names[i])
}


//下のコードは編集しないでください
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//この下にコードを書いてください
console.log(restaurant.address)
let fullAddress = restaurant.address + restaurant.city + restaurant.state + restaurant.zipcode