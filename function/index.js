function singSong() {
  //キャメルケース
  console.log("twitter")
  console.log("threads")
  console.log("misskey")
}

singSong() //かっこつけると呼び出せる
//* 関数は定義の上に実行コード書いてもいい(rubyとは違うね)

function greet(person) {
  //このpersonはパラメーターといわれるもので引数じゃない
  // 数字でもストリングでもなんでも入っちゃう
  console.log(`Hi! ${person}`) //関数が呼ばれたときにパラメーターに引数が渡される
}
greet("tom") // "Hi! tom"

greet() //* 引数がなかったらundefinedになる

function repeat(str, num) {
  let result = "" //空文字
  for (let i = 0; i < num; i++) {
    result += str
  }
  console.log(result)
}

repeat("twitter", 11)
repeat("aaa", 1)

function add(x, y) {
  // console.log(x + y)
  return x + y
} //returnはundefined

console.log(add(1, 2))
//! returnした時点で処理は終わる

// 下にコード書いてください
function multiply(num1, num2) {
  return num1 * num2
}
// console.log(multiply(1,2))

// ここにコードを書いてください
function isShortsWeather(temperature) {
  if (temperature >= 25) {
    return true
  }
  return false
}

// ここに関数を定義してください
function lastElement(array) {
  if (array.length === 0) {
    return null
  }
  return array[array.length - 1] //いっこ減らす
}

// ここに関数を定義してください
function lastElement(array) {
  if (array.length === 0) {
    return null
  }
  return array[array.length - 1] //いっこ減らす
}

// array = [1,2,3]
// (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)

// ここに関数を定義してください
function capitalize(str) {
  let firstStr = str[0].toUpperCase()
  let lastStr = str.slice(1) //前から2番目以降全部取る
  return firstStr + lastStr
}

// ここに関数を定義してください

function sumArray(array) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}


// ここに関数を定義してください

function returnDay(num){
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  if (num > 7 || num < 1){
      return null
  }
   return days[num - 1]
  
}

