# Plano de Testes de Software

A seguir são descritos os testes funcionais a serem executados: 

| Caso de Teste | CT-01 - Validação dos Campos do Formulário |
|---------------|--------------------------|
| Requisitos Associados | RFN-16 - Os usuários devem ser ajudados adequadamente a preencher os campos obrigatórios, em caso de entrada inválida;|
| Objetivo do Teste | Validar os campos do formulário |
| Passos |1) Acessar o Navegador
| Passos |2) Informar o endereço do Site
| Passos |3) Visualizar a página principal
| Passos |4) Digitar senha, e-mails e nome de usuários inválidos
| Passos |5) Clicar em enviar e ver ser o formulário rejeita os dados inválidos|
| Critérios de Êxito | O site deve rejeitar senha, e-mails e nome de usuários inválidos |
 

| Caso de Teste | CT-02 - Teste de Armazenamento do LocalStorage |
|---------------|--------------------------|
| Requisitos Associados | RNF-7 - O sistema deve ter capacidade para recuperar os dados perdidos da última operação que realizou em caso de falha;|
| Objetivo do Teste | Teste de Armazenamento do LocalStorage |
| Passos |1) Acessar o Navegador
| Passos |2) Informar o endereço do Site
| Passos |3) Visualizar a página principal
| Passos |4) Preencher todos os campos do formulário
| Passos |5) Clicar em enviar
| Passos |6) Clicar como o botão direito na aba "Inspecionar do Google Chrome e ver se os dados estão salvos dentro do localStorage|
| Critérios de Êxito | O site deve permitir salvar todos os dados dos formulários dentro do localStorage|


| Caso de Teste | CT-03 - Teste do API do Google |
|---------------|--------------------------|
| Requisitos Associados | RFN-17- No sistema será utilizado uma API gratuita para localização;|
| Objetivo do Teste | Teste do Funcionamento das API |
| Passos |1) Acessar o Navegador
| Passos |2) Informar o endereço do Site
| Passos |3) Visualizar a página principal
| Passos |4) Testar se é possível fazer a visualização da localização do Hostel pelo mapa da página, utilizando a API do Google|
| Critérios de Êxito | O site deve permitir a visualização da localização do Hostel pelo mapa da página, utilizando a API do Google|


| Caso de Teste | CT-04 - Teste do Link entre as Páginas |
|---------------|--------------------------|
| Requisitos Associados | RNF-06 - O site deve responder a consultas online em menos de 5 segundos;|
| Objetivo do Teste | Teste do Link entre as Páginas |
| Passos |1) Acessar o Navegador
| Passos |2) Informar o endereço do Site
| Passos |3) Visualizar a página principal
| Passos |4) Clicar numa funcionalidade e já ser direcionado para a página correspondente|
| Critérios de Êxito | O site deve permitir o direcionamento de uma página para a outra|









 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
