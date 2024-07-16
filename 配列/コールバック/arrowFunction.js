//* 関数式を簡単に書く代替構文　制限あり

// const add = function (x, y) {
//   関数名がないから抜き取ってもそのままでは使えない
//   return x + y
// }

// add(1, 2)

// アロー関数
//! (x, y) => {
//!   return x + y
//! }
// これだけじゃ動かないから変数に入れる

const add = (x, y) => {
  return x + y
}
// さっきのと同じことしてる

const square = (num) => {
  return num ** 2
}

//* パラメーターがないとき

const rollDie = () => {
  //パラメーターがなくても()は省略できない
  return Math.floor(Math.random() * 6) + 1
}

// パラメーターが一個の時 ()は省略できる //* (一個の時だけ)

const double = (num) => {
  return num * 2
}

// アロー関数の演習問題
// アロー関数の関数式をgreetという変数に代入してください。人の名前を表すStringを引数として一つ受け取って、英語の挨拶のStringを以下のように返してください：

// greet("Hagrid") //"Hey Hagrid!"
// greet("Luna") //"Hey Luna!

const greet = (name) => {
  return `Hey ${name}!`
}

// 暗黙的にreturnされる 注意点あり //* 一行で終わる式のみ

//! これはできない
const rollDie1 = () => {
  //パラメーターがなくても()は省略できない
  Math.floor(Math.random() * 6) + 1
}

//! {}ではなく()で囲む必要がある

const rollDie2 = () =>
  //パラメーターがなくても()は省略できない
  Math.floor(Math.random() * 6) + 1 //ここにセミコロンはつけられない

// addを暗黙的returnに変えた場合
const add1 = (x, y) => (
  x + y
)  

//* さらに省略できる!!!!  ()自体を省略できる
const add2 = (x, y) => x + y
