// 配列の各要素に対して引数で与えられたreducer関数を実行して単一の出力値を生成する

// コールバック関数のパラメーターは二つ!
// 左側のが最後の結果

const prices = [2000, 980, 700, 9980]

let total = 0
for (let price of prices) {
  total += price
}
console.log(total)

prices.reduce((total, price) => {
  return total + price
})

prices.reduce((min, price) => {
  if (min > price) {
    return price
  }
  return min //! わすれないで
})

const movies = [
  {
    title: "数分間のエールを",
    score: 95,
    year: 2024,
  },
  {
    title: "トラぺジウム",
    score: 96,
    year: 2024,
  },
  {
    title: "ドラえもん",
    score: 80,
    year: 2024,
  },
]

movies.reduce((bestMovie, currentMovie) => {
  if (bestMovie.score < currentMovie.score) {
    return currentMovie
  }
  return bestMovie
})

const evens = [2, 4, 6, 8]

evens.reduce((sum, num) => {
  return sum + num
},100) // 100は初期値
