//que es una API? -- (Aplication progtamming interface)
// data--  json
//api no devuelve iformacion

//en js esiste una funciona la cual se ecmarga de poder hacer la peticion a una url
//FECTH()
//es una funcion  nativa
// existen vario tipos de peticiones
// GET = SIRVE PARA OBTENER INFO
//POST = SIRVE PARA CREAR DATOS
//PUT = SIRVE PARA ACTUALIZAR DATOS
//DELETE= SIRVE PARA ELIMIANR DATOS

//  funciotn async
//las funciones async fueron creadas para poder ejecutar algo-- ye en caso de la ejecucion de esto
//demore .. mas de lo normal se espera para luego respodner la peticion --

//https://api.github.com/users/guillermosifu
//hay un tiempo de espera , no sabemos cuanto dmorara - entonces usamo el async await..

//la estructura de una funciones fecth()

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#search').addEventListener('click',obtenerDatosGithub)
});

const obtenerDatosGithub = async (e) => {
  /**
   * La función se modificó para que pueda buscar de forma dinámica cualquier usuario
   * que exista en github
   */
  if(e) e.preventDefault();
  const valueToSearch = document.querySelector("#github-search").value
  if(valueToSearch){
    const response = await fetch(`https://api.github.com/users/${valueToSearch}`);
    const data = await response.json();
    if(data){
      console.log(data)
      document.querySelector('img[id="img-profile"]').src=data.avatar_url;
      document.querySelector('#github-name').textContent = data.login;
      document.querySelector('#github-username').textContent = `@${data.login}`;
      document.querySelector("#github-repos").textContent = data.public_repos;
      document.querySelector("#github-followers").textContent = data.followers;
      document.querySelector("#github-following").textContent=data.following;
      document.querySelector("#github-link").href=data.html_url;
      document.querySelector('#github-joined').textContent = getDate(data.created_at);


  }

};

}
const getDate=(date)=>{
  const aux= date.split('T')[0];
  const [year, month, day]= aux.split('-');
  return ` joined ${day}/${month}/${year}`

}