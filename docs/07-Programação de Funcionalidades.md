# Programação de Funcionalidades

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
