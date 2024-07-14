for (let i = 1; i <= 10; i++) {
  console.log(i)
}
//初期値指定してから処理を書く
// 真ん中が条件式
// 増減式

// 'Da ba dee da ba daa'を6回、ログに出力しましょう
for (let i = 1; i <= 6; i++) {
  console.log("Da ba dee da ba daa")
}

for (let i = 1; i <= 20; i += 2) {
  console.log(i)
}

for (let i = 100; i >= 0; i -= 10) {
  console.log(i)
}

for (let i = 10; i <= 1000; i *= 10) {
  console.log(i)
}

// 下の順にconsole.logされるfor文を書いてください:
// 25
// 20
// 15
// 10
// 5
// 0
for (let i = 25; i >= 0; i -= 5) {
  console.log(i)
}

// 配列を使った繰り返し処理の演習問題
// peopleという変数に人の名前を入れています。この配列の一つ一つの要素をfor文で処理して、名前を大文字でconsole.logしてください。

// 結果は以下のようになります：

// SCOOBY
// VELMA
// DAPHNE
// SHAGGY
// FRED
// ヒント： i をfor文の変数として用意して、配列のインデックスとして使いましょう

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"] //この行は編集しないでください

// この下にコードを書いてください
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase())
}

let str = "トマト"
for (let i = 0; i <= 4; i++) {
  console.log(`大きいネスト側: ${i}`)
  for (let j = 0; j < str.length; j++) {
    console.log(`小さいネスト側: ${j} ${str[j]}`)
  }
}

let num = 100
while (num > 0) {
  console.log(num)
  num -= 10
}

// let gameOver = false
// while (!gameOver) {
// let x = prompt("yes or no")
// if (x === "yes") {
//   gameOver = true
// }
// }

// let input = prompt("何か入力して")
// while (true) {
//   input = prompt(input)
//   if (input === quit) {
//     break
//   }
// }

let input = prompt("何か入力して")
while (true) {
  input = prompt(input)
  if (input === "quit") break
}

const numbers = [1,2,3,4,5,6,7,8,9]; //この行は編集しないでください

// ここから下にコードを書いてください
for (const num of numbers) {
    console.log(Math.pow(num, 2))
}
// 文字でもいけるよ
