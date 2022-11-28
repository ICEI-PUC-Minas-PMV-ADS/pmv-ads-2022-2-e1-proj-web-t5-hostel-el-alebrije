# Programação de Funcionalidades
## Home (RF-011) e (RF-017)
### Desenvolvedor(a): Danrley G M Paula 
- Funcionalidade tradução e links redes sociais 

![home](https://user-images.githubusercontent.com/112135999/204169651-7893b440-fa43-424e-ba3b-908003ed5004.png)

### Requisito atendido:
- RF-011 - O sistema será traduzido em três línguas: português, espanhol e inglês
- RF-017 - O site deverá apresentar links redirecionando às outras redes da empresa, como: Instagram, Youtube, Facebook e afins

### Artefatos da funcionalidade:
- /assets
- /img
- header.html
- style.css
- homehostel.html

```js
<html lang="pt-br">
 <head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link href="css/style.css" rel="stylesheet"/>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 <title>Hostal El Alebrije</title>
 
 <style type="text/css">
    #google_translate_element {
        display: none;
    }
    
    .goog-te-banner-frame {
        display: none;
    }
    body {
        position: static !important;
        top: 0 !important;
    }
    
    </style>
<style>
    
body{
    overflow-x: hidden; 
    background-color: rgb(255, 255, 255);
    background-image: url('assets/home.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
  
 </style>
 
 </head>
 <body>

<header>
    <div class="center">
        <div class="logo">
            <h3><img src="assets/hostal.png" width="103">
        </div><!--center-->
    <div class="hostal">
        <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
    </div><!--hostal-->

    <div class="menu-container">
        <a class="active-menu" href="" target="_self">SOBRE</a>
        <a href="" target="_self">FOTOS</a>
        <a href="" target="_self">ACOMODAÇÕES</a>
        <a href="" target="_self">LOCALIZAÇÃO</a>
        <a href="" target="_self">AVALIÇÕES</a>
        <a href="" target="_self">EXPLORE</a>
    </div><!--menu-container-->    
    </div>
    <div class="hostal-central">
        <h4 style="font-size: 30px; color:#000000;">Bem-vindo&nbsp;ao</h4>
        <h5 style="font-size: 100px; color:#000000;"><b><i>PUEBLO MÁGICO</b></h5>
    </div>
    <div class="translate">
        <div id="google_translate_element" class="boxTradutor"></div>
        <a href="javascript:trocarIdioma('pt')"><img alt="português" src="assets/Br.jpg" width="35px;" margin="35px 0;"></a>
    </div>
    <div class="translate1">
        <div id="google_translate_element" class="boxTradutor"></div>
        <a href="javascript:trocarIdioma('es')"><img alt="espanhol" src="assets/esp.png" width="35px;" margin="35px 0;"></a>
    </div>
    <div class="translate2">
        <a href="javascript:trocarIdioma('en')"><img alt="ingles" src="assets/us.png" width="35px;" margin="35px 0;"></a>
    </div>

    <div class="btn">
        <button class="btn-enter" style="font-size: 20px;"><b><a href="" style="color:#ffffff;;">ENTRAR</b></a></div>
        <button class="btn-cad"style="font-size: 12px;"><b><a href="" style="color:#ffffff;">CADASTRAR</b></a></div>
        <button class="btn-res"style="font-size: 20px;"><a href="" style="color:#ffffff;">Reserve&nbsp;agora </a></div>   
        </button> 
    </div>

</header>

<div class="extras" id="c1">
</div>
<div class="extras" id="c2">
</div>
<div class="extras" id="c3">
</div>
<div class="extras" id="c4">
</div>
<div class="extras" id="q1">
</div>
<div class="extras" id="c5">
</div>
<div class="extras" id="c6">
</div>
<div class="extras" id="c7">
</div>    
<div class="extras" id="q2">
</div>
<div class="extras" id="q3">
</div>

<div class="social-media">
    <a href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener"><img src="assets/insta.png"/></a>
    <a href="https://www.facebook.com/alebrijehostal/" target="_blank" rel="noopener"><img src="assets/facebook.png"/></a>
    <a href="https://api.whatsapp.com/send?phone=5217223960938" target="_blank" rel="noopener"><img src="assets/wpp.png"/></a>
    <a href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html" target="_blank" rel="noopener"><img src="assets/b.png"/></a>
</div>

<div class="cortesia">
    <img src="assets/breakfast.png">
</div>
<div class="cf">
    <h0 style="font-size: 10px;"><b>CAFÉ DA MANHÃ<P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INCLUSO</b></P></h0>
</div>

<div class="cortesia1">
    <img src="assets/wifi.png">
</div>
<div class="wf">
    <h0 style="font-size: 10px;"><b>INTERNET<P>&nbsp;&nbsp;&nbsp;GRÁTIS</b></P></h0>
</div>

<div class="cortesia2">
     <img src="assets/recep.png">
</div>
<div class="rcp">
    <h0 style="font-size: 10px;"><b>RECEPÇÃO 24<P>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HORAS</b></P></h0>
</div>
<script type="text/javascript">
    var comboGoogleTradutor = null;

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'pt',
            includedLanguages: 'pt,en,es',
            layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
        }, 'google_translate_element');

        comboGoogleTradutor = document.getElementById("google_translate_element").querySelector(".goog-te-combo");
    }

    function changeEvent(el) {
        if (el.fireEvent) {
            el.fireEvent('onchange');
        } else {
            var evObj = document.createEvent("HTMLEvents");

            evObj.initEvent("change", false, true);
            el.dispatchEvent(evObj);
        }
    }

    function trocarIdioma(sigla) {
        if (comboGoogleTradutor) {
            comboGoogleTradutor.value = sigla;
            changeEvent(comboGoogleTradutor);
        }
    }
    </script>
<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"></script>
 </body>
</html>
``` 
### Instruções de acesso

Fazer a tradução da pagina em um dos três idiomas disponíveis, acessar as redes sociais da empresa através de links rápidos disponivel na lateral do site. 
http://127.0.0.1:5500/homehostel.html

## Reservas (RF-010) e (RF-019)
### Desenvolvedor(a): Gabrielle Oliveira Santana
- Funcionalidade de reservas 

![imagemReservas](https://user-images.githubusercontent.com/95951195/200965439-c4cf5e98-0fc6-40a0-8c3e-27051d7e9b09.png)

### Requisito atendido:
- RF-010 - O sistema deve permitir a inclusão, alteração, remoção ou flexibilização em relação ao consumo do hóspede, mudança de datas/hospedagens ou cancelamento de pacotes, mesmo após aprovação da reserva
- RF-019 - O sistema deve permitir o cancelamento de reservas	

### Artefatos da funcionalidade:
- /assets
- /img
- header.html
- style.css
- ReservasHostel.html

```js
    const ano = document.getElementById("ano");
    const anoAtual = new Date();
    
```

```js
// Definindo o valor 
    // Caso não tenho vai zerar
    if (localStorage.pessoas) {
      document.getElementById('pessoas').value = localStorage.pessoas;
    }
    if (localStorage.dataInicio) {
      document.getElementById('dataInicio').value = localStorage.dataInicio;
    }
    if (localStorage.dataFinal) {
      document.getElementById('dataFinal').value = localStorage.dataFinal;
    }

    // Salvando no localStorage
    var salvarData = function () {
      var pessoas = document.getElementById('pessoas').value;
      var dataInicio = document.getElementById('dataInicio').value;
      var dataFinal = document.getElementById('dataFinal').value;
      // console.log(pessoas + dataInicio + dataFinal);

      localStorage.setItem('pessoas', pessoas);
      localStorage.setItem('dataInicio', dataInicio);
      localStorage.setItem('dataFinal', dataFinal);
    }
    // Ativando o função quando houver alteração no documento
    document.onchange = salvarData;

    // Botão limpar
    if (clear) {
      localStorage.clear();
    }

    console.log(localStorage.dataFinal);
    
```

```html
 <form class="forms">
    <h1>Reservas</h1>
    <label for="pessoas">Número de hóspedes</label>
    <select name="pessoas" id="pessoas">
      <option value="um">1 pessoa</option>
      <option value="dois">2 pessoas</option>
      <option value="tres">3 pessoas</option>
      <option value="mais">Mais que 3 pessoas</option>
    </select>
    <label for="dataInicio">Início</label>
    <input type="date" name="dataInicio" id="dataInicio">
    <label for="dataFinal">Final</label>
    <input type="date" name="dataFinal" id="dataFinal">
    <button id="clear">Cancelar</button>
  </form>
```
### Instruções de acesso

No uso da reservas o hóspede deve inserir o número de pessoas que desejam se hospedar no hostel, o início e fim da estadia no hotel. Além de ter a disponibilidade de cancelamento das reservas.
http://127.0.0.1:5502/ReservasHostel.html

## Redefinir Senha (RF-16)
### Desenvolvedor(a): Gabrielle Oliveira Santana
- Funcionalidade de redefinição de senhas

![1imagemRedefinirSenha](https://user-images.githubusercontent.com/95951195/201782743-fd032d6c-5cb0-4510-b262-a95834213700.png)


### Requisito atendido:
- RF-16 - Deve ser possível ao usuário solicitar a redefinição de sua senha, informando o e-mail cadastrado;

### Artefatos da funcionalidade:
- .vscode
- /assets
- /img
- /js
- main.js
- README.md
- header.html
- style.css
- RedefinirSenha.html

```html
 <!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redefinir Senha</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="./assets/global.css" />
  <link rel="stylesheet" type="text/css" href="./assets/style.css" />
  <link rel="stylesheet" type="text/css" href="./assets/footer.css" />
  <!-- Link para Redefinir Senha -->
  <link rel="stylesheet" href="./js/RedefinirSenha.js">

  <script>
    const ano = document.getElementById("ano");
    const anoAtual = new Date();
  </script>
</head>

<body>
  <!-- Header -->
  <header>
    <div class="center">
      <div class="logo">
        <h3><img src="./assets/img/hostal.png" width="103">
      </div>
      <!--center-->
      <div class="hostal">
        <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3>
        </p>
      </div>
      <!--hostal-->
      <div class="menu-container">
        <a class="active-menu" href="">SOBRE</a>
        <a href="">FOTOS</a>
        <a href="">ACOMODAÇÕES</a>
        <a href="">LOCALIZAÇÃO</a>
        <a href="">AVALIÇÕES</a>
        <a href="">EXPLORE</a>
      </div>
      <!--menu-container-->
    </div>
    <div class="btn">
      <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#9e2fba;">ENTRAR</b></a>
    </div>
    <button class="btn-cad" style="font-size: 12px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
      </div>

  </header>

  <!-- Redefinir Senha -->
  <div class="aaa" style="display:flex; justify-content: center;
  align-items: center;">
    <div class="forms">
      <h1>Redefinir Senha</h1>
      <p>Atualize sua senha</p>
      <form id="password-reset-form">
        <div id="alert"></div>

        <label for="password">Senha</label>
        <input type="password" id="password">

        <label for="password-verify">Nova senha</label>
        <input type="password" id="password-verify">

        <button type="submit" class="botaaao" style="height: 40px">Salvar nova senha</button>
      </form>     
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div style="display: flex; margin-left: 1rem; align-items: center">
      <a href="https://www.facebook.com/alebrijehostal/" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/fb.svg" alt="facebook" />
      </a>
      <a href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/insta.svg" alt="insta" />
      </a>
      <a href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/booking.svg" alt="bookin" />
      </a>
    </div>
    <span class="text-copyright">&#169 ElAlebrije <span id="ano">2022</span> - Todos os direitos reservados</span>
    <div className="footerSide">
      <a href="https://api.whatsapp.com/send?phone=5217223960938" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/wpp.svg" alt="whatsapp" />
      </a>
    </div>
  </div>
  </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>

</html>
```

```js 

var passwordResetFormEl = document.getElementById("password-reset-form");
var alertEl = document.getElementById("alert");
var passwordEl = document.getElementById("password");
var passwordVerifyEl = document.getElementById("password-verify");


function formResetPassword(e) {
e.preventDefault();  
  setAlert();
  var password = passwordEl.value;
  var passwordVerify = passwordVerifyEl.value;
  if (password !== passwordVerify) {
    return setAlert("Password verification must match.");
  }
  Userfront.resetPassword({
    password: password
  }).catch(function (error) {
    setAlert(error.message);
  });
}

function setAlert(message) {
  alertEl.innerText = message;
  alertEl.style.display = message ? "block" : "none";
}

passwordResetFormEl.addEventListener("submit", formResetPassword);
```
### Instruções de acesso

No uso do redefinir senha o hóspede deve inserir a senha antiga e a nova senha respectivamente, assim criando uma nova senha no sistema.

- Link: http://127.0.0.1:5503/RedefinirSenha.html

## Recuperação de Senha (RNF-15)
### Desenvolvedor(a): Gabrielle Oliveira Santana
- Funcionalidade de recuperação de senha através do e-mail;

![imagemRecuperaçãoSenha](https://user-images.githubusercontent.com/95951195/201786770-6b01b37c-fd4c-4461-8cd9-bba81f2ded4b.png)

### Requisito atendido:
- RNF-15 - O site deverá ser fácil de usar, eficiente e acessível;

### Artefatos da funcionalidade:
- .vscode
- /assets
- /img
- /js
- README.md
- header.html
- style.css
- RecuperacaoSenha.html

```html
 <!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Recuperação de Senha</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="./assets/global.css" />
  <link rel="stylesheet" type="text/css" href="./assets/style.css" />
  <link rel="stylesheet" type="text/css" href="./assets/footer.css" />
  <!-- Link para Redefinir Senha -->
  <link rel="stylesheet" href="./js/RedefinirSenha.js">

  <script>
    const ano = document.getElementById("ano");
    const anoAtual = new Date();
  </script>
</head>

<body>
  <!-- Header -->
  <header>
    <div class="center">
      <div class="logo">
        <h3><img src="./assets/img/hostal.png" width="103">
      </div>
      <!--center-->
      <div class="hostal">
        <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3>
        </p>
      </div>
      <!--hostal-->
      <div class="menu-container">
        <a class="active-menu" href="">SOBRE</a>
        <a href="">FOTOS</a>
        <a href="">ACOMODAÇÕES</a>
        <a href="">LOCALIZAÇÃO</a>
        <a href="">AVALIÇÕES</a>
        <a href="">EXPLORE</a>
      </div>
      <!--menu-container-->
    </div>
    <div class="btn">
      <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#9e2fba;">ENTRAR</b></a>
    </div>
    <button class="btn-cad" style="font-size: 12px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
      </div>

  </header>

  <!-- Recuperar senha Senha -->
  <div id="center" style="display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;">
    <div class="forms">
      <h1>Recuperação de Senha</h1>
      <p>Escreva abaixo o e-mail cadastrado</p>
      <form id="password-reset-form">
        <div id="alert"></div>

        <label for="password" style="margin-top: 9px">E-mail: </label>
        <input type="text" id="password" placeholder="E-mail cadastrado">
        <p style="margin-bottom: 20px">Caso exista alguma conta associada a esse e-mail, você receberá um link para redefinição de sua senha.</p>

        <button href="javascript: submitform()" type="submit" class="botaaao" style="height: 40px">Enviar</button>
      </form>
      <!-- Estilo Formulário -->
      <style>
        /* formulario */
        botaaao,
        input {
          display: flex;
          margin-bottom: 10px;
          width: 400px;
          height: 40px;
        }

        #alert {
          display: none;
          color: red;
          margin-bottom: 10px;
        }

        .botaaao {
          background-color: #9E2FBA;
          border-radius: 50px;
          color: aliceblue;
          width: 400px;
        }

        .forms {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 900px;
          height: 500px;
        }
      </style>
      <script type="text/javascript">
        function submitform() {
          document.formulario.submit();
        }
      </script>
    </div>
  </div>


  <!-- Footer -->
  <div class="footer">
    <div style="display: flex; margin-left: 1rem; align-items: center">
      <a href="https://www.facebook.com/alebrijehostal/" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/fb.svg" alt="facebook" />
      </a>
      <a href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/insta.svg" alt="insta" />
      </a>
      <a href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/booking.svg" alt="bookin" />
      </a>
    </div>
    <span class="text-copyright">&#169 ElAlebrije <span id="ano">2022</span> - Todos os direitos reservados</span>
    <div className="footerSide">
      <a href="https://api.whatsapp.com/send?phone=5217223960938" target="_blank" rel="noopener">
        <img class="footer-img" src="./assets/img/wpp.svg" alt="whatsapp" />
      </a>
    </div>
  </div>
  </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>

</html>
```
```js
//Checando teste e-mail
const email = document.querySelector(".email");

function checkInputs() {
  
  const email = email.value;  

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }}

  document.onchange = checkInputs;

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
```

### Instruções de acesso

No uso da recuperação senha o hóspede deve inserir o e-mail e enviar o mesmo para recuperar sua senha;

- Link: http://127.0.0.1:5503/RedefinirSenha.html

## Reclamações
### Desenvolvedor(a): Gabrielle Oliveira Santana
- Funcionalidade de reclamações para o usuário;

![reclamacoes_foto](https://user-images.githubusercontent.com/95951195/204152782-0b1b1574-77fa-4345-851a-6a278261ea97.png)


### Requisito atendido:
- RNF-15 - O site deverá ser fácil de usar, eficiente e acessível;

### Artefatos da funcionalidade:
- /.vscode
- /assets
- Reclamacoes.html
- style.css

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet" />
    <title>Hostal El Alebrije</title>
    <style>
        body {
            overflow-x: hidden;
            background-color: rgb(252, 252, 252);
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
        }
    </style>

</head>

<body>
    <header>
        <div class="center">
            <div class="logo">
                <h3><img src="assets/hostal.png" width="103">
            </div>
            <!--center-->
            <div class="hostal">
                <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3>
                </p>
            </div>
            <!--hostal-->
            <div class="menu-container">
                <a href="">SOBRE</a>
                <a href="">FOTOS</a>
                <a href="">ACOMODAÇÕES</a>
                <a href="">LOCALIZAÇÃO</a>
                <a class="active-menu" href="">AVALIÇÕES</a>
                <a href="">EXPLORE</a>
            </div>
            <!--menu-container-->
        </div>
        <div class="btn">
            <button class="btn-enter" style="font-size: 20px;"><b><a href="./login/index.html " style="color:#9e2fba;;">ENTRAR</b></a>
        </div>
        <button class="btn-cad" style="font-size: 12px;"><b><a href="https://github.com/santanagabi/hostel/blob/main/Reclama%C3%A7%C3%B5es-Atualizadas-Gabrielle/index.html " style="color:#9e2fba;">CADASTRAR</b></a>
        </button>
        <div class="idiomas">
            <div class="translate">
                <a href=""><img src="assets/Br.jpg" /></a>
            </div>

            <div class="translate1">
                <a href=""><img src="assets/esp.png" /></a>
            </div>

            <div class="translate2">
                <a href=""><img src="assets/us.png" /></a>
            </div>
        </div>
    </header>
    <!--fim do header-->

    <!--inicio do quadro cinza-->
    <div class="all">
        <aside>
            <ul class="list-group-teste">
                <li class="list-group-item-dados-pessoais">
                    <img src="assets/dados-pessoais.svg" alt="">
                    <a href="">Dados pessoais</a>
                </li>
                <li class="list-group-item-reservas">
                    <img src="assets/reservas.svg" alt="">
                    <a href="">Reservas</a>
                </li>
                <li class="list-group-item-avaliacoes">
                    <img src="assets/avaliacoes.svg" alt="">
                    <a href="">Avaliações</a>
                </li>
                <li class="list-group-item-reclamacoes">
                    <img src="assets/reclamacoes.svg" alt="">
                    <a href="">Reclamações(Anônimas)</a>
                </li>
                <li class="list-group-item-dados-pagamento">
                    <img src="assets/dados-pagamento.svg" alt="">
                    <a href=""> Dados de pagamentos</a>
                </li>
                <li class="list-group-item-seguranca">
                    <img src="assets/seguranca.svg" alt="">
                    <a href="">Segurança</a>
                </li>
            </ul>
        </aside>
        <!--fim do quadro cinza-->

        <!--formulario-->
        <form action="">
            <div class="container" style="display:flex; flex-direction: column;">
                <div class="header">
                    <h2>Reclamações</h2>
                    <p>Faça sua reclamação aqui </p>
                </div>
            </div>
            <form id="form" class="form">
                <div class="formularios">
                    <label for="username">Primeiro Nome:</label>
                    <input type="text" id="username" placeholder="Digite seu nome de usuário..." />
                </div>

                <div class="formularios">
                    <label for="lastname">Sobrenome:</label>
                    <input type="text" id="lastname" placeholder="Digite seu sobrenome..." />
                </div>

                <div class="formularios">
                    <label for="faca-reclamacao">Faça sua reclamação:
                    </label>
                    <input type="text" id="faca-reclamacao" placeholder="Digite sua reclamação aqui..." style="width:500px ; height: 150px;" />
                </div>
                <button onclick="Enviado()" type=" submit" style="background-color: rgb(201, 9, 201); margin-top:10px; margin-left:60px; display:flex; justify-content:center; border-radius:16px; color: black; ">Enviar</button>
            </form>
            <!-- JS Reclamações -->
            <script>
                const form = document.getElementById("form");
                const username = document.getElementById("username");
                const lastname = document.getElementById("lastname");
                const facaReclamacao = document.getElementById("faca-reclamacao");

                form.addEventListener("submit", (e) => {
                    e.preventDefault();

                    checkInputs();
                });

                function Enviado(input) {
                    alert('Foi enviado para os administradores do hotel com sucesso!');
                }

                btn.addEventListener("submit", function () {
                    alert('Enviado com sucesso!');
                });

                // Salvando no localStorage
                var salvandoDados = function () {
                    var form = document.getElementById('form').value;
                    var username = document.getElementById('username').value;
                    var dataFinal = document.getElementById('lastname').value;
                    var facaReclamacao = document.getElementById('faca-reclamacao').value;

                    localStorage.setItem('form', form);
                    localStorage.setItem('username', username);
                    localStorage.setItem('lastname', ultimoNome);
                    localStorage.setItem('faca-reclamacao', facaReclamacao);

                }
                // Ativando o função quando houver alteração no documento
                document.onchange = salvandoDados;

            </script>

            <!-- Estilo Reclamações -->
            <style>
                label,
                input {
                    background: #f1e2f6;
                }
            </style>


            <!--formulario-->


    </div>

    <!--inicio do footer-->
    <div class="footer">
        <div style="display: flex; margin-left: 1rem; align-items:
        center">
            <a href="https://www.facebook.com/alebrijehostal/" target="_blank" rel="noopener">
                <img src="assets/fb.svg" alt="facebook" />
            </a>
            <a href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener">
                <img src="assets/insta.svg" alt="insta" />
            </a>
            <a href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html" target="_blank" rel="noopener">
                <img src="assets/booking.svg" alt="bookin" />
            </a>
        </div>
        <span class="text-copyright">&#169 ElAlebrije <span id="ano">2022</span> - Todos os direitos
            reservados</span>
        <div className="footerSide">
            <a href="https://api.whatsapp.com/send?phone=5217223960938" target="_blank" rel="noopener">
                <img src="assets/wpp.svg" alt="whatsapp" />
            </a>
        </div>
    </div>
</body>

</html>

```

### Instruções de acesso

No uso da recuperação senha o hóspede deve inserir o primeiro nome, último nome e a seguir realizar a determinada reclamação;

- Link: http://127.0.0.1:5501/Reclamacoes.html


## Login (RF-015)
### Desenvolvedor(a): Saory Nayara Vieira Nakabori
- Tela de Login ao site

![image](https://user-images.githubusercontent.com/97962041/204149407-fc4b9a7a-c17e-46a4-bcca-d52efcfb754d.png)

### Requisito atendido:
- RF-015 - 	O cadastro de novos usuários, será validado através de um e-mail de confirmação;

### Artefatos da funcionalidade:
- /assets
- index.html
- style.css
- script.js

```js
    //Checando teste e-mail
const email = document.querySelector(".email");

function checkInputs() {
  
  const email = email.value;  

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }}

  document.onchange = checkInputs;

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
```

### Instruções de acesso

Login de acesso a aba reservas. 
http://127.0.0.1:5504/index.html?email=&password=


## Criar uma Conta (RNF-08)
### Desenvolvedor(a): Saory Nayara Vieira Nakabori
- Tela de criar uma conta

![image](https://user-images.githubusercontent.com/97962041/204149515-68df4545-a584-48bc-805e-be380bafc5ef.png)

### Requisito atendido:
- RNF-08 - 	O site deve possuir senhas de acesso e identificação para diferentes tipos de usuários: administrador do sistema, funcionários do hostel e clientes que têm acesso ao sistema no hostel;

### Artefatos da funcionalidade:
- /assets
- index.html
- style.css
- script.js

```js
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
```

### Instruções de acesso

Criar um conta para realizar as reservas 
http://127.0.0.1:5502/index.html


## Avaliações (RF-20)
### Desenvolvedor(a): Saory Nayara Vieira Nakabori
- Tela de avaliações

![image](https://user-images.githubusercontent.com/97962041/204149549-3c8ff1b0-9784-4b9a-89c3-79a012e9c40b.png)

### Requisito atendido:
- RF-20 - 	O sistema deve permitir uma aba para “Reclamações e Denúncias Anônimas”, para casos de preconceitos raciais ou demais crimes e situações adversas, ocorridas durante a hospedagem;

### Artefatos da funcionalidade:
- /assets
- index.html
- style.css
- script.js

```js
    const saveModification = document.getElementById("publicar");

const getLocalStorage = () =>
  JSON.parse(sessionStorage.getItem("saveComentario"));

const setSessionStorage = (dbProvider) => {
  localStorage.setItem("saveComentario", JSON.stringify(dbProvider));
};

const readReview = () => getLocalStorage();

const updateProvider = (provider) => {
  let dbProvider = readReview();
  dbProvider = provider;
  setSessionStorage(dbProvider);
};

const getInfoClient = () => {
  const dbProvider = readReview();
  fillFields(dbProvider);
};

const fillFields = (provider) => {
  if (provider) {
    document.getElementById("comentario").value = provider.comentario;
  }
};

var items = [];

function guardarNumeros() {
  boxvalue = { comentario: document.getElementById("comentario").value };
  items.push(boxvalue);
  console.log(items);
  updateProvider(items);
  return false; // stop submission
}

saveModification.addEventListener("click", (e) => {
  e.preventDefault();
  guardarNumeros();
  // alert("Dados salvos com sucesso!");
});
getInfoClient();
```

### Instruções de acesso
Página para digitar as avaliações sobre o hotel.
http://127.0.0.1:5503/index.html?

## Dados Pessoais (RF-01) e (RF-18)
### Desenvolvedor(a): Saory Nayara Vieira Nakabori
- Dados Pessoais

![image](https://user-images.githubusercontent.com/97962041/204149798-187065e8-6759-4ac0-94f8-d3d5a8311646.png)
![image](https://user-images.githubusercontent.com/97962041/204149820-5248ea57-6e5c-462c-ae7c-080c6c5c3e7c.png)


### Requisito atendido:
- RF-01 - Um breve cadastro de cada pessoa que permite o hostel ter informações importantes do cliente, principalmente para um check-in e check-out online. Assim, ele poderá se adiantar com toda a documentação;
- RF-18 - 	O site deve associar todas as reservas online a um responsável;

### Artefatos da funcionalidade:
- /assets
- index.html
- style.css
- script.js

```js
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
```

### Instruções de acesso
Página para visualização dos dados pessoais do hotel.
http://127.0.0.1:5501/index.html

## Avaliações - O que os hóspedes dizem (RF-06)
### Desenvolvedor(a): Fernanda Marques Assis
- Avaliações - O que os hóspedes dizem

![image](https://user-images.githubusercontent.com/97962041/204150132-2e32dc64-880e-4fb4-b267-3aeda6d541b7.png)

### Requisito atendido:
- RF-06 - 	O sistema deve possuir uma área de feedback e dicas de antigos hóspedes para orientação de estrangeiros, a fim de que o hóspede saiba o que vale a pena investir ou não e tenha uma boa estadia.

### Artefatos da funcionalidade:
- avaliacao.html
- avaliacao.png
- assets

```js
    const saveModification = document.getElementById("publicar");

const getLocalStorage = () =>
  JSON.parse(sessionStorage.getItem("saveComentario"));

const setSessionStorage = (dbProvider) => {
  localStorage.setItem("saveComentario", JSON.stringify(dbProvider));
};

const readReview = () => getLocalStorage();

const updateProvider = (provider) => {
  let dbProvider = readReview();
  dbProvider = provider;
  setSessionStorage(dbProvider);
};

const getInfoClient = () => {
  const dbProvider = readReview();
  fillFields(dbProvider);
};

const fillFields = (provider) => {
  if (provider) {
    document.getElementById("comentario").value = provider.comentario;
  }
};

var items = [];

function guardarNumeros() {
  boxvalue = { comentario: document.getElementById("comentario").value };
  items.push(boxvalue);
  console.log(items);
  updateProvider(items);
  return false; // stop submission
}

saveModification.addEventListener("click", (e) => {
  e.preventDefault();
  guardarNumeros();
  // alert("Dados salvos com sucesso!");
});
getInfoClient();
```

### Instruções de acesso
Página para visualizar as avaliações dos clientes sobre o hotel.
http://127.0.0.1:5500/ReviseDados/AvaliacaoPublicacao.html


## Localizações (RF-17)
### Desenvolvedor(a): Fernanda Marques Assis
- Página de localizações

![image](https://user-images.githubusercontent.com/97962041/200979787-1832030b-c935-4bf1-800e-60cb1b60b588.png)

### Requisito atendido:
- RF-17 - O site deverá apresentar links redirecionando às outras redes da empresa, como: Instagram, Youtube, Facebook e afins;

### Artefatos da funcionalidade:
- localizacao.html
- localizacao.png
- assets

```js
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Localização</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link
      rel="stylesheet"
      href="path/to/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="./assets/global.css" />
    <link rel="stylesheet" type="text/css" href="./assets/style.css" />
    <link rel="stylesheet" type="text/css" href="./assets/footer.css" />

    <script>
      const ano = document.getElementById("ano");
      const anoAtual = new Date();
    </script>
  </head>
  <body>
    <header>
      <div class="center">
          <div class="logo">
              <h3><img src="./assets/img/hostal.png" width="103">
          </div><!--center-->
      <div class="hostal">
          <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
      </div><!--hostal-->
      <div class="menu-container">
          <a class="active-menu" href="">SOBRE</a>
          <a href="">FOTOS</a>
          <a href="">ACOMODAÇÕES</a>
          <a href="">LOCALIZAÇÃO</a>
          <a href="">AVALIÇÕES</a>
          <a href="">EXPLORE</a>
      </div><!--menu-container-->
      </div>
      <div class="btn">
          <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#9e2fba;">ENTRAR</b></a></div>
          <button class="btn-cad"style="font-size: 12px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
      </div>

    </header>

    <div class="translate">
        <a href=""><img src="./assets/img/Br.jpg"/></a>
    </div>

    <div class="translate1">
        <a href=""><img src="./assets/img/esp.png"/></a>
    </div>

    <div class="translate2">
        <a href=""><img src="./assets/img/us.png"/></a>
    </div>
    <div class="container">
      <div class="row">
        <div class="title col-md-12">
          <h3>LOCALIZAÇÃO</h3>
          <hr class="line-localization" />
        </div>
        <div class="col-md-12">
          <div class="box-container">
            <span class="endereco"> Endereço </span>
            <span style="margin-top: 1rem; font-size: 16px">
              Rua Coliseo 212-B, Valle De Bravo, Mexico, 51200
            </span>
            <button class="button-global">Ver localização no mapa</button>
          </div>
        </div>
        <div class="map-responsive col-md-12">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0763965870146!2d-100.13480558509707!3d19.19186528702154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd6565fe3d8b3d%3A0x15ae414650d58cf3!2sHostal%20el%20Alebrije!5e0!3m2!1sen!2sbr!4v1666305657993!5m2!1sen!2sbr'
            width='400'
            height='400'
            frameborder='0'
            style="border:0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="footer">
          <div style="display: flex; margin-left: 1rem; align-items: center">
            <a
              href="https://www.facebook.com/alebrijehostal/"
              target="_blank"
              rel="noopener"
            >
              <img class="footer-img" src="./assets/img/fb.svg" alt="facebook" />
            </a>
            <a
              href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener"
            >
              <img class="footer-img" src="./assets/img/insta.svg" alt="insta" />
            </a>
            <a
              href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
              target="_blank"
              rel="noopener"
            >
              <img class="footer-img" src="./assets/img/booking.svg" alt="bookin" />
            </a>
          </div>
          <span class="text-copyright">&#169 ElAlebrije <span id="ano">2022</span> - Todos os direitos reservados</span>
          <div className="footerSide">
            <a
              href="https://api.whatsapp.com/send?phone=5217223960938"
              target="_blank"
              rel="noopener"
            >
              <img class="footer-img" src="./assets/img/wpp.svg" alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
  </body>
</html>
```

### Instruções de acesso
Página para visualizar as localizações;
http://127.0.0.1:5500/Localizacao.html


## Revise seus Dados (RF-04) e (RF-05)
### Desenvolvedor(a): Fernanda Marques Assis
- Página de Revise seus Dados

![image](https://user-images.githubusercontent.com/97962041/204150603-b03dbc19-25da-4d5b-b82c-cc619f994b0b.png)

### Requisito atendido:
- RF-04 - O sistema deve permitir as seguintes opções de pagamento da estadia no hotel: 1) à vista (em dinheiro, cheque ou cartão de crédito); 2) faturado em 30 dias.
- RF-05 - O sistema deve permitir ao hóspede imprimir um histórico de suas estadias no hostel, agilizando o processo de hospedagem pelo cadastro já ter sido previamente feito. 

### Artefatos da funcionalidade:
- reviseseusdados.html
- reviewform.js
- assets

```js
    const saveModification = document.getElementById("salvar-alteracoes");

const getLocalStorage = () =>
  JSON.parse(sessionStorage.getItem("revisao-dados"));

const setSessionStorage = (dbProvider) => {
  localStorage.setItem("revisao-dados", JSON.stringify(dbProvider));
};

const readReview = () => getLocalStorage();

const updateProvider = (provider) => {
  let dbProvider = readReview();
  dbProvider = provider;
  setSessionStorage(dbProvider);
};

const getInfoClient = () => {
  const dbProvider = readReview();
  fillFields(dbProvider);
};

const fillFields = (provider) => {
  document.getElementById("nome-completo").value = provider.nomeCompleto;
  document.getElementById("celular").value = provider.celular;
  document.getElementById("nacionalidade").value = provider.nacionalidade;
  document.getElementById("cpf").value = provider.cpf;
  document.getElementById("email").value = provider.email;
  document.getElementById("gender").value = provider.genero;
  document.getElementById("transferencia").value = provider.transferencia;
  document.getElementById("termos").value = provider.termos;
  document.getElementById("data-nascimento").value = provider.dataNascimento;
  document.getElementById("senha").value = provider.senha;
};

saveModification.addEventListener("click", (e) => {
  e.preventDefault();
  const provider = {
    nomeCompleto: document.getElementById("nome-completo").value,
    celular: document.getElementById("celular").value,
    nacionalidade: document.getElementById("nacionalidade").value,
    cpf: document.getElementById("cpf").value,
    email: document.getElementById("email").value,
    genero: document.getElementById("gender").value,
    transferencia: document.getElementById("transferencia").value,
    termos: document.getElementById("termos").value,
    dataNascimento: document.getElementById("data-nascimento").value,
    senha: document.getElementById("senha").value,
  };

  updateProvider(provider);
  alert("Dados salvos com sucesso!");
});
getInfoClient();
```

### Instruções de acesso
Página para visualizar as localizações;
http://127.0.0.1:5500/ReviseDados/ReviseDados.html

## Explore (RF-03)
### Desenvolvedor(a): Fernanda Marques Assis
- Página do Explore

![image](https://user-images.githubusercontent.com/97962041/200980326-657edb0d-0e1d-43be-bb4b-090f16d04220.png)
![image](https://user-images.githubusercontent.com/97962041/200980768-d5d1c7a3-0dc3-45ac-8dbc-80df25a64db2.png)


### Requisito atendido:
- RF-03 - Disponibilizar para o cliente todos os atrativos da região com descrições de cada atividade e com uma opção do hóspede se inscrever para participar das atividades dentro e fora do hostel;

### Artefatos da funcionalidade:
- explore.html
- explore.png
- exploreview.html
- assets

```js
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Explore</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
      crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./assets/global.css">
    <link rel="stylesheet" type="text/css" href="./assets/style.css" />
    <link rel="stylesheet" type="text/css" href="./assets/footer.css">
    <script>
      const ano = document.getElementById("ano");
      const anoAtual = new Date();
    </script>
  </head>
  <body>
    <header>
      <div class="center">
          <div class="logo">
              <h3><img src="./assets/img/hostal.png" width="103">
          </div><!--center-->
      <div class="hostal">
          <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
      </div><!--hostal-->
      <div class="menu-container">
          <a class="active-menu" href="">SOBRE</a>
          <a href="">FOTOS</a>
          <a href="">ACOMODAÇÕES</a>
          <a href="">LOCALIZAÇÃO</a>
          <a href="">AVALIÇÕES</a>
          <a href="">EXPLORE</a>
      </div><!--menu-container-->
      </div>
      <div class="btn">
          <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#9e2fba;">ENTRAR</b></a></div>
          <button class="btn-cad"style="font-size: 12px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
      </div>
    </header>

    <div class="translate">
        <a href=""><img src="./assets/img/Br.jpg"/></a>
    </div>

    <div class="translate1">
        <a href=""><img src="./assets/img/esp.png"/></a>
    </div>

    <div class="translate2">
        <a href=""><img src="./assets/img/us.png"/></a>
    </div>
    <div class="container">
      <a href="./Explore.html" style="position: absolute; top: 3rem; left: 3rem; display: flex; align-items: center; font-size: 16px; text-decoration: none;">
        <img src="./assets/img/arrow.svg" style="height: 15px" />
        <span style="color: black; margin-left: 1rem">Voltar</span>
      </a>
      <div class="row">
        <div class="title col-md-12">
          <h3>Cachoeira Véu da noiva</h3>
          <hr class="line-localization">
        </div>
        <div class="col-md-4">
          <div  style="display: flex; flex-direction: column; align-items: center;">
            <span style="color: #9E2FBA; font-size: 18px"> Cachoeira véu de Noiva - Valle del Bravo </span>
            <span style="font-size: 16px; text-align: justify; margin-top: 1.3rem;">Essa linda cachoeira fica aninhada em uma exuberante folhagem, onde a água branca desce por um penhasco e flui pelas rochas enormes.
              Siga o som da água correndo ecoando em uma região de vegetação densa até chegar à Cascada Velo de Novia. Refresque sua mente enquanto aprecia a beleza panorâmica deste local. A Cascada Velo de Novia tem 35 metros de altura e recebeu esse nome por lembrar o véu de uma noiva. A cachoeira fica no meio de uma reserva natural e suas águas alimentam o Lago Avándaro nas proximidades.O caminho para a cascata é curto e passa por árvores exóticas e arbustos. Fique nas áreas de visualização para admirar a cachoeira de vários ângulos. Observe como a água desce pelas rochas na forma de um véu de noiva. Escale as rochas, chegue mais perto do penhasco e sinta a água respingando em você. Mas tome cuidado, pois as rochas são escorregadias e perigosas.Suba até o ponto de observação em um dos lugares mais altos da reserva, que oferece vistas do Lago Avándaro. Leve comida e faça um piquenique em meio a este exuberante ambiente natural. Há bancos e mesas ao longo das margens do rio que se forma na cachoeira. Se preferir, procure um lugar calmo para meditar e aproveitar a tranquilidade.A Cascada Velo de Novia fica a cerca de 10 quilômetros a sudoeste do centro da cidade de Valle de Bravo. O táxi é o meio mais prático de chegar ao local. Embora limitado, há estacionamento gratuito disponível. Enquanto estiver na área, explore outras atrações em Valle de Bravo, inclusive a Praça de Independência, a Igreja de São Francisco de Assis e o Museu Joaquin Arcadio Pagaza.Você pode visitar a Cascada Velo de Novia e sua reserva natural diariamente. A entrada é grátis. A cachoeira fica mais impressionante depois da chuva. Chegue de manhã na alta temporada para evitar grandes multidões. Se você não quiser caminhar pela trilha, alugue um cavalo.</span>
          </div>
        </div>
        <div class="col-md-8">
          <div id="myCarousel" class="carousel slide" data-ride="carousel" style="width:100%;">
            <!-- Indicators -->
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" style="border-radius: 2px;">
              <div class="item active">
                <img src="./assets/img/explore/veu-noiva.svg" alt="Los Angeles" style="width:100%;">
              </div>

              <div class="item">
                <img src="./assets/img/explore/veu-noiva.svg" alt="Chicago" style="width:100%;">
              </div>

              <div class="item">
                <img src="./assets/img/explore/veu-noiva.svg" alt="New york" style="width:100%;">
              </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <a href="./Explore.html" target="_self" rel="noopener" style="text-decoration: none; margin: 0; color: #000">
            <div id="explore" class="row"></div>
          </a>
        </div>
        <div class="footer">
          <div style="display: flex; margin-left: 1rem; align-items:
            center">
            <a href="https://www.facebook.com/alebrijehostal/" target="_blank"
              rel="noopener">
              <img class="footer-img" src="./assets/img/fb.svg" alt="facebook">
            </a>
            <a href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
              target="_blank" rel="noopener">
              <img class="footer-img" src="./assets/img/insta.svg" alt="insta">
            </a>
            <a
              href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
              target="_blank" rel="noopener">
              <img class="footer-img" src="./assets/img/booking.svg" alt="bookin">
            </a>
          </div>
          <span class="text-copyright">&#169 ElAlebrije
            <span id="ano">2022</span>
            - Todos os direitos
            reservados
          </span>
          <div className="footerSide">
            <a href="https://api.whatsapp.com/send?phone=5217223960938"
              target="_blank" rel="noopener">
              <img class="footer-img" src="./assets/img/wpp.svg" alt="whatsapp">
            </a>
          </div>
        </div>
      </div>
    </div>
    <script>
      const data = [
        {
          img: './assets/img/explore/Rectangle60.svg',
          nome: 'Centro de Espiritualidad Carmel Maranatha',
          descricao: "A casa de Carmel Maranatha é uma casa de oração ou de exercícios espirituais, desde 1985. O seu objetivo é oferecer um espaço para favorecer o encontro pessoal e com Deus, através do silêncio, da oração e dos retratos espirituais",
          tipo: 'Locais religiosos'
        },
        {
          img: './assets/img/explore/santuário-borboletas.svg',
          nome: 'santuário de Borboletas-monarca',
          descricao: "Todos os anos, borboletas monarcas migram até 3.000 milhas do Canadá para o México. Veja o fenômeno com seus próprios olhos em uma excursão de um dia a um santuário de borboletas.",
          tipo: 'Natureza e vida selvagem'
        },
        {
          img: './assets/img/explore/image18.svg',
          nome: 'Mirante La peña',
          descricao: "Se você deseja se aventurar e sair da rotina, Mirador La Peña é para você! Escale essa imensa montanha e aprecie uma das melhores vistas de toda a região.",
          tipo: 'Mirantes'
        }
      ];

      document.getElementById('explore').innerHTML = data.map(user =>
        `
          <div class="col-md-4">
            <div
              style="
                margin-top: 1.6rem;
                width: auto;
                height: 470px;
                max-width: 390px;
                border: 1px solid #C6C6C6;
                border-radius: 8px;
                box-shadow:0px 5px 10px rgba(0, 0, 0, 0.1);
              "
            >
              <img src=${user.img} style="height: 144px;" />
              <div style="display: flex; flex-direction: column; align-items: canter; padding: 2rem;">
                <span style="color: #9E2FBA; font-size: 16px; text-align: center">${user.nome}</span>
                <span style="margin-top: 1.5rem; font-size: 14px; text-align: justify;">${user.descricao}</span>
              </div>
              <div style="padding: 3rem 2rem; position: absolute; bottom: -2rem">
                <span style="font-size: 14px; color: #919191; ">${user.tipo}</span>
              </div>
            </div>
          </div>

        `
      ).join('')
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
  </body>
</html>
```

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Avaliações</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossorigin="anonymous">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
      integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
      crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./assets/global.css">
    <link rel="stylesheet" type="text/css" href="./assets/style.css" />
    <link rel="stylesheet" type="text/css" href="./assets/footer.css">
    <script>
      const ano = document.getElementById("ano");
      const anoAtual = new Date();
    </script>
  </head>
  <body>
    <header>
      <div class="center">
          <div class="logo">
              <h3><img src="./assets/img/hostal.png" width="103">
          </div><!--center-->
      <div class="hostal">
          <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
      </div><!--hostal-->
      <div class="menu-container">
          <a class="active-menu" href="">SOBRE</a>
          <a href="">FOTOS</a>
          <a href="">ACOMODAÇÕES</a>
          <a href="">LOCALIZAÇÃO</a>
          <a href="">AVALIÇÕES</a>
          <a href="">EXPLORE</a>
      </div><!--menu-container-->
      </div>
      <div class="btn">
          <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#9e2fba;">ENTRAR</b></a></div>
          <button class="btn-cad"style="font-size: 12px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
      </div>
    </header>

    <div class="translate">
        <a href=""><img src="./assets/img/Br.jpg"/></a>
    </div>

    <div class="translate1">
        <a href=""><img src="./assets/img/esp.png"/></a>
    </div>

    <div class="translate2">
        <a href=""><img src="./assets/img/us.png"/></a>
    </div>
    <div class="container">
      <div class="row">
        <div class="title col-md-12">
          <h3>Explore</h3>
          <hr class="line-localization">
        </div>
        <a href="./ExploreView.html" target="_self" rel="noopener" style="text-decoration: none; margin: 0; color: #000">
          <div id="explore" class="row"></div>
        </a>
        <div class="footer">
          <div style="display: flex; margin-left: 1rem; align-items:
            center">
            <a href="https://www.facebook.com/alebrijehostal/" target="_blank"
              rel="noopener">
              <img class="footer-img" src="./assets/img/fb.svg" alt="facebook">
            </a>
            <a href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
              target="_blank" rel="noopener">
              <img class="footer-img" src="./assets/img/insta.svg" alt="insta">
            </a>
            <a
              href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
              target="_blank" rel="noopener">
              <img class="footer-img" src="./assets/img/booking.svg" alt="bookin">
            </a>
          </div>
          <span class="text-copyright">&#169 ElAlebrije
            <span id="ano">2022</span>
            - Todos os direitos
            reservados
          </span>
          <div className="footerSide">
            <a href="https://api.whatsapp.com/send?phone=5217223960938"
              targ class="footer-img" src="./assets/img/wpp.svg" alt="whatsapp">
            </a>
          </div>
        </div>
      </div>
    </div>
    <script>
      const data = [
        {
          img: './assets/img/explore/veu-noiva.svg',
          nome: 'Cachoeira véu de Noiva',
          descricao: "Excelente lugar para visitar! É uma ótima opção para as pessoas que gostam de natureza e liberdade... Cachoeira com um bela queda d'agua.",
          tipo: 'Cachoeiras'
        },
        {
          img: './assets/img/explore/santuário-borboletas.svg',
          nome: 'santuário de Borboletas-monarca',
          descricao: "Todos os anos, borboletas monarcas migram até 3.000 milhas do Canadá para o México. Veja o fenômeno com seus próprios olhos em uma excursão de um dia a um santuário de borboletas.",
          tipo: 'Natureza e vida selvagem'
        },
        {
          img: './assets/img/explore/image18.svg',
          nome: 'Mirante La peña',
          descricao: "Se você deseja se aventurar e sair da rotina, Mirador La Peña é para você! Escale essa imensa montanha e aprecie uma das melhores vistas de toda a região.",
          tipo: 'Mirantes'
        },
        {
          img: './assets/img/explore/Rectangle60.svg',
          nome: 'Centro de Espiritualidad Carmel Maranatha',
          descricao: "A casa de Carmel Maranatha é uma casa de oração ou de exercícios espirituais, desde 1985. O seu objetivo é oferecer um espaço para favorecer o encontro pessoal e com Deus, através do silêncio, da oração e dos retratos espirituais",
          tipo: 'Locais religiosos'
        },
        {
          img: './assets/img/explore/Rectangle59.svg',
          nome: 'Great Stupa Valle de Bravo',
          descricao: "A casa Tibet, localizada na Cidade do México, é uma das principais organizações budistas do país. Devido à localização do Valle de Bravo como um dos Pueblos Mágicos mais próximos da capital, tornou-se um centro de espiritualidade para os habitantes da megalópole.",
          tipo: 'Locais religiosos, Pontos de interesse'
        },
        {
          img: './assets/img/explore/image19.svg',
          nome: 'Paroquia de São Francisco de Asís',
          descricao: "Dedicada ao padroeiro São Francisco de Asís, a Paróquia de São Francisco de Asís abriga obras escultóricas do século XVII. É o templo mais alto do Estado do México. Sua construção começou em 1880 e foi concluída mais de um século depois, em 1994.",
          tipo: 'Igrejas e catedrais'
        },

      ];

      document.getElementById('explore').innerHTML = data.map(user =>
        `
          <div class="col-md-4">
            <div
              style="
                margin-top: 1.6rem;
                width: auto;
                height: 480px;
                max-width: 390px;
                border: 1px solid #C6C6C6;
                border-radius: 8px;
                box-shadow:0px 5px 10px rgba(0, 0, 0, 0.1);
              "
            >
              <img src=${user.img} style="height: 222px;" />
              <div style="display: flex; flex-direction: column; align-items: canter; padding: 2rem;">
                <span style="color: #9E2FBA; font-size: 16px; text-align: center">${user.nome}</span>
                <span style="margin-top: 1.5rem; font-size: 14px; text-align: justify;">${user.descricao}</span>
              </div>
              <div style="padding: 3rem 2rem; position: absolute; bottom: -2rem">
                <span style="font-size: 14px; color: #919191; ">${user.tipo}</span>
              </div>
            </div>
          </div>

        `
      ).join('')
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
  </body>
</html>
```

### Instruções de acesso
Página para visualizar as atrações turísticas;
http://127.0.0.1:5500/ExploreView.html
http://127.0.0.1:5500/Explore.html


## Revise suas Acomodações (RF-05 e RF-02)
### Desenvolvedor(a): Gabriella Bradley Cusnir
- Página Revise suas Acomodações

![image](https://user-images.githubusercontent.com/97962041/200981786-08045993-970a-4303-9c6d-11556b2e525e.png)


### Requisito atendido:
- RF-05 - O sistema deve permitir ao hóspede imprimir um histórico de suas estadias no hostel, agilizando o processo de hospedagem pelo cadastro já ter sido previamente feito;
- RF-02 - Um serviço de disponibilidade de camas e quartos, para que o cliente possa escolher a cama e o quarto que deseja e não ocorra reservas acima da capacidade do hostel. 


### Artefatos da funcionalidade:
- explore.html
- explore.png
- exploreview.html
- assets

```js
    <!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/style.css" rel="stylesheet"/>
        <link href="css/reserva.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Hostal El Alebrije</title>
    </head>
    <body>
        <header>
            <div class="center">
                <div class="logo">
                    <h3><img src="assets/hostal.png" width="103">
                        </div><!--center-->
                        <div class="hostal">
                            <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
                        </div><!--hostal-->
                        <div class="menu-container">
                            <a class="active-menu" href="">SOBRE</a>
                            <a href="">FOTOS</a>
                            <a href="">ACOMODAÇÕES</a>
                            <a href="">LOCALIZAÇÃO</a>
                            <a href="">AVALIÇÕES</a>
                            <a href="">EXPLORE</a>
                        </div><!--menu-container-->    
                </div>
                <div class="btn">
                    <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#9e2fba;;">ENTRAR</b></a></div>
                <button class="btn-cad"style="font-size: 12px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
        </div>

    </header>

    <div class="translate">
        <a href=""><img src="assets/Br.jpg"/></a>
    </div>

    <div class="translate1">
        <a href=""><img src="assets/esp.png"/></a>
    </div>

    <div class="translate2">
        <a href=""><img src="assets/us.png"/></a>
    </div>

    <div class="container">

        <div class="row justify-content-center">
            <div class="col-sm-8">

                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-9 " >
                                <div class="text-center">
                                    <h4>Acomodações</h4>
                                </div>
                            </div>
                            <div class="col-sm-3 ">
                                <div class="text-center">
                                    <h4>Hóspedes</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-5">
                                <img src="./images/quarto.jpeg" style="height: 190px;" class="img-fluid rounded-start" alt="quarto01">
                            </div>
                            <div class="col-sm-4 text-right">
                                <div class="card  mb-3">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <h5 class="card-title ">3 Pessoas</h5>
                                            <p class="card-text">Privado</p>
                                        </li>
                                        <li class="list-group-item text-center">
                                            <p class="card-text">Café da manha incluso</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">R$</span>
                                    <input disabled="disable" type="number" value="129.65" class="form-control" aria-label="Amount (to the nearest dollar)" >
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group mb-3">
                                    <span class="input-group-text backgroundWhite">
                                        <img src="./assets/user.png" style="height: 24px;"/>
                                    </span>
                                    <select class="form-select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">R$</span>
                                    <input disabled="disable" type="number" value="129.65" class="form-control" aria-label="Amount (to the nearest dollar)" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-5">
                                <img src="./images/img008.jpg" style="height: 190px;" class="img-fluid rounded-start" alt="quarto01">
                            </div>
                            <div class="col-sm-4 text-right">
                                <div class="card  mb-3">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <h5 class="card-title ">6 Pessoas</h5>
                                            <p class="card-text">Misto</p>
                                        </li>
                                        <li class="list-group-item text-center">
                                            <p class="card-text">Café da manha incluso</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">R$</span>
                                    <input disabled="disable" type="number" value="56.18" class="form-control" aria-label="Amount (to the nearest dollar)" >
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group mb-3">
                                    <span class="input-group-text backgroundWhite" >
                                        <img src="./assets/user.png" style="height: 24px;"/>
                                    </span>
                                    <select class="form-select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">R$</span>
                                    <input disabled="disable" type="number" value="56.18" class="form-control"  >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-5">
                                <img src="./images/img012.jpg" style="height: 190px;" class="img-fluid rounded-start" alt="quarto01">
                            </div>
                            <div class="col-sm-4 text-right">
                                <div class="card  mb-3">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item text-center">
                                            <h5 class="card-title ">4 Pessoas</h5>
                                            <p class="card-text">Misto</p>
                                        </li>
                                        <li class="list-group-item text-center">
                                            <p class="card-text">Café da manha incluso</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">R$</span>
                                    <input disabled="disable" type="number" value="58.92" class="form-control" aria-label="Amount (to the nearest dollar)" >

                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="input-group mb-3">
                                    <span class="input-group-text backgroundWhite" >
                                        <img src="./assets/user.png" style="height: 24px;"/>
                                    </span>
                                    <select class="form-select">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text">R$</span>
                                    <input disabled="disable" type="number" value="58.92" class="form-control" aria-label="Amount (to the nearest dollar)" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center" style="margin-top: 20px;">
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-4">
                        <label for="startDate">Entrada</label>
                        <input id="startDate" class="form-control" type="date" />
                    </div>
                    <div class="col-sm-4">
                        <label for="endDate">Saída</label>
                        <input id="endDate" class="form-control" type="date" />
                    </div>
                    <div class="col-sm-3 offset-sm-1">
                        <div class="card  mb-3">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item text-center">
                                    <h5 class="card-title ">Total</h5>
                                </li>
                                <li class="list-group-item text-center">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">R$</span>
                                        <input disabled="disable" type="number" value="186.54" class="form-control" style="text-align: center; background-color: white;">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center" style="margin-top: 20px;">
            <div class="col-sm-8">
                <div class="row">
                    <div class="col-sm-3 offset-sm-9 text-center">
                        <div class="input-group mb-3 ">
                            <input  type="button" value="Proxímo" class="botaoProximo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>

    </script>
</body>
</html>
```

### Instruções de acesso
Página para revisar as escolhas de acomodações;
![image](https://user-images.githubusercontent.com/97962041/204175870-414cfd15-adc5-478d-9eae-98a4956ffd8f.png)


## Confirmação (RF-05 e RF-12)
### Desenvolvedor(a): Gabriella Bradley Cusnir
- Página Revise suas Acomodações

![image](https://user-images.githubusercontent.com/97962041/204175713-5a95d464-26f9-4756-a4d7-4fcb09918058.png)


### Requisito atendido:
- RF-05 - O sistema deve permitir ao hóspede imprimir um histórico de suas estadias no hostel, agilizando o processo de hospedagem pelo cadastro já ter sido previamente feito;
- RF-12 - A reserva somente deve ser feita se existirem vagas suficientes para atendê-la. Ademais, deverá ser mostrada uma mensagem alertando que não há disponibilidade de acomodações para o período indicado.

### Artefatos da funcionalidade:
- index.html
- img
- script.js
- style.css

```js
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="footer.css">
    <script src="script.js" defer></script>
    <title>Confirmação - Puc hostel</title>
</head>
<body>
    <header>
        <div class="center">
            <div class="logo">
                <h3><img src="./img/img022.jpg" width="103">
                    </div><!--center-->
                    <div class="hostal">
                        <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
                    </div><!--hostal-->
                    <div class="menu-container">
                        <a class="active-menu" href="">SOBRE</a>
                        <a href="">FOTOS</a>
                        <a href="">ACOMODAÇÕES</a>
                        <a href="">LOCALIZAÇÃO</a>
                        <a href="">AVALIÇÕES</a>
                        <a href="">EXPLORE</a>
                    </div><!--menu-container-->    
            </div>
            <div class="btn">
                <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#9e2fba;;">ENTRAR</b></a></div>
            <button class="btn-cad"style="font-size: 12px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
        </div>
</header>
<div class="translate">
    <a href=""><img src="./img/bandeira-brasil.png"/></a>
</div>

<div class="translate1">
    <a href=""><img src="./img/bandeira-eua.png"/></a>
</div>

<div class="translate2">
    <a href=""><img src="./img/bandeira-mex.png"/></a>
</div>
<div class="container">

    <div class="row justify-content-center">
        <div class="col-sm-8">
<br><br><br>
        <div class="col-md-12 steps-dados">
            <div class="dados">
                <img src="./img/cama-de-hotel.png" style="height:100px; width:100px;" alt="hotel-bed" class="img-responsive"/>
                <div class="dados-active">
                <span style="color: rgb(9, 9, 9); font-size: 18px;">Escolha seu quarto</span>
                </div>
            </div>
            <div class="dados">
                <img src="./img/aceitaram.png" style="height:100px; width:100px;" alt="hotel-bed" class="img-responsive"/>
                <div class="dados-active">
                    <span style="color: rgb(20, 20, 20); font-size: 18px;">Revise seus dados</span>
                </div>
            </div>
            <div class="dados-confirmacao">
                <img src="./img/verificado.png" style="height:100px; width:100px;" alt="hotel-bed" class="img-responsive"/>
                <div class="dados-disable">
                    <span style="color: #000; font-size: 18px;">Confirmação</span>
                </div>
            </div>
        </div>
        <br><br>
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-9 " >
                            <div class="text-center">
                                <h4>Confirmação:</h4><br>
                            </div>
                        </div>
                        <p>Dados da reserva:</p>
                        <div class="input-group mb-3">
                        <span class="input-group-text">Responsável</span>
                        <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                        </div>
                        <div class="input-group mb-3">
                        <span class="input-group-text">Hóspedes</span>
                        <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                        </div>
                        <div class="input-group mb-3">
                        <span class="input-group-text">Data de entrada</span>
                        <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                        </div>
                        <div class="input-group mb-3">
                        <span class="input-group-text">Data de saída</span>
                        <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                    </div>
                    </div>
                    <br><br>
                    <p>Informações do pagamento:</p>
                    <div class="input-group mb-3">
                    <span class="input-group-text">Forma de pagamento</span>
                    <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                    </div> 
                    <div class="input-group mb-3">
                    <span class="input-group-text">Valor pago</span>
                    <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                    </div> 
                    <div class="input-group mb-3">
                    <span class="input-group-text">Data de pagamento</span>
                    <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                    </div> 
                    <div class="input-group mb-3">
                    <span class="input-group-text">Valor total da reserva</span>
                    <input disabled="disable" type="number" value="#" class="form-control" aria-label="Amount (to the nearest dollar)">
                    </div> 
                    <div class="texto">
                    <p>Se possível, imprima este documento e apresente no momento do check-in.
                        Desejamos a você uma ótima estadia.
                    </p>
                    <p>DÚVIDAS? Entre em contato.</p>
                    </div>
                </div>
                </div>
                <br>
            </div>
            <input type="button" onclick="finalizar()" value="finalizar"/>
           <footer>
            <div class="footer">
                    <div style="display: flex; margin-left: 1rem; align-items:
                        center">
                        <a href="https://www.facebook.com/alebrijehostal/"
                            target="_blank" rel="noopener">
                            <img src="./img/facebook.jpg" alt="facebook" style="height:20px; width:20px;"/>
                        </a>
                        <a
                            href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
                            target="_blank" rel="noopener">
                            <img src="./img/instagram-icon.png" alt="insta" style="height:20px; width:20px;" />
                        </a>
                        <a
                            href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
                            target="_blank"
                            rel="noopener">
                            <img src="./img/booking.png" alt="bookin" style="height:20px; width:20px;"/>
                        </a>
                    </div>
                         <span class="text-copyright">&#169 ElAlebrije <span
                            id="ano">2022</span> - Todos os direitos
                        reservados</span>
                         <div className="footerSide">
                        <a
                            href="https://api.whatsapp.com/send?phone=5217223960938"
                            target="_blank" rel="noopener">
                            <img src="./img/whatsapp-png.png" alt="whatsapp" style="height:20px; width:20px;" />
                        </a>
                    </div>
                </div>
            </footer>
</body>
</html>
```

### Instruções de acesso
Página para revisar as escolhas de acomodações;
http://127.0.0.1:5500/confirmacao-pucHostel/index.html

## Fotos (RF-010) e (RF-019)
### Desenvolvedor(a): Geovanne Marco Correa da Silva
- Galeria de Imagens

![FOTOS](https://user-images.githubusercontent.com/114536934/200992833-dd0ab348-7042-4151-b6c4-82f41f39e620.jpg)


### Requisito atendido:
- RF-08 - O site deverá conter uma imagem correspondente para as diferenças de acomodações e demais serviços prestados aos hóspedes.
- RF-014 - A interface gráfica deve ser de fácil entendimento e o usuário deve conseguir usar com facilidade;

### Artefatos da funcionalidade:
- header.html
- style.css
- função.js
- .jpg
- .svg

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <script src="função.js"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hostel El Alebrije na cidade de Valle del Bravo no México">
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <title>Hostel El Alebrije</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <!--Inicio do abeçalho-->
    <header>
        <div class="LOGO">
            <img src="img/Logo.svg" width="90px" alt="Logo do Hostel">
        </div>
        <nav class="navegação">
            <div class="nomehostel">
                <h1 class="Hostel">Hostal</h1>
                <h5 class="Elalebrije">El Alebrije</h5>
            </div>
            <div class="cabeçalhoselecionavel">
                <a href="" class="sobre">SOBRE</a>
                <a href="" class="fotos">FOTOS</a>
                <a href="" class="acomodacoes">ACOMODAÇÕES</a>
                <a href="" class="localizacao">LOCALIZAÇÃO</a>
                <a href="" class="avaliacoes">AVALIAÇÕES</a>
                <a href="" class="explorar">EXPLORAR</a>
            </div>
            <div class="login">
                <div class="entrar"><strong>ENTRAR</strong></div>
                <div class="cadastrar">CADASTRAR</div>
            </div>
        </nav>

        <div class="bandeiraagora">
            <div class="reserveagora">RESERVE AGORA</div>
            <div class="bandeira">
                <img class="BRA" src="img/BRA.svg" alt="Bandeira Brasil" width="40px">
                <img class="ESP" src="img/ESP.svg" alt="Bandeira Espanha" width="40px">
                <img class="USA" src="img/USA.svg" alt="Bandeira Estado Unidos" width="40px">
            </div>
        </div>
    </header>
    <!--Fim do cabeçalho-->
</head>

<body>

    <main>
        <section class="corpo">
            <h1 class="titulofotos"><strong>FOTOS</strong></h1>
            <div class="imagens">
                <main class="imgpequena">
                    <ul>
                        <li>
                            <img src="img/trocaimg01.jpg" width="100px" alt="Rede de balanço 1" onclick="img01();">
                        </li>
                        <li>
                            <img src="img/trocaimg02.jpg" width="100px" alt="Rede de balanço 2" onclick="img02();">
                        </li>
                        <li>
                            <img src="img/trocaimg03.jpg" width="100px" alt="Quadro Decorativo" onclick="img03();">
                        </li>
                        <li>
                            <img src="img/trocaimg04.jpg" width="100px" alt="Cozinha Hostel" onclick="img04();">
                        </li>
                        <li>
                            <img src="img/trocaimg05.jpg" width="100px" alt="Sala Hostel" onclick="img05();">
                        </li>
                        <li>
                            <img src="img/trocaimg06.jpg" width="100px" alt="Mapa Mundi" onclick="img06();">
                        </li>
                    </ul>
                </main>
                <img class="fotogrande" src="img/trocaimg06.jpg" width="1000px" height="630"
                    alt="imagem alterada por JS" id="trocarimg">
                <ul class="ulnova">
                    <li>
                        <img src="img/trocaimg07.jpg" width="100px" alt="Banheiro" onclick="img07();">
                    </li>
                    <li>
                        <img src="img/trocaimg08.jpg" width="100px" alt="Quarto Casal Privado" onclick="img08();">
                    </li>
                    <li>
                        <img src="img/trocaimg09.jpg" width="100px" alt="Quarto Compartilhado1" onclick="img09();">
                    </li>
                    <li>
                        <img src="img/trocaimg10.jpg" width="100px" alt="Quarto Compartilhado2" onclick="img10();">
                    </li>
                    <li>
                        <img src="img/trocaimg11.jpg" width="100px" alt="Quarto Compartilhado 3" onclick="img11();">
                    </li>
                    <li>
                        <img src="img/trocaimg12.jpg" width="100px" alt="Outro mapa mundi" onclick="img12();">
                    </li>
                </ul>

        </section>
    </main>
    <!--Inicio do rodapé-->
    <footer class="rodape">
        <div class="logorodape">
            <img class="fb" src="img/fb.svg" width="42px" alt="Facebook Logo">
            <img class="ig" src="img/ig.svg" width="60px" alt="Instagram Logo">
            <img class="booking" src="img/booking.svg" width="150px" alt="Booking Logo">
        </div>
        <div class="sobrerodape">
            <h1 class="sobrecontato"><strong>Sobre · Contato</strong></h1>

            <ul class="direitosautorais"> © <id class="trademark"> ElAlebrije </id>2022 Todos os direitos reservados
            </ul>
        </div>
        <div class="wpp">
            <img src="img/wpp.svg" alt="WhatsApp Logo" width="57px">
        </div>
    </footer>
    <!--Fim do rodapé-->
</body>

</html>

```

```js
    onclick="img();"
    
    Function (){}
      document.getElementById
   
```

```js

function img01 (){
    document.getElementById("trocarimg").src="trocaimg01.jpg";
}
function img02 (){
    document.getElementById("trocarimg").src="trocaimg02.jpg";
}
function img03 (){
    document.getElementById("trocarimg").src="trocaimg03.jpg";
}
function img04 (){
    document.getElementById("trocarimg").src="trocaimg04.jpg";
}
function img05 (){
    document.getElementById("trocarimg").src="trocaimg05.jpg";
}
function img06 (){
    document.getElementById("trocarimg").src="trocaimg06.jpg";
}
function img07 (){
    document.getElementById("trocarimg").src="trocaimg07.jpg";
}
function img08 (){
    document.getElementById("trocarimg").src="trocaimg08.jpg";
}
function img09 (){
    document.getElementById("trocarimg").src="trocaimg09.jpg";
}
function img10 (){
    document.getElementById("trocarimg").src="trocaimg10.jpg";
}
function img11 (){
    document.getElementById("trocarimg").src="trocaimg11.jpg";
}
function img12 (){
    document.getElementById("trocarimg").src="trocaimg12.jpg";
}  
```
### Instruções de acesso
Página para visualização das fotos;
http://127.0.0.1:5500/Index.html



## Fotos das Acomodações (RF-010) e (RF-019)
### Desenvolvedor(a): Geovanne Marco Correa da Silva
- Galeria de Imagens

![Sem título](https://user-images.githubusercontent.com/114536934/204182232-cf590530-ecbd-49df-a545-d92cbd9a6bcd.jpg)

### Requisito atendido:
- RF-08 - O site deverá conter uma imagem correspondente para as diferenças de acomodações e demais serviços prestados aos hóspedes.
- RF-014 - A interface gráfica deve ser de fácil entendimento e o usuário deve conseguir usar com facilidade;

### Artefatos da funcionalidade:
- header.html
- style.css

```css
.imgcamas {
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding-top: 60px;
    justify-content: center;
    align-items: center;
}

#img1 {
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.8;
}

#img1:hover {
    border-radius: 30px;
    transition: 0.5s;
    opacity: 1;
}

#img2 {
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.8;
}

#img2:hover {
    border-radius: 30px;
    transition: 0.5s;
    opacity: 1;
}

#img3 {
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.8;
}

#img3:hover {
    border-radius: 30px;
    transition: 0.5s;
    opacity: 1;
}

#img4 {
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.8;
}

#img4:hover {
    border-radius: 30px;
    transition: 0.5s;
    opacity: 1;
}

#img5 {
    border-radius: 20px;
    cursor: pointer;
    opacity: 0.8;
}

#img5:hover {
    border-radius: 30px;
    transition: 0.5s;
    opacity: 1;
}

/* - Inicio Zoom dinamico - */
.imgcamas img {
    position: relative;
    display: inline-block;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.9);
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.imgcamas img:hover {
    transform: scale(1.27, 1.25);
}

.imgcamas img:hover::after {
    opacity: 1;
}
/* - Fim do Zoom dinamico - */

```
### Instruções de acesso
Página para visualização das fotos das acomodações;
http://127.0.0.1:5501/index.html




### Instruções de acesso

O cliente deverá clicar nas imagens desejadas, assim, podendo vizualiza-las de forma ampliada e em sua qualidade máxima.

<!-- <span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm) -->
