# Template padrão do site

A elaboração do design e a disposição dos elementos baseou-se no modelo feito anteriormente no Figma.

![Template El Alebrije](https://user-images.githubusercontent.com/112135999/200971894-bc6ae238-369f-4bba-8d66-8b3ce5970a54.png)

```js

<!DOCTYPE html>
<html lang="pt-br">
 <head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link href="css/style.css" rel="stylesheet"/>
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
        <button class="btn-cad"style="font-size: 8px;"><b><a href=" " style="color:#9e2fba;">CADASTRAR</b></a></div>
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

<div class="footer">
    <div style="display: flex; margin-left: 1rem; align-items:
        center">
        <div class="fb">
        <a href="https://www.facebook.com/alebrijehostal/"
            target="_blank" rel="noopener">
            <img src="assets/fb.png" alt="facebook" />
        </a>
        </div>
        <div class="insta">
        <a
            href="https://instagram.com/alebrije_hostaal?igshid=YmMyMTA2M2Y="
            target="_blank" rel="noopener">
            <img src="assets/ig.png" alt="insta" />
        </a>
        </div>
        <div class="booking">
        <a
            href="https://www.booking.com/hotel/mx/hostal-el-alebrije.en-gb.html"
            target="_blank"
            rel="noopener">
            <img src="assets/boo.png" alt="bookin" />
        </a>
        </div>
        <div class="wpp">
        <a
        href="https://api.whatsapp.com/send?phone=5217223960938"
        target="_blank" rel="noopener">
        <img src="assets/wpp.png" alt="whatsapp" />
        </div>
    </a>
    </div>
    <span class="text-copyright">&#169<B>ElAlebrije</B>
    2022 - Todos os direitos
    reservados</span>
    <div className="footerSide">
    </div>
</div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"/>
 </body>
</html>
