document.querySelector("button").addEventListener("click", (event) => {
  console.log(event)
  alert("click")
})

const input = document.querySelector("input")

// input.addEventListener("keydown", (e) => {
//     //* eventのe
//   //* キーボード押されたとき
//   console.log(`key: ${e.key}`)
//   // keyは文字
//   // codeはキーの位置
//   console.log(`code: ${e.code}`)

//   console.log("keydown")
// })

// input.addEventListener("keyup",()=>{
//* キーボードが押されなくなったとき
//     console.log("keyup")
// })

//* global設定方法
window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("うえ")
      break
    case "ArrowDown":
      console.log("した")
      break
    case "ArrowLeft":
      console.log("右")
      break
    case "ArrowRight":
      console.log("左")
      break
      default:
        console.log("無視")
        break
  }
})

const p = document.querySelector("p")

window.addEventListener("keyup",(e)=>{
p.innerText = `あなたが入力したキーは${e.key}です!!`
})