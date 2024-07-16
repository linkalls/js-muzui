// 配列の要素ごとに関数が呼ばれる

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function print(element) {
  console.log(element)
}

print(numbers[0])
print(numbers[1])

numbers.forEach(print)

// forEachは関数を受け取ってその関数を各々の要素に一個ずつ呼び出してくれる

numbers.forEach(function (element) {
  //関数名は省略できる
  console.log(element)
})

//これと一緒
for (let elem of numbers) {
  console.log(elem)
}

const movies = [
  {
    title: "数分間のエールを",
    score: 95,
  },
  {
    title: "トラぺジウム",
    score: 95,
  },
  {
    title: "ドラえもん",
    score: 80,
  },
]

movies.forEach(function (movie) {
  //オブジェクトごとに受け取る
  console.log(`${movie.title} - ${movie.score}/100`)
}) //forEach内で実行　入れた時点で実行はされてない

//こいつといっしょ

for (let movie of movies) {
  console.log(`${movie.title} - ${movie.score}/100`)
}
