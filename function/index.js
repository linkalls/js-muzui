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