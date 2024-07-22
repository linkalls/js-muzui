// axios.get('https://swapi.dev/api/people/1/')
//     .then(res => {
//         console.log('RESPONSE!', res); //* data内の直で入ってる (res.json()がいらない)
//     })
//     .catch(e => {
//         console.log('ERROR!!!', e);
//     });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`) //* 帰ってくるのまつ
    console.log(res.data) //* dataが返ってるってこういうことね
  } catch (e) {
    console.log("ERROR", e)
  }
}

getStarWarsPerson(5)
getStarWarsPerson(10)
