# Programação de Funcionalidades
## Home (RF-011) e (RF-017)
### Desenvolvedor(a): Danrley G M Paula 
- Funcionalidade tradução e links redes sociais 

![home](https://user-images.githubusercontent.com/112135999/200984935-d7532889-49d1-40b2-8b6c-41685c853fdf.png)

### Requisito atendido:
- RF-011 - O sistema será traslado em três línguas: português, espanhol e inglês
- RF-017 - O site deverá apresentar links redirecionando às outras redes da empresa, como: Instagram, Youtube, Facebook e afins

### Artefatos da funcionalidade:
- /assets
- /img
- header.html
- style.css
- homehostel.html

```js
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
        <button class="btn-enter" style="font-size: 20px;"><b><a href=" " style="color:#ffffff;;">ENTRAR</b></a></div>
        <button class="btn-cad"style="font-size: 12px;"><b><a href=" " style="color:#ffffff;">CADASTRAR</b></a></div>
        <button class="btn-res"style="font-size: 20px;"><a href=" " style="color:#f1f1f1;">Reserve&nbsp;agora </a></div>
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

<div class="translate">
    <a href=""><img src="assets/Br.jpg"/></a>
</div>

<div class="translate1">
    <a href=""><img src="assets/esp.png"/></a>
</div>

<div class="translate2">
    <a href=""><img src="assets/us.png"/></a>
</div>

<div class="social-media">
    <a href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener"><img src="assets/insta.png"/></a>
    <a href="https://api.whatsapp.com/send?phone=5217223960938" target="_blank" rel="noopener"><img src="assets/facebook.png"/></a>
    <a href="https://www.facebook.com/alebrijehostal/" target="_blank" rel="noopener"><img src="assets/wpp.png"/></a>
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

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"/>
 </body>
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
### Instruções de acesso

No uso da reservas o hóspede deve inserir o número de pessoas que desejam se hospedar no hostel, o início e fim da estadia no hotel. Além de ter a disponibilidade de cancelamento das reservas.
http://127.0.0.1:5502/ReservasHostel.html


## Login (RF-015)
### Desenvolvedor(a): Saory Nayara Vieira Nakabori
- Tela de Login ao site

![image](https://user-images.githubusercontent.com/97962041/200976344-2e26a68f-d97b-4ae0-bb9d-365d55b8a4bb.png)

### Requisito atendido:
- RF-015 - 	O cadastro de novos usuários, será validado através de um e-mail de confirmação;

### Artefatos da funcionalidade:
- /assets
- index.html
- style.css
- script.js

```js
    <!DOCTYPE html>
<html lang="pt-br">
 <head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link href="style.css" rel="stylesheet"/>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 <title>Hostal El Alebrije</title>
<style>
    
body{
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
        </div><!--center-->
    <div class="hostal">
        <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
    </div><!--hostal-->
    <div class="menu-container">
        <a href="">SOBRE</a>
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
    <div class="container-login">
        <div class="wrap-login">
            <form class="login-form">
                <span class="login-form-title">
                 Entrar 
                </span>

                <div class="wrap-input margin-top-50 margin-bottom-35">
                    <input class="input-form" type="email" name="email" autocomplete="off"/>
                    <span class="focus-input-form" data-placeholder="E-mail"></span>
                </div>

                <div class="wrap-input margin-bottom-35">
                    <input class="input-form" type="password" name="password"/>
                    <span class="focus-input-form" data-placeholder="Senha"></span>
                </div>

                <div class="container-login-form-btn">
                    <button class="login-form-btn">Continuar</button>
                </div>

                <ul class="login-utils">
                  <li class="margin-top-8 margin-bottom-8">
                    <span class="text1">
                        Esqueceu sua
                    </span>
                    <a href="#" class="text2">
                        senha?
                    </a>
                  </li> 
                  <li>
                    <span class="text1">
                        Não tem uma conta?
                    </span>
                    <a href="#" class="text2">
                        Cadastre-se
                    </a>
                  </li> 
                </ul>
            </form>
        </div>
    </div>
</div>
<script>
    let inputs = document.getElementsByClassName('input-form');
    for (let input of inputs) {
        input.addEventListener("blur", function() {
            if(input.value.trim() != ""){
                input.classList.add("has-val");
            } else {
                input.classList.remove("has-val");
            }
        });
    }
</script>
</body>
</html>

<div class="footer">
    <div style="display: flex; margin-left: 1rem; align-items:
        center">
        <a href="https://www.facebook.com/alebrijehostal/"
            target="_blank" rel="noopener">
            <img src="assets/fb.svg" alt="facebook" />
        </a>
        <a
            href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
            target="_blank" rel="noopener">
            <img src="assets/insta.svg" alt="insta" />
        </a>
        <a
            href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
            target="_blank"
            rel="noopener">
            <img src="assets/booking.svg" alt="bookin" />
        </a>
    </div>
    <span class="text-copyright">&#169 ElAlebrije <span
            id="ano">2022</span> - Todos os direitos
        reservados</span>
    <div className="footerSide">
        <a
            href="https://api.whatsapp.com/send?phone=5217223960938"
            target="_blank" rel="noopener">
            <img src="assets/wpp.svg" alt="whatsapp" />
        </a>
    </div>
</div>

</body>
</html>
    
```

### Instruções de acesso

Login de acesso a aba reservas. 
http://127.0.0.1:5502/index.html


## Criar um Usuário (RNF-08)
### Desenvolvedor(a): Saory Nayara Vieira Nakabori
- Tela de criar um usuário

![image](https://user-images.githubusercontent.com/97962041/200977648-c3393853-0557-4bdc-a70a-72f48686a4c7.png)

### Requisito atendido:
- RNF-08 - 	O site deve possuir senhas de acesso e identificação para diferentes tipos de usuários: administrador do sistema, funcionários do hostel e clientes que têm acesso ao sistema no hostel;

### Artefatos da funcionalidade:
- /assets
- index.html
- style.css
- script.js

```js
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;900&display=swap"
      rel="stylesheet"
    />
    <title>Formulário Criar uma Conta</title>
  </head>
  <style>
    
    body{
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
            </div><!--center-->
        <div class="hostal">
            <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
        </div><!--hostal-->
        <div class="menu-container">
            <a href="">SOBRE</a>
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

  <body>
    <div class="container">
      <div class="header">
        <h2>Criar uma conta</h2>
      </div>
      <form id="form" class="form">
        <div class="form-control">
          <label for="username">Nome Completo</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu nome de usuário ... " />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mesagem de erro</small>
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="Digite seu email ... " />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mesagem de erro</small>
        </div>
        <div class="form-control">
          <label for="password">Senha</label>
          <input
            type="text"
            id="password"
            placeholder="Digite sua senha ... "
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mesagem de erro</small>
        </div>
        <div class="form-control">
          <label for="password-confirmation">Confirmação de Senha</label>
          <input
            type="text"
            id="password-confirmation"
            placeholder="Digite a senha novamente ... "
          />
          <i class="fas fa-exclamation-circle"></i>
          <i class="fas fa-check-circle"></i>
          <small>Mesagem de erro</small>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
    <script
      src="https://kit.fontawesome.com/1df97e9d1a.js"
      crossorigin="anonymous"
    ></script>
    <script src="./script.js"></script>
    <ul class="login-utils">
      <li class="margin-top-8 margin-bottom-8">
        <span class="text1">
            Já tem uma conta?
        </span>
        <a href="#" class="text2">
            Fazer Login
        </a>
      </li>

    <div class="footer">
      <div style="display: flex; margin-left: 1rem; align-items:
          center">
          <a href="https://www.facebook.com/alebrijehostal/"
              target="_blank" rel="noopener">
              <img src="assets/fb.svg" alt="facebook" />
          </a>
          <a
              href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
              target="_blank" rel="noopener">
              <img src="assets/insta.svg" alt="insta" />
          </a>
          <a
              href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
              target="_blank"
              rel="noopener">
              <img src="assets/booking.svg" alt="bookin" />
          </a>
      </div>
      <span class="text-copyright">&#169 ElAlebrije <span
              id="ano">2022</span> - Todos os direitos
          reservados</span>
      <div className="footerSide">
          <a
              href="https://api.whatsapp.com/send?phone=5217223960938"
              target="_blank" rel="noopener">
              <img src="assets/wpp.svg" alt="whatsapp" />
          </a>
      </div>
  </div>
  </body>
</html>
```

### Instruções de acesso

Criar um conta para realizar as reservas 
http://127.0.0.1:5500/index.html


## Avaliações (RF-20)
### Desenvolvedor(a): Saory Nayara Vieira Nakabori
- Tela de avaliações

![image](https://user-images.githubusercontent.com/97962041/200978294-a752c5d7-e52a-4e01-969b-f8450657feb4.png)

### Requisito atendido:
- RF-20 - 	O sistema deve permitir uma aba para “Reclamações e Denúncias Anônimas”, para casos de preconceitos raciais ou demais crimes e situações adversas, ocorridas durante a hospedagem;

### Artefatos da funcionalidade:
- /assets
- index.html
- style.css
- script.js

```js
    <!DOCTYPE html>
<html lang="pt-br">
 <head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link href="style.css" rel="stylesheet"/>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
 <title>Hostal El Alebrije</title>
<style>
    
body{
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
        </div><!--center-->
    <div class="hostal">
        <h3 style="font-size: 14px;"><i>&nbsp;&nbsp; Hostal<p><b>El Alebrije</b></i></h3></p>
    </div><!--hostal-->
    <div class="menu-container">
        <a href="">SOBRE</a>
        <a href="">FOTOS</a>
        <a href="">ACOMODAÇÕES</a>
        <a href="">LOCALIZAÇÃO</a>
        <a class="active-menu" href="">AVALIÇÕES</a>
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
<!--fim do header-->  

<!--inicio do quadro cinza-->  
<body>
    <div class="all" >
      <aside>
        <ul class="list-group-teste">
          <li class="list-group-item-dados-pessoais" >
            <img src="assets/dados-pessoais.svg" alt="">
            Dados pessoais
          </li>
          <li class="list-group-item-reservas">
            <img src="assets/reservas.svg" alt="">
            Reservas
          </li>
          <li class="list-group-item-avaliacoes">
            <img src="assets/avaliacoes.svg" alt="">
            Avaliações
          </li>
          <li class="list-group-item-reclamacoes">
            <img src="assets/reclamacoes.svg" alt="">
            Reclamações(Anônimas)
          </li>
          <li class="list-group-item-dados-pagamento">
            <img src="assets/dados-pagamento.svg" alt="">
            Dados de pagamentos
          </li>
          <li class="list-group-item-seguranca">
            <img src="assets/seguranca.svg" alt="">
            Segurança
          </li>
        </ul>
      </aside>
<!--fim do quadro cinza-->  

<!--formulario-->  
<div class="formulario">
    <h1 id="titulo-avaliacoes"><strong>Avaliações</strong></h1>
    <p id="subtitulo-avaliacoes">Escreva abaixo o seu comentário</p>
</div>

<form id="form-avaliacao">
        <fieldset class="grupo">
            <div class="campo">
                <br>
                <label for="comentario"><strong>Comentário</strong></label>
                <textarea row="20" style="width:800px; height: 200PX;" id="comentario" name="comentario"></textarea>
            </div>
        </fieldset>

        <button class="botão-publicar" type="submit"><strong>Publicar</strong></button>
</form>

<!--formulario-->     


<!--inicio do footer-->  
<div class="footer">
    <div style="display: flex; margin-left: 1rem; align-items:
        center">
        <a href="https://www.facebook.com/alebrijehostal/"
            target="_blank" rel="noopener">
            <img src="assets/fb.svg" alt="facebook" />
        </a>
        <a
            href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
            target="_blank" rel="noopener">
            <img src="assets/insta.svg" alt="insta" />
        </a>
        <a
            href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
            target="_blank"
            rel="noopener">
            <img src="assets/booking.svg" alt="bookin" />
        </a>
    </div>
    <span class="text-copyright">&#169 ElAlebrije <span
            id="ano">2022</span> - Todos os direitos
        reservados</span>
    <div className="footerSide">
        <a
            href="https://api.whatsapp.com/send?phone=5217223960938"
            target="_blank" rel="noopener">
            <img src="assets/wpp.svg" alt="whatsapp" />
        </a>
    </div>
</div>

</body>
</html>
```

### Instruções de acesso
Página para digitar as avaliações sobre o hotel.
http://127.0.0.1:5501/index.html


## Avaliações - O que os hóspedes dizem (RF-06)
### Desenvolvedor(a): Fernanda Marques Assis
- Avaliações - O que os hóspedes dizem

![image](https://user-images.githubusercontent.com/97962041/200979268-8271ec0f-be29-4a28-a59a-0b9dff69db08.png)

### Requisito atendido:
- RF-06 - 	O sistema deve possuir uma área de feedback e dicas de antigos hóspedes para orientação de estrangeiros, a fim de que o hóspede saiba o que vale a pena investir ou não e tenha uma boa estadia.

### Artefatos da funcionalidade:
- avaliacao.html
- avaliacao.png
- assets

```js
    <!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Avaliações</title>
        <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous">
        <link rel="stylesheet"
            href="path/to/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css"
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu"
            crossorigin="anonymous" />
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
                    <h3>AVALIAÇÕES</h3>
                    <hr class="line-localization" />

                    <div style="font-size: 20px; font-weight: normal;
                        margin-top:
                        6rem">O QUE <span style="color: #9E2FBA; font-size:
                            20px;">NOSSOS
                            HÓSPEDES</span> DIZEM</div>
                </div>
                <div id="demo" class="row"></div>
                <div class="col-md-12" style="display: flex; justify-content:
                    center; margin-top: 1.5rem; width: 250px;">
                    <div class="comentario ">
                        <img class="image-comment"
                            src="./assets/img/mais-informacoes.svg" />
                        <span class="comment">Deixe um comentário</span>
                    </div>
                </div>
                <div class="footer">
                    <div style="display: flex; margin-left: 1rem; align-items:
                        center">
                        <a href="https://www.facebook.com/alebrijehostal/"
                            target="_blank" rel="noopener">
                            <img class="footer-img" src="./assets/img/fb.svg" alt="facebook" />
                        </a>
                        <a
                            href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
                            target="_blank" rel="noopener">
                            <img class="footer-img" src="./assets/img/insta.svg" alt="insta" />
                        </a>
                        <a
                            href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
                            target="_blank"
                            rel="noopener">
                            <img class="footer-img" src="./assets/img/booking.svg" alt="bookin" />
                        </a>
                    </div>
                    <span class="text-copyright">&#169 ElAlebrije <span
                            id="ano">2022</span> - Todos os direitos
                        reservados</span>
                    <div className="footerSide">
                        <a
                            href="https://api.whatsapp.com/send?phone=5217223960938"
                            target="_blank" rel="noopener">
                            <img class="footer-img" src="./assets/img/wpp.svg" alt="whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <script>
        const data = [
            {
                avaliacao: 'Lugar legal, muito colorido, pequeno mas agradável, bom atendimento e simpático, boa localização, só não tem estacionamento, mas tem um perto.',
                user: 'Jose Roberto Astivia'
            },
            {
                avaliacao: 'Lugar fantástico. A vista do terraço, a atenção do anfitrião, o conforto e o café da manhã tão gostoso alegrou-me as boas-vindas ao Vale de Bravo dia a dia. Obrigado Carlitos!!!',
                user: 'Edgar Andrés Rincón Méndez'
            },
            {
                avaliacao: '100% recomendado! Ótimo lugar para visitar Vale de Bravo, quente, confortável, seguro e tratamento cordial. Sempre atento aos hóspedes. Além disso, ótima localização e vista para o lago. Obrigado pelo excelente serviço.',
                user: 'Emi Victoria'
            },
            {
                avaliacao: 'excelente atendimento muito boa atitude de tudo depende do pessoal que trabalha aqui e as instalações são muito limpas e seguras tudo muito confortável tem um terraço muito agradável tem uma cozinha muito bonita e as camas são muito confortáveis tem rede está padrinho e econômico',
                user: 'Rai Galicia'
            },
            {
                avaliacao: 'o hostel tem tudo 🤟🏻 boa localização!! E limpeza! em general Valle de Bravo é muito seguro e este lugar é o melhor se procura visitar!!! É um 10✋ 🤚 Carlos, Lalo e David uns tipazosss!!!!!',
                user: 'Jorge Segovia Sanchz'
            },
            {
                avaliacao: 'Ótima localização, o centro fica bem próximo e além disso os preços são baratos.',
                user: 'Pily Guerrero'
            },
            {
                avaliacao: 'Ótimo lugar, atendimento e relação qualidade/preço, incrível. ',
                user: 'Jos López'
            },
            {
                avaliacao: 'Foi a primeira vez que viajava sozinha, e a primeira vez que ficava num albergue! Não sabia o que esperar, e realmente fiquei fascinada com a experiência!! O lugar é super seguro; central; muito limpo e confortável!! Como se isso não bastasse tem um terraço com uma bela vista para o cais... Su prepara café da manhã super gostoso!!!! E Fer tira fotos incríveis!! Se vão não hesitem em pedir-lhe umas fotos de verdade uau é o melhor a tirar fotos!!! E todos os outros me fizeram sentir em casa, se não conheces Valle ntp eles se encarregam de te ensinar ou acompanhar! E às tardes você pode ir para o terraço jogar jogos de tabuleiro, conversar ou tomar uma cervejinha, eu certamente irei de novo!!! E eu recomendo 1000% obrigado a todos por tornarem minha estadia inesquecível!! Eu voltarei!',
                user: 'Sarahi Constantino'
            }
        ];

        document.getElementById('demo').innerHTML = data.map(user =>
            `
                <div style="max-width: 450px; height: auto; text-align: justify; margin-top: 4rem; margin-left: 5rem">
                    <div class="col-md-12" style="width: 100%; border: 1px solid #C6C6C6; padding: 1.5rem; margin-right: 5rem; border-radius: 8px;box-shadow:0px 5px 10px rgba(0, 0, 0, 0.1)">
                        <div style="font-style: italic">${user.avaliacao}</div>
                        <div style="margin-top: 0.9rem">${user.user}</div>
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
Página para visualizar as avaliações dos clientes sobre o hotel.
http://127.0.0.1:5500/Avaliacao.html


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


## Localizações (RF-03)
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
http://127.0.0.1:5500/pmv-ads-2022-2-e1-proj-web-t5-hostel-el-alebrije/index.html


## Reservas (RF-010) e (RF-019)
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

```js
    Function (){}
      document.getElementById
   
```

```js
// function img01 (){
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

O cliende deverá clicar nas imagens desejadas, assim, podendo vizualiza-las de forma ampliada e em sua qualidade máxima.

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
