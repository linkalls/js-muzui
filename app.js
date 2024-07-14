console.log("初めてのjs")
console.warn("警告")
let total = 1 + 3
console.log("test")
let random = Math.random()

if (random < 0.5) {
  console.log("randomは0.5以下")
} else {
  console.log("randomは0.5より大きい")
}

console.log(random)

if (random < 0.5) {
  console.log("randomは0.5以下")
} else if (random < 0.7) {
  console.log("randomは0.7以下")
} else {
  console.log("randomは0.7より大きい")
}

const password = prompt("パスワードを入力してください")
if (password.lenght >= 6) {
  console.log("パスワードは十分な長さがあります")
} else {
  console.log("短すぎます")
}

if (password.indexOf(" ") === -1) {
  console.log("パスワードに空白が含まれていません")
} else {
  console.log("パスワードに空白が含まれています")
}

console.log(password.indexOf(" "))

const day = 1
switch (day) {
  case day === 1:
    console.log("monday")
    break
  case day === 2:
    console.log("tuesday")
    break
  case day === 3:
    console.log("wednesday")
    break
  default:
    console.log("other")
}
