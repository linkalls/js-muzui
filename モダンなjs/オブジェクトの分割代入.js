const formData = {
  email: "hoge@examples.com",
  password: "secret",
  username: "hoge",
  born: 2020,
}

const userData = {
  email: "hoge@examples.com",
  password: "secret",
  username: "hoge",
}

const { username, email } = formData // {}内の変数名はオブジェクトのプロパティと合わせる

const { born: birthYear } = formData // キー: 新しい変数名で名前変えて保存できる

const { born = 20 } = userData // なかった時のためにデフォルト値設定できる
