// 引数として関数を受け取ったり戻り値に関数を指定したりするもの

function callTwice(func) {
  func() //引数で渡された関数を二回呼ぶ
  func()
}

function callTimes(f) {
  for (let i = 0; i < 10; i++) {
    f()
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6 + 1)
  console.log(roll)
}

// Math.randomは0~1までのランダムな数字を出すからそれの6倍で0~6が出てくる　そこに1を足して1~7にする
// Math.floorで小数点以下を切り捨て

callTwice(rollDie) //rollDie()を渡すとそこで実行されちゃうから()つけないで関数そのものを渡す

callTimes(rollDie) //10回引数で渡した関数を実行

function makeRandomFake() {
  const rand = Math.random()
  if (rand > 0.5) {
    return function () {
      console.log("おめでとう")
    }
  } else {
    return function () {
      alert("ウイルスに感染しました")
      alert("とじないで")
      alert("とじないで")
      alert("とじないで")
    }
  }
}
// 関数そのものが返ってきてるのでこうすると帰ってきたものが実行できる

const randomResult = makeRandomFake() //ここで帰ってきた関数をrandomResultに格納

randomResult() // ここで帰ってきた関数を実行

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max
  }
}

const hoge = makeBetweenFunc(50, 100) //minとmaxの間に引数が含まれてるかを確認する関数
hoge(1000) //false
hoge(60) //true
