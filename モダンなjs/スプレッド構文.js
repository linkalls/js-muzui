Math.max(1, 2, 11, 44, 66) //最大を返してくれる

Math.min(11, 2, 1) //最少を返してくれる

const nums = [1, 22, 33, 55, 77, 2, 3, 78]

Math.max(nums) //これは無理　配列だから

Math.max(...nums) //展開する配列の前に ... を加える

console.log(...nums) // 1 22 33 55 77 2 3 78

//* 列挙可能なオブジェクトならいける　順番に処理出来る奴　配列以外だとstring

console.log(..."あいうえお") // あ い う え お

//* 配列リテラルの場合

// 配列リテラルは大かっこで配列を作るやつ
// exam
const exam = [1, 2, 3] //こういうこと

const cats = ["tama", "tora", "poco"]
const dogs = ["Hachi", "Pochi"]

cats.concat(dogs) //配列つなげて新しいの作る

const allPets = [...cats, ...dogs, "Sakura"] // 自分で新しく追加できる  // 新しい配列できる

//* オブジェクトにおける
const feline = { legs: 4, family: "ネコ科" }
const canine = { family: "イヌ科", bark: true }

const catDog = { ...feline, ...canine } // { legs: 4, family: "イヌ科", bark: true }
// familyが重複しているから後ろにあるので上書きされる

const array = { ...[1, 2, 3, 4, 5, 6] } // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6}

const str = { ..."hello" }
// {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

const formData = {
  email: "hoge@examples.com",
  password: "secret",
  username: "hoge",
}

const userData = { ...formData, id: 123, isVerified: false }
