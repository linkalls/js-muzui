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

// const newMovies = movies.map(function(movie){
//   return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map((movie) => (
   `${movie.title} - ${movie.score / 10}`
))
