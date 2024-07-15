// .を使ってるときはメソッドであり関数である。
// しかし、必ずしも 関数=メソッド ではない

// const myMath = {
//   PI: 3.14,
//   square: function (num) {
//     return num * num
//   },
//   cube: function (num) {
// return num ** 3
//   }
// }

//! 上の省略形はこれ

const myMath = {
  PI: 3.14,
  square(num) {
    return num * num
  }, //カンマ(,)忘れずに
  cube(num) {
    return num ** 3
  },
}

console.log(myMath.PI)
const a = myMath.square
console.log(a(11))




// squareというオブジェクトを定義して、areaとperimeterというメソッドをもたせてください。

// areaはsideという引数を一つ受け取って、sideを2乗した値を返します

// perimeterはsideを受け取って、4を乗算した値を返します

// square.area(10) //100
// square.perimeter(10) //40


const square = {
  area(side) {
      return Math.pow(side,2)
  }, //(,)忘れないで!!!!!!!!
  perimeter(side) {
      return side * 4
  }
}