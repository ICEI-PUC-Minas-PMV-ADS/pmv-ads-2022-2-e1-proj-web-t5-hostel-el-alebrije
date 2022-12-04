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
  // if (provider) {
  document.getElementById("comentario").value = provider.comentario;
  // }
};

var items = [];

function guardarNumeros() {
  boxvalue = { comentario: document.getElementById("comentario").value };
  items.push(boxvalue);
  updateProvider(items);
  return false; // stop submission
}

saveModification.addEventListener("click", (e) => {
  e.preventDefault();
  guardarNumeros();
  alert("Dados salvos com sucesso!");
});
getInfoClient();
