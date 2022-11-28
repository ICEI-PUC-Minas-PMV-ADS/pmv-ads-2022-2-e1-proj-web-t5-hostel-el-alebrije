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
