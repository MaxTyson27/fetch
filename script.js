const render = (obj) => {
  let div = document.createElement('div')
  div.innerHTML = `
  Имя: ${obj.user}<br>
  Возраст: ${obj.age}<br>
  Специальность: ${obj.role}
  `
  document.body.appendChild(div)
}

const sendData = (url, data) => {
  fetch(url , {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(data)
  })
  .then(responce => responce.json())
  .then(data => {
    console.log(data);
    render(data)
  })
  .catch(error => {
    console.log(`Произошла ошибка, данные не отправлены \n${error}`)
  })
}
const getData = () => {
  fetch('db.json', {
    method: 'GET',
  })
    .then(responce => responce.json())
    .then(data => {
      console.log(data);
      sendData('https://jsonplaceholder.typicode.com/posts', data)
    })
    .catch(error => {
      console.log(`Произошла ошибка, запрос не принят \n${error}`)
    })
}

getData()