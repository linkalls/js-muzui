// 渡された関数を満たす要素だけの新しい配列を作る
//! mapみたいに値を変更はしない

//* コールバック関数がtrueかfalseを返すように trueなら新しい配列に追加される！！！！！！
//! 元の配列は変わらない

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

numbers.filter((num) => {
  return num === 4
}) //numbersは変わらない

numbers.filter((num) => {
  return num < 10
})

const movies = [
  {
    title: "数分間のエールを",
    score: 95,
    year: 2024,
  },
  {
    title: "トラぺジウム",
    score: 95,
    year: 2024,
  },
  {
    title: "ドラえもん",
    score: 80,
    year: 2024,
  },
]

const goodMovies = movies.filter((movie) => {
  return movie.score > 90
})

console.log(goodMovies)

const badMovies = movies.filter((movie) => {
  return movie.score < 90
})

console.log(badMovies)

const recentMovies = movies.filter((movie) => {
  return movie.year > 2023
})

//* mapとfilterの組み合わせ
const goodMoviesTitle = movies.filter((movie) => movie.score > 90).map((movie) => movie.title)

// filterの演習問題
// filterメソッドの練習をしましょう。validUserNamesという関数を作ってください。この関数はStringの配列を引数として受け取って、Stringの長さが10文字未満の値だけが入っている新しい配列を返してください。以下が実行例です：

// validUserNames(['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']);
// // => ["tanaka", "hogemoge", "kimetsu"]
// // 'suzuki1979'と'q29832128238983'は10文字以上なので、返ってきた配列には含まれない

// validUserNamesという関数を作りましょう
function validUserNames(str) {
  return str.filter((str) => {
    // ここのreturnも
    return str.length < 10 //ここのreturn完全に忘れてた
  })
}
