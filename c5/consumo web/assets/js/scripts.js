function cargarDatos(){
    //realizar la solicitud al servicio utilizando fetch
    fetch('././data/datos.xml')
    .then(response=> response.text())
    .then(data=>{
        //parsear el xml recibido
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        //obtener los archivos del usuario xml
        const usuarios = xmlDoc.getElementsByTagName('usuario');
        const tablaBody = document.querySelector('tablaUsuarios tbody');
        //limpiar el contenido de la tabla anterior
        tablaBody.innerHTML="";
        //recorrer los usuarios y crear las filas de verdad 
        for(let i = 0; i < usuarios.length; i++){
            const usuario = usuarios[i];
            //obtener los datos de usuario
            const id = usuario.getElementsByTagName('id')[0].textContent;
            const nombre = usuario.getElementsByTagName('nombre')[0].textContent;
            const email = usuario.getElementsByTagName('email')[0].textContent;
            //crear fila en la tabla 
            const fila = document.createElement('tr');
            fila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${email}</td>
            `;
            tablaBody.appendChild(fila);
        }
    })
    .catch(error=> {
        console.error('Error al cargar los datos', error)
    });
};
//asignar el evento click al boton cargar datos
document.querySelector('#btncargar').addEventListener('click', cargarDatos);