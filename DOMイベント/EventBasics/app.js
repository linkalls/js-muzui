const button = document.querySelector("#v2")

button.onclick = function () {
  console.log("v2をクリックしたよ")
  console.log("w")
} //関数を定義

function scream() {
  console.log("わああああ")
  console.log("マウスを要素の上に持ってくるとこれが呼ばれるよ！！")
}

button.onmouseenter = scream //* ここでは関数そのものを入れる ()つけないってことね

const h1 = document.querySelector("h1")

h1.onmouseenter = () => {
  console.log("h1をホバーしたよ!!!")
  const button = document.createElement("button")
  button.innerText = "h1の上にマウス持ってきたから追加されたよ!!"
  document.body.appendChild(button)
}

h1.onclick = () => console.log("h1をクリックしたよ")

//* addEventListenerを使う！！！

const button3 = document.querySelector("#v3")

button3.addEventListener("click", function () {
  console.log("click!")
  console.log("addEventListener")
})

// button3.addEventListener("mouseup", scream)

function hoge() {
  console.log("hoge")
}

function moge() {
  console.log("moge")
}

const hogeMogeButton = document.querySelector("#hogemoge")
hogeMogeButton.addEventListener("click", hoge, { once: true })
hogeMogeButton.addEventListener("click", moge, { once: true })
