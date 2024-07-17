//* デフォルト引数！！！ rubyでもあるよねこれ

function rollDie(numSize) {
  // if (typeof numSize !== "undefined") {
  //   numSize = numSize
  // } else {
  //   numSize = 6
  // }
  return Math.floor(Math.random() * numSize) + 1
}
// これだとNaNが返ってきちゃうさんこう演算子使わなきゃいけなくなっちゃう

// numSize = typeof numSize !== "undefined" ? numSize : 6 //* trueだったら一個目のnumSize falseだったら2つめの6

//* これめんどくさいよね

// 引数の横に値書けばいいだけ

function rollDie1(numSize = 6) {
  return Math.floor(Math.random() * numSize) + 1
}

//　末尾でしかうまくいかない
function greet(msg = "やっほー", person) {
  console.log(`${msg}!${person}`)
}
