const allLinks = document.querySelectorAll("a")

// for (let link of allLinks) {
//     link.innerText = '私はリンクです！！！！';
// }

for (let link of allLinks) {
  link.style.color = "red"
  link.style.textDecorationColor = "magenta"
  link.style.textDecorationStyle = "wavy"
}

// .textContentはすべての要素を取得
// .innerTextは見えてるものだけ

// .innerHTMLですべてのhtml要素

//* document.querySelector("#container").style.textAlign = "center"
//! stringで右側書く

const h2 = document.querySelector("h2")
h2.setAttribute("class", "purple") //前に入ってた値全部無視

h2.classList.add("purple")
h2.classList.add("border") // 今までのに追加
h2.classList.remove("border")

h2.classList.toggle("purple") // 外したりつけたりできる

const newImg = document.createElement("img")
newImg.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Male_Silkie.png"

document.body.appendChild(newImg) // body何の最後に追加 appendだから

const newH3 = document.createElement("h3")
newH3.innerText = "新規要素！！！！！！！"
document.body.appendChild(newH3)

const p = document.querySelector("p")
p.append("aaaaaaaaa これは最後に追加")

p.prepend("prepend使ってみた! これは先頭に追加")

const firstLi = document.querySelector("li")
const ui = firstLi.parentElement
URL.removeChild(firstLi)

const b = document.querySelector("b")
b.parentElement.removeChild(b)

// もっと直感的なの

const img = document.querySelector("img")
img.remove()