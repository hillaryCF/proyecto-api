const foto = new XMLHttpRequest();

let contador = 0;

const lista = document.querySelector('#lista');
let name;
foto.addEventListener('load', function (event) {

  const response = event.target.response;
  console.log(response);

  for (let i = 0; i < response.length; i++) {
    // item.author
    if(name != response[i].author){
      lista.innerHTML += '<div class="trabajo"><button>' + response[i].author + '</button><div class="imagenes"></div></div>';
    }
    name = response[i].author;


  }
  let button = document.querySelectorAll('button');
  let array = [];
  for (let i = 0; i < button.length; i++) {
    contador++;
    array.push(contador);
    button[i].addEventListener('click', function (event) {
      event.target.nextElementSibling.innerHTML += '<img src="https://picsum.photos/200/300?image=' + array[i] + '">';
    });
  }
});

foto.responseType = 'json';

// Inicializa el foto.
foto.open('GET', 'https://picsum.photos/list');

// Envía el foto.
foto.send();
