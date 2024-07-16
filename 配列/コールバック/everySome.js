//  配列内のすべての要素が関数を満たしていたらtrueでほかはfalse

const exams = [80, 98, 92, 78, 64, 12, 99, 66, 90, 100]

exams.every((exam) => {
  return exam > 70
}) //false

// someは一つでも一致していたら trueを返す

exams.some((exam) => {
  return exam > 70
}) //true




// someとeveryの演習問題
// allEvensという関数を定義してください。この関数は配列を一つ引数として受け取って、その配列の中身がすべて偶数であればtrueを返してください。そうでない場合はfalseを返してください。someあるいはeveryメソッドを使いましょう！（どちらを使うかは自分で決めてください）

// allEvens([2,4,6,8]) //true（すべて偶数）
// allEvens([1,4,6,8]) //false（奇数が含まれている）
// allEvens([1,2,3]) //false（奇数が含まれている）

// allEvensという関数を作りましょう

function allEvens(array) {
  return array.every((num) => {
    return num % 2 === 0
  })
}
