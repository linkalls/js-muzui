// function sum() {
//   return arguments.reduce((total, num) => {
//     return total + num
//   })
// }
// これできないよ

function sum(...nums) {
  // console.log(nums)
  return nums.reduce((total, num) => total + num)
}

function raceResults(gold,silver,...rest) {
  console.log(gold)
  console.log(silver)
  console.log("その他" + rest)
}
