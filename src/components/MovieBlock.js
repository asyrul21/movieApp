import React from 'react'
import Fade from 'react-reveal/Fade';

import './movieBlock.css'
const MovieBlock = (props) => {
    let url = `${props.ImageURL}${props.ImageSize}${props.movie.poster_path}`;
    console.log(url);

    return (
        <Fade duration={300}>
            <div className="blockBackground"></div>
            <div className="selectedMovieBlock">
                <div className="blockHeader"><div className="closeBtn" onClick={() => props.handleClick()}></div></div>
                <div className="blockBody">
                    <div className="blockPhoto" style={{ backgroundImage: `url(${url})` }}></div>
                    <div className={props.movie.overview.length > 500 ? "blockText scroll" : "blockText"}>
                        <h3 className="blockTitle">{props.movie.title}</h3>
                        <div className="blockSubTitle">
                            <p className="subTitle">Voters' average: {props.movie.vote_average}</p>
                            <p className="subTitle">Release date: {props.movie.release_date}</p>
                        </div>
                        <p className="blockParagraph">{props.movie.overview}</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default MovieBlock;