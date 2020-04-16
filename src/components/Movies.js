import React from 'react'

import './movies.css'

import Fade from 'react-reveal/Fade';
const Movies = (props) => {
    // console.log(props);

    return (
        <Fade delay={100} duration={400}>
            <div className="moviesContainer">
                {props.data.map((movie, idx) => {
                    // check if image path is not null
                    let imagePath = ''
                    if (movie.poster_path) {
                        imagePath = movie.poster_path
                    } else if (movie.backdrop_path) {
                        imagePath = movie.backdrop_path
                    } else {
                        // console.log('Null photo found for movie:');
                        // console.log(movie);
                    }
                    let url = `${props.ImageURL}${props.ImageSize}${imagePath}`;
                    return (
                        <div key={idx} className="movieItem">
                            <div className="movieThumbnail" onClick={() => props.onClickThumbnail(movie)}
                                style={{ backgroundImage: `url(${url})` }}
                            ></div>
                            <div className="thumbnailText">
                                <p className="thumbnailTitle">{movie.title}</p>
                                <p className="thumbnailDescription">{movie.overview.slice(0, 70)} ...</p>
                            </div>
                        </div>
                    )
                })}
            </div >

        </Fade>
    )
}

export default Movies;