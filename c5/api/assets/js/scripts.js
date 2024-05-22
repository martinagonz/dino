//funcion para obtener datos del usuario
function obtenerDatosUsuario(username){
  const url = `https://api.github.com/users/${username}`;

    //solicitud de tipo fetch, solicitd de tipo ajax
    fetch(url)
    .then(response=> response.json())
    .then(data =>{
        console.log(data);
   
//actualizar los contenidos html con los datos del usuario
document.getElementById('nombre').textContent= data.name;
document.getElementById('bio').textContent= data.bio;
document.getElementById('seguidores').textContent=data.followers;
document.getElementById('repositorios').textContent= data.public_repos;
})
.catch(error=>{
console.log('Error: ', error);
});
};
//nombre de tu github
obtenerDatosUsuario('martinagonz');