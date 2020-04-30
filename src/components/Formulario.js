import React, { useState, Fragment } from 'react';
import Error from './Error';

const Formulario = ({guardarBusqueda, guardarPaginaActual}) => {

    const [termino, guardarTermino] = useState("");
    const [error, guardarError] = useState(false);


    const buscarImagenes = e => {
        
        e.preventDefault();

        //validar
        if(termino === ""){
            guardarError(true);
            return;
        }
        guardarError(false)
        //enviar termino
        guardarBusqueda(termino)
        guardarPaginaActual(1)
    }


    return (  
        <Fragment>
        <form onSubmit={buscarImagenes}>
            <div className="row">
                    <div className="form-group col-md-8">
                        <input className="form-control" 
                        placeholder="Busca una imagen, ejemplo: programación "
                        value={termino}
                        onChange={e => guardarTermino(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-danger btn-block ">Buscar</button>
                    </div>
            </div>
        </form>
        {error ? <Error mensaje="Debe ingresar un termino"></Error> :  null}
        </Fragment>
    );
}
 
export default Formulario;