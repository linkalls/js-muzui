let input = prompt("コマンドを入力してください(new.list.delete,quit)")
const todos = ["x", "y"]
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("************")
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    console.log("************")
  }
  else if (input === "new") {
  const newTodo = prompt("新しいTODOを入力してください")
  todos.push(newTodo)
  console.log(`${newTodo}を追加しました`)
  }
 
  else if (input === "delete") {
    const delTodo = parseInt(prompt("消したいTODOのインデックス番号を入力してください"))
    if (!Number.isNaN(delTodo)) {
      todos.splice(delTodo, 1)
    console.log(`${delTodo}番目のTODOを削除しました`)
    } else {
      console.log("無効なインデックス番号です")
      
    }
    
  }

  input = prompt("コマンドを入力してください(new.list.delete,quit)")

}
console.log("アプリを終了します")
