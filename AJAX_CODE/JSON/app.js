const data = `{"ticker":{"base":"BTC","target":"JPY","price":"3613100.70045780","volume":"111.31320536","change":"8482.29820400"},"timestamp":1626220682,"success":true,"error":""}`
const formatted = JSON.parse(data)

const dog = { name: "Pochi", colors: ["orange"], isAlive: true , owner: undefined}//* owner: undefinedはjsonにならない

JSON.stringify(dog)
// const orangeColor = dog.colors[0];
// console.log(orangeColor); // "orange"
