import React from 'react';

const Imagen = ({ imagen }) => {

    const { largeImageURL, likes, previewURL, tags, views } = imagen;

    return (
        <div class="card">
            <img src={previewURL} class="card-img-top" alt={tags}></img>
            <div class="card-body">
                <span class="badge badge-info mr-2">{likes} likes</span>
                
                <span class="badge badge-info">{views} visitas</span>
                <a href={largeImageURL} class="btn btn-danger btn-block btn-sm mt-2">Ver imagen completa</a>
            </div>
        </div>
    );
}

export default Imagen;