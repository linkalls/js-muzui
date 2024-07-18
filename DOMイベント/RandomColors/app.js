// const h1 = document.querySelector("h1")
// const button = document.querySelector("button")
// const body = document.querySelector("body")

// button.addEventListener("click", () => {
//   const redNum = Math.floor(Math.random() * 256)
//   const greenNum = Math.floor(Math.random() * 256)
//   const blueNum = Math.floor(Math.random() * 256)
//   h1.innerText = `rgb(${redNum},${greenNum},${blueNum})`
// //   document.body.style.backgroundColor = `rgb(${redNum},${greenNum},${blueNum})`
// body.style.backgroundColor = `rgb(${redNum},${greenNum},${blueNum})`

// })

//* これでもいいよね

const h1 = document.querySelector("h1")
const button = document.querySelector("button")
const body = document.querySelector("body")

function random() {
  const redNum = Math.floor(Math.random() * 256)
  const greenNum = Math.floor(Math.random() * 256)
  const blueNum = Math.floor(Math.random() * 256)
  return `rgb(${redNum},${greenNum},${blueNum})`
}

button.addEventListener("click", () => {
  const randomRgb = random()
  h1.innerText = randomRgb
  body.style.backgroundColor = randomRgb
})

