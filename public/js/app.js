//Declaracion de variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners()
{
    //Cuando agregas un nuevo curso presionando 'Agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);
    
    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () =>{

        articulosCarrito = [];
        limpiarHTML();
    } );
}

//Funciones
function agregarCurso(e)
{
    e.preventDefault();
    //'e.target.classList' -> Para mostrar la informacion en donde se presione un click
    //console.log(e.target);
    //console.log(e.target.classList);
    //Determinamos con la funcion contains a que elemento accedera el evento click de no cumplir con la condicion no se ejecuta el bloque siguiente
    if(e.target.classList.contains('agregar-carrito'))
    {
        //'parentElement.parentElement' -> accede al valor padre del elemento seleccionado
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e)
{
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso'))
    {
        const cursoID = e.target.getAttribute('data-id');

        //Elimina el elemento del carrito por id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID );

        carritoHTML();
    }
}

function leerDatosCurso(curso)
{
    //Arreglo de objetos para determinar cada valor seleccionado
    const infoCurso =
    {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Verificar que existe un elemento en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );

    if(existe)
    {
       //Actualizamos la cantidad
       const cursos = articulosCarrito.map(curso => {
        if(curso.id === infoCurso.id )
        {
            curso.cantidad++;
            return curso;//retorna el elemento del objeto actualizado

        }else{

            return curso;//retorna los elementos del objeto que nose duplican
        }

       } );

       articulosCarrito = [...cursos];

    }else{
        //Agregamos un nuevo curso
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras y genera en la parte superior el HTML 
function carritoHTML()
{
    //Limpiar HTML
    limpiarHTML();
    //Recorre el carrito y genera HTML
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const {imagen, titulo, precio, cantidad, id} = curso;
        row.innerHTML = `
                <td>
                    <img src="${imagen}" width="100">
                </td>
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>
                    <a href="#" class="borrar-curso" data-id="${id}"> X </a>
                </td>
        `;

         //Agregar el HTML del carrito a tbody
         contenedorCarrito.appendChild(row);
    })
}

//Elimina los cursos mostrados en tbody
function limpiarHTML()
{
    while(contenedorCarrito.firstChild)
    {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}