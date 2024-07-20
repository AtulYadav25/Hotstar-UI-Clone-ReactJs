import React from 'react'

const MovieDiv = (props) => {
    return (
        <div className="movie-card-container" key={props.data.img}>
            <img src={props.data.img} alt="Movie Img" className='movie-card-img' />
            <div className="m-card-body">
                <h2 className='movie-name'>{props.data.name}</h2>
                <h5 className='movie-tags'>{props.data.tags.map((tag, i) => {
                    if (i >= 2) {
                        return null
                    }
                    if (i === props.data.tags.length - 1) {
                        return `${tag}`
                    } else {
                        return `${tag},`
                    }
                })}</h5>
                <h6 className='movie-desc'>{props.data.Description.length <= 38 ? props.data.Description : `${props.data.Description.substr(0, 46)}...`}</h6>
                {
                props.inWatchList? 
                <button className='m-watch-list-btn' onClick={props.rmFromWatchList}><i className="fa-solid fa-check"></i> Added to Watchlist</button> : <button className='m-watch-list-btn' onClick={props.addToWatchList}>+ Add to Watchlist</button>
                }
            </div>
        </div>
    )
}

export default MovieDiv