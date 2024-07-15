function collect() {
  let total = 6 //このtotalは関数内だけで見れる
  console.log(total)
}

collect()

// console.log(total) //これはできない

// こっちならxが関数外で見れる (よくない)
let x = 0
function c() {
  x = 6
}
c()
console.log(x)

let bird = "アオサギ"
function birdWatch() {
  let bird = "ムクドリ" //ここ消した場合 したのconsole.logは "アオサギ"
  console.log(bird) // これは "ムクドリ"
}

console.log(bird) // この時は関数読んでないから "アオサギ"

birdWatch()
console.log(bird) //この時も "アオサギ" 関数の中は見れない

//! 優先されるのは関数の中　なかったら関数の外の変数



