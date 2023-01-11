// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage')

const refreshDog = () => {
  // async programming : stuff you have to wait for / take time to load / promises
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json.message)
      dogImageDiv.innerHTML = `<img src='${json.message}' height=400/>`
    })
}

const newDogButton = document.getElementById('newDogButton')
newDogButton.onclick = () => refreshDog()