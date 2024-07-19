const count = document.querySelector("#count")

const resetButton = document.querySelector("#reset")
const addUser2 = document.querySelector("#addUser2")
const addUser1 = document.querySelector("#addUser1")
const user2 = document.querySelector("#user2")
const user1 = document.querySelector("#user1")
const buttons = [addUser1, addUser2]

resetButton.addEventListener("click", () => {
  count.value = 0
  console.log("reset!!")
  // const userDisplayCount = [parseInt(user1.innerText), parseInt(user2.innerText)]
  // for (let userDC of userDisplayCount) {
  //   console.log(userDC)
  //   userDC = "0"
  //   console.log(user1.innerText)
  // }
  const userDisplayCount = [user1, user2]
  for (let userDC of userDisplayCount) {
    // console.log(userDC)
    userDC.innerText = 0
    userDC.removeAttribute("style")
  }
  for (let button of buttons) {
    button.removeAttribute("disabled")
  }
})

count.addEventListener("change", (e) => {
  console.log(e)
  const countNum = count.value
})

addUser1.addEventListener("click", () => {
  const user1Value = parseInt(user1.innerText)
  user1.innerText = user1Value + 1
 const check = isOver(total(), parseInt(user1.innerText))
  if (check === true) {
    user2.style.color = "red"
    user1.style.color = "green"
  }
  // if (check === true) {
  //   addUser1.setAttribute("disabled", "")
  // }
})

addUser2.addEventListener("click", () => {
  const user2Value = parseInt(user2.innerText)
  user2.innerText = user2Value + 1
  const check = isOver(total(), parseInt(user2.innerText))
  if (check === true) {
    user2.style.color = "green"
    user1.style.color = "red"
  }
  // if (check === true) {
  //   addUser2.setAttribute("disabled", "")
  // }
  // if(parseInt(user2.innerText) === totalNum){
  //   console.log("到達したよ")
  //  addUser2.setAttribute("disabled","")
  // }
})

function total() {
  return parseInt(count.value)
}

function isOver(totalNum, userCount) {
  if (parseInt(userCount) === totalNum) {
    // return true
    addUser2.setAttribute("disabled", "")
    addUser1.setAttribute("disabled", "")
    return true
  }
  return false
}


// const a = document.querySelector("#AAA")
// function afi(e){
// a.innerText = e.key
// }

// window.addEventListener("keyup",afi)
