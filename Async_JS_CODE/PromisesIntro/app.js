// コールバック版
const fakeRequestCallback = (url, success, failure) => {
  //successとfailureはコールバック

  const delay = Math.floor(Math.random() * 4500) + 500
  setTimeout(() => {
    if (delay > 4000) {
      failure("コネクションタイムアウト") //* 引数あるね
    } else {
      success(`ダミーデータ(${url})`) //* ここも引数あるね
    }
  }, delay)
}

fakeRequestCallback(
  "books.com/page1",
  (response) => {
    //*これがsuccess
    console.log(response)
    console.log("成功1")

    fakeRequestCallback(
      "books.com/page2",
      (response) => {
        console.log(response)
        console.log("成功2")
      },
      (error) => {
        console.log(error)
        console.log("エラー2")
      }
    )
  },
  (error) => {
    //* これがfailure
    console.log(error)
    console.log("エラー")
  }
) //* これ読みずらいよね

// Promise版
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
      if (delay > 4000) {
        reject("コネクションタイムアウト")
      } else {
        resolve(`ダミーデータ(${url})`)
      }
    }, delay)
  })
}

// fakeRequestCallback('books.com/page1', function (response) {
//     console.log('成功!!');
//     console.log(response);
//     fakeRequestCallback('books.com/page2', function (response) {
//         console.log('成功2!!');
//         console.log(response);
//         fakeRequestCallback('books.com/page3', function (response) {
//             console.log('成功3!!');
//             console.log(response);
//         }, function (err) {
//             console.log('エラー3!!!!', err);
//         })
//     }, function (err) {
//         console.log('エラー2!!!!', err);
//     })
// }, function (err) {
//     console.log('エラー!!!!', err);
// })
//* 愚直に書くとこれ
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('成功1!!!!');
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('成功2!!!!');
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('成功3!!!!');
//                     })
//                     .catch(() => {
//                         console.log('失敗3!!!!!');
//                     });
//             })
//             .catch(() => {
//                 console.log('失敗2!!!!!');
//             });
//     })
//     .catch(() => {
//         console.log('失敗1!!!!!');
//     });
//*　キレイ目に書くとこれ
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("成功1!!!!")
    console.log(data) //*   resolve(`ダミーデータ(${url})`) が返ってくる
    return fakeRequestPromise("yelp.com/api/coffee/page2")
    //* promiseの.then内でpromiseをreturnすると次の.thenにつなげられる
  })
  .then((data) => {
    console.log("成功2!!!!")
    console.log(data)
    return fakeRequestPromise("yelp.com/api/coffee/page3")
  })
  .then((data) => {
    console.log("成功3!!!!")
    console.log(data)
  })
  .catch((err) => {
    console.log("失敗!!!!")
    console.log(err)
  })
//* promiseは3つの状態がある pending(成功も失敗もしてない),fulfilled(成功),rejected(失敗)

const request = fakeRequestPromise("yelp.com/api/coffee")
request
  .then(() => {
    console.log("成功!.thenでコールバック関数登録できるよ")
  })
  .catch(() => {
    console.log("失敗時の処理は.thenの後に.catchで書く")
  })
