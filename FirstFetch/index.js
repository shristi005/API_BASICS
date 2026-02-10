/* fetch("https://dog.ceo/api/breeds/image/random")
    .then(resonse => resonse.json())
    .then(data => {
        document.querySelector("body").innerHTML += `<img src="${data.message}"/>`
    }) */

//m2

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const dogDiv = document.createElement('div')
        dogDiv.id = "dog-img"
        document.querySelector('body').appendChild(dogDiv)
        document.getElementById('dog-img').innerHTML = `<img src="${data.message}"/>`
    })