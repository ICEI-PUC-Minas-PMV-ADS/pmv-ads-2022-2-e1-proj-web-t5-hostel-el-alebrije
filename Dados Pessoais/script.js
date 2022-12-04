'use strict'

let photo = document.getElementById('imgphoto');
let file = document.getElementById('camera');

photo.addEventListener('click', () => {
    file.click ();
});

file.addEventListener ('change', (enviar) => {
    if (file.files.length <= 0) {
        return;
    }
    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});

// Definindo o valor 
        // Caso não tenho vai zerar
        if (localStorage.nome) {
          document.getElementById('nome').value = localStorage.nome;
      }
      if (localStorage.email) {
          document.getElementById('email').value = localStorage.email;
      }
      if (localStorage.telefone) {
          document.getElementById('telefone').value = localStorage.telefone;
      }
      if (localStorage.nacionalidade) {
        document.getElementById('nacionalidade').value = localStorage.nacionalidade;
    }

      // Salvando no localStorage
      var salvarData = function () {
          var username = document.getElementById('nome').value;
          var email = document.getElementById('email').value;
          var telefone = document.getElementById('telefone').value;
          var passwordConfirmation = document.getElementById('nacionalidade').value;
          

          localStorage.setItem('nome', nome);
          localStorage.setItem('email', email);
          localStorage.setItem('telefone', telefone);
          localStorage.setItem('nacionalidade', nacionalidade);
      }
      // Ativando o função quando houver alteração no documento
      document.onchange = salvarData;


      salvarData();
      alert("Dados salvos com sucesso!");







    