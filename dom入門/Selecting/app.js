//! 取得した後に操作

//* なかったら　null return

const banner = document.getElementById("banner")

const imgs = document.getElementsByTagName("img") //配列ではないけどfor of使えてlength使える

// for (let img of imgs) {
//   img.src= "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
// }

const squares = document.getElementsByClassName("square") //* なかったらからの配列返ってくる

for (let img of squares) {
  img.src =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}

document.querySelector("h1") // 最初の一個を返す
document.querySelector("#banner")
document.querySelector(".square")
document.querySelector("img:nth-of-type(2)") // ()内の数字番目を探す　疑似クラス
document.querySelector('a[title="ヒツジ"]')

document.querySelectorAll("p")
document.querySelectorAll("p a")

const links = document.querySelectorAll("p a")

for (let link of links) {
  console.log(link.href)
}
