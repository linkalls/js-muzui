function bankRobbery() {
  const heros = ["steve", "Mike", "spiderMan"]
  function help() {
    for (let hero of heros) {
      //herosは一つ外側で定義されてるから使える
      console.log(`助けて!!${hero}!!`)
    }
  }
  help()
}

bankRobbery()

let x = "あいうえお"
function hoge() {
  console.log(x)
}
function moge() {
  let x = "かきくけこ"
  hoge() //一個外にあるから使えるよ hoge()から見たxは直近のあいうえお
}

hoge()
moge() // あいうえお　が出力
