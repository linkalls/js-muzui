fetch('https://swapi.dev/api/people/1/')
    .then((res) => {
        console.log('RESOLVE!!!', res);
        return res.json(); //* こいつがまたpromise返す
    })
    .then((data) => {
        console.log(data); //* jsonがdataにはいる
        return fetch('https://swapi.dev/api/people/2/'); //* ここで2コメのリクエスト promiseが返ってくる
    })
    .then((res) => {
        console.log('2個目のリクエストがRESOLVE!!!', res);
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log('エラー！！！', err);
    })

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1/'); //awaitで終わるまでまってる
        const data = await res.json();
        console.log(data);

        const res2 = await fetch('https://swapi.dev/api/people/2/');
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log('エラー！！！', e);
    }
}

loadStarWarsPeople();
console.log("hello")