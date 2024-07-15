// helloはなにも定義してないから絶対にエラーが出るよ

try {
  hello.toUpperCase() //ここにtryしてみる  errorが出たらcatch内に処理が移動
} catch {
  console.log("エラーがでて来た") //終わったらcatchブロックから抜けてその下を実行
}
console.log("実行!!!!!!")

function shout(msg) {
  //stringを期待してるから他だと無理
  try {
    console.log(msg.toUpperCase().repeat(3)) // .repeat(3)で3回繰り返す
  } catch(e) { //catchの後の()に好きな変数を入れればそこにエラー内容が入る　なんでも名前はいい
    console.log("文字を入力してください")
    console.log(`エラー内容は${e}です`)
  }
}
