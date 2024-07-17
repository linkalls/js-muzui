const userData = {
  email: "hoge@examples.com",
  password: "secret",
  username: "hoge",
  born: 2020,
}

// function fullName(user) {
//   const { email, username } = userData
//   return `${email} ${username}`
// }

//* これの違う書き方

function fullName({ email, username }) {
  return `${email} ${username}`
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

movies.filter((movie)=>movie.score > 80)  
// この二つ一緒
movies.filter(({score})=>score > 80)

movies.map(movie => movie.title + movie.score + "/100")

movies.map(({score,title}) => title + score + "/100")