//! アロー関数のthisは特殊

// アロー関数は定義された周りのthisになる

const person = {
  firstName: "potetotown",
  lastName: "S",
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  delayName() {
    setTimeout(() => {
      console.log(this)
      console.log(this.fullName())
    }, 2000)
  },

  // このしたのはundefinedがでてくる　無理
  // fullName() {
  //   return `${this.firstName} ${this.lastName}` //* windowをthisがさしてる
  // }
}

console.log(person.delayName)
