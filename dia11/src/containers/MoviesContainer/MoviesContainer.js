import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';

export const MoviesContainer = () => {
    return (
        <div>
            <h1>Contenedor de películas</h1>
            <section>
                <div className="row">
                    <MovieCard
                        image="https://es.web.img3.acsta.net/c_215_290/pictures/19/11/12/12/25/0815514.jpg"
                        title="Sonic la pelicula"
                        description="loremloremlorem"
                        director="Desconocido"
                        theme="Acción"
                    />
                </div>
            </section>
        </div>
    )
}

