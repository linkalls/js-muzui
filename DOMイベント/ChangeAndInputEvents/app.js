const input = document.querySelector("input")
const h1 = document.querySelector("h1")

// input.addEventListener("change",()=>{
//     console.log("changeはinputの中身が変わった後にフォーカスを外すと出てくるよ!")
// })

input.addEventListener("input", (e) => {
  console.log("inputは何かを入力したときだけ発火するよ!(shiftとかは発火しないよ)")
  console.log(e) // dataは入力された最後の文字だけ
  h1.innerText = input.value //* 1行目で定義してるやつね 第一引数のじゃないよ
})
