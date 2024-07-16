//* コールバック関数を使って処理を遅らせる

//! sleepはjsに無い

console.log("ヤッホー")
setTimeout(() => {
  console.log("おーい")
}, 3000) // 3秒待ってから実行

console.log("ばいばーい") // おーいを待たずに実行

// 指定された時間間隔ごとに関数を実行し続ける  //* idを自動で生成してる
const id = setInterval(() => {
  console.log(Math.random())
},2000)

// 止めるときはclearIntervalを使う //* setIntervalのidを使うと止められる
clearInterval(id)  // これで止めれる