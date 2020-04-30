import React from 'react';
import Imagen from './Imagen'

const ListadoImagenes = ({ imagenes }) => {


    

    return (


        <div class="card-columns">

            {imagenes.map(imagen => (
                <Imagen key={imagen.id} imagen={imagen}></Imagen>

            ))}
        </div>


    );
}

export default ListadoImagenes;