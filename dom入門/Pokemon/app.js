// const container = document.querySelector("#container")
// const newImg = document.createElement("img")
// newImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

// container.appendChild(newImg)

const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div")
  pokemon.classList.add("pokemon")
  const span = document.createElement("span")
  span.innerText = `#${i}`
  const container = document.querySelector("#container")
  const newImg = document.createElement("img")
  newImg.src = `${baseUrl}${i}.png`
  pokemon.appendChild(newImg)  //* ここでまずdivの中にimgタグを入れる
  pokemon.appendChild(span) //* ここでdivにspanタグを入れる
    // 兄弟要素で下に番号
  container.appendChild(pokemon) //* ここで #container 内にdivを入れる
}

//* <section id="container"><
//*  <div>
//* <img></img>
//* <span></span>    
//* </div>
//* /section>
