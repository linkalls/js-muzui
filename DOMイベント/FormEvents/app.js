const tweetForm = document.querySelector("#tweetForm")
const tweetLists = document.querySelector("#tweets")

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault() //* メソッドだから()つけて実行する
  //* preventDefault()で基本の動きを止めた
  //   console.log(tweetForm.elements.username.value)
  //   console.log(tweetForm.elements.tweet.value)
  //* tweetForm内のusernameという名前がついてるinputのvalueを表示してる
  //   console.log(newTweet)
  const usernameInput = tweetForm.elements.username
  const tweetInput = tweetForm.elements.tweet
  addTweet(usernameInput.value,tweetInput.value)
  usernameInput.value = ""
  tweetInput.value = ""
})

const addTweet = (username, tweet) => {
 
  const newTweet = document.createElement("li")
  const bTag = document.createElement("b")
  bTag.append(username)
  newTweet.append(bTag)
  newTweet.append(` - ${tweet}`)
  tweetLists.append(newTweet)
}
