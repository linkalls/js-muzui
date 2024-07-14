let maximum = parseInt(prompt("数字を入力"))
while (!maximum) {
  maximum = parseInt(prompt("エラーが出た！数字を入力"))
} // not a numberはfalse

const targetNum = Math.floor(Math.random() * maximum) + 1 // 整数化 切り捨て の乱数生成
console.log(targetNum)
let count = 1
let guess = parseInt(prompt("一つ数字を決めました。何かな？"))
while (parseInt(guess) !== targetNum) {
  if (guess === "q") break
  count++
  if (guess > targetNum) {
    guess = prompt("その数字より小さいです")
  } else {
    guess = prompt("その数字より大きいです")
  }
}

if (guess === "q") {
  alert(`あなたは脱落しました！正解は${targetNum}でした`)
} else {
  alert(`正解！${count}回かかりました`)
}

