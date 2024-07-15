let input = prompt("コマンドを入力してください(new,list,delete,quit")
let todos = []
while (input !== "quit" && input !== "q") {
  if (input === "new") {
    input = prompt("追加したいtodoを入れてください")
    todos.push(input)
    console.log(`${input}を追加しました`)
  } else if (input === "list") {
    console.log("--------------------")
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    if (todos.length === 0) {
      console.log("todoがありません!!!!")
    }
    console.log("--------------------")
  } else if (input === "delete") {
    input = prompt("消したいインデックス番号を入力してください")
    if (!Number.isNaN(input)) {
      //　!で反転してるから数字ならtrueが返ってくる
      todos.splice(input, 1)
      alert(`${input}番を削除しました`)
    } else if (input > todos.length) {
      alert("有効なインデックス番号を超過しています")
    } else {
      console.log("無効なインデックス番号です")
    }
  }
  input = prompt("コマンドを入力してください(new,list,delete,quit")
}

alert("終了しました")
