// 要素一つ一つに関数を呼び出してその結果からできる配列を作る

// コールバック関数を渡す()内のやつ
//  returnされた要素を使う

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubles = numbers.map(function (number) {
  //doublesっていう変数に結果を保存
  return number * 2 //重要 ないとundefined
})

console.log(doubles)

// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const movies = [
  {
    title: "数分間のエールを",
    score: 95,
  },
  {
    title: "トラぺジウム",
    score: 95,
  },
  {
    title: "ドラえもん",
    score: 80,
  },
]

const titles = movies.map(function (movie) {
  return movie.title
})

console.log(titles)
// [ '数分間のエールを', 'トラぺジウム', 'ドラえもん' ]


// // function (movie) {
//   return movie.title
// }

// ここがコールバック関数


// mapの演習問題
// mapメソッドの練習をしましょう！firstNamesという変数を定義してください。fullNamesにmapをかけて、名前（first）だけを取り出してfirstNamesに代入してください。

// 下のようになります：

// console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

// 下のコードは編集しないでください:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// この下にコードを書いてください

const firstNames = fullNames.map(function(object){
  return object.first
})