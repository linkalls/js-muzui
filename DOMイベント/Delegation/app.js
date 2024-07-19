const tweetForm = document.querySelector("#tweetForm")
const tweetsContainer = document.querySelector("#tweets")

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const usernameInput = tweetForm.elements.username
  const tweetInput = tweetForm.elements.tweet
  addTweet(usernameInput.value, tweetInput.value)

  usernameInput.value = ""
  tweetInput.value = ""
})

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li")
  const bTag = document.createElement("b")
  bTag.append(username)
  newTweet.append(bTag)
  newTweet.append(` - ${tweet}`) //* `${bTag} - ${tweet}`
  tweetsContainer.append(newTweet)
}

// このコードは、ユーザーからのツイート（投稿）を新しいリストアイテムとして表示する関数です。具体的には、指定された`username`と`tweet`の内容を基に、新しい`<li>`要素を作成し、その中に`<b>`タグで囲んだユーザー名とツイート本文を追加しています。その後、この新しいツイートのリストアイテムを`tweetsContainer`という既存のHTML要素に追加します。

// ここでの主なステップは以下の通りです：

// 1. `document.createElement("li")`を使用して、新しいリストアイテム(`<li>`)を作成します。
// 2. 同様に`document.createElement("b")`を使用して、ユーザー名を強調表示するための太字タグ(`<b>`)を作成します。
// 3. `append`メソッドを使用して、作成した`<b>`タグにユーザー名を追加します。
// 4. 次に、同じく`append`メソッドを使用して、`<li>`要素に先ほど作成した`<b>`タグとツイート本文（`username`と`tweet`の間にスペースを挿入して結合）を追加します。
// 5. 最後に、`tweetsContainer`というIDを持つ既存のHTML要素に、この新しく作成したツイートのリストアイテムを追加します。

// この関数は、ウェブページ上でユーザーからのツイートをリアルタイムで表示するために使用されます。例えば、フォームからツイート情報を受け取り、それを元に新しいツイートを追加するようなシナリオで利用されます。

tweetsContainer.addEventListener("click", function (e) {
  //* targetには実際に反応したところ
  // if (e.target.nodeName === 'LI') {
  //     e.target.remove();
  // } else if (e.target.nodeName === 'B') {
  //     e.target.parentElement.remove(); //* liごと消す(中にあるbも消える)
  // }
  // e.target.nodeName === 'LI' && e.target.remove(); //* 左がtrueの時に右側実行

  if (e.target.nodeName === "LI" || e.target.nodeName === "B") {
    //* nodeNameっていうのはタグ名(大文字の)
    e.target.closest("LI").remove()
    //* .closestを使うと一番近くの要素をとってきてくれる
  }
})
