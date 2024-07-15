let radius= 8
if (radius > 0){ //塊のことをブロックという　{}で囲まれてるところ　関数は例外
  const  PI = 3.14
  let msg = "hogohoge"
  console.log(PI)
  console.log(msg)
}

console.log(radius)
// console.log(PI) //これは無理
// console.log(msg) //これも無理

for (let i = 0; i < 5; i++) {
  let msg = "aaaa" // varで定義したら行ける (varにはブロックスコープがない)
  console.log(msg)
}

// console.log(msg) //これは無理
