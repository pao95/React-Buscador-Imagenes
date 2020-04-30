import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';


function App() {

  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  //paginacion
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {


    const consultarApi = async () => {
      if (busqueda === "") return;
      const imagenesPorPagina = 30;
      const key = "16284323-b7f4fae328ca088bd13f7fb04"
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`

      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      guardarImagenes(resultado.hits)

      //calcular paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas)

      //mover la pantalla arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }

    consultarApi()


  }, [busqueda,paginaActual])

  //pagina anterior

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual)
  }

  //pagina siguiente

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if (nuevaPaginaActual > totalPaginas) return;
    guardarPaginaActual(nuevaPaginaActual)
  }

  return (

    <Fragment>
      <div className="jumbotron">
        <p className="lead text-center" >Buscador de Imagenes</p>
        <Formulario guardarBusqueda={guardarBusqueda} guardarPaginaActual={guardarPaginaActual}></Formulario>
      </div>
      <div className="container">
        <div>
          <ListadoImagenes imagenes={imagenes}></ListadoImagenes>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">

              {(paginaActual === 1) ? null : <li class="page-item">
                <button onClick={paginaAnterior} type="button" class="btn btn-danger">Anterior
                </button></li>
              }
              {(paginaActual === totalPaginas) ? null : <li class="page-item">
                <button onClick={paginaSiguiente} type="button" class="btn btn-danger">Siguiente
                </button></li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
