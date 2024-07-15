//! 同じオブジェクトのほかのプロパティを使いたいときにthisを使う
//

const cat = {
  name: "tama",
  color: "red",
  breed: "american-short",
  cry() {
    console.log(this)
    console.log("nya-")
    // console.log(name) //これはできない
    console.log(`${this.name}がnya-と泣いた。${this.color}色です`) // これでおなじcatオブジェクトのnameプロパティを呼び出してる
  },
}

// console.log(cat.name)
cat.cry()  // (.)の左側がthisでさされるもの

const cry2 = cat.cry

cry2() //thisがundefinedでwindowを指してる  window.cry2()を省略した形だから

// windowっていうのをthisでさしている　全部windowsの中に入る
windowを省略できるから省略してただけ
windows.alert("hello")



// メソッドのthisの演習問題
// henというオブジェクトを定義してください。2つのプロパティと、1つのメソッドを定義してください：

// nameは'Helen'にしてください

// eggCountは0にしてください

// layAnEggというメソッドを定義してください。このメソッドは、自分のeggCountを1加算して、'EGG'という文字列をreturnしてください。（thisを使う必要があります）

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg(){
      this.eggCount += 1 
      return "EGG"
  }
}