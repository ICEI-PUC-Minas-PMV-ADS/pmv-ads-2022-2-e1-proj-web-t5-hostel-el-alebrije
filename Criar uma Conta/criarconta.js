const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


// Definindo o valor 
        // Caso não tenho vai zerar
        if (localStorage.username) {
          document.getElementById('username').value = localStorage.username;
      }
      if (localStorage.email) {
          document.getElementById('email').value = localStorage.email;
      }
      if (localStorage.password) {
          document.getElementById('password').value = localStorage.password;
      }
      if (localStorage.asswordConfirmation) {
        document.getElementById('password-confirmation').value = localStorage.passwordConfirmation;
    }

      // Salvando no localStorage
      var salvarData = function () {
          var username = document.getElementById('username').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var passwordConfirmation = document.getElementById('password-confirmation').value;
          

          localStorage.setItem('username', username);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('password-confirmation', passwordConfirmation);

        }
      
      // Ativando o função quando houver alteração no documento
      document.onchange = salvarData;

      
   



















// Definindo o valor 
        // Caso não tenho vai zerar
        /*if (localStorage.pessoas) {
          document.getElementById('username').value = localStorage.username;
      }
      if (localStorage.dataInicio) {
          document.getElementById('email').value = localStorage.email;
      }
      if (localStorage.dataFinal) {
          document.getElementById('password').value = localStorage.password;
      }
      if (localStorage.dataFinal) {
        document.getElementById('password-confirmation').value = localStorage.passwordConfirmation;
    }

      // Salvando no localStorage
      var salvarData = function () {
          var username = document.getElementById('username').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var passwordConfirmation = document.getElementById('password-confirmation').value;
          

          localStorage.setItem('username', username);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          localStorage.setItem('password-confirmation', passwordConfirmation);
      }
      // Ativando o função quando houver alteração no documento
      document.onchange = salvarData;

      // Botão limpar
      localStorage.clear('enviar');*/

      