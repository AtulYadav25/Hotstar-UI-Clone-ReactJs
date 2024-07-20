import React, { useState } from 'react'
import './MovieCard.css';
import Slider from "react-slick";
import Data from '../../Home/Data/MovieList.json'
import MovieDiv from './MovieDiv';
import { useRef } from 'react';

const MovieCard = ({ props }) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 6,
    };


    const HotstarSpecials = [];
    for (let i = 0; i < Data.cards.length; i++) {
        if (Data.cards[i].tags.includes('Hotstar Specials')) {
            HotstarSpecials.push(Data.cards[i])
        }
    }


    const actionMovies = [];
    for (let i = 0; i < Data.cards.length; i++) {
        if (Data.cards[i].tags.includes('Action') || Data.cards[i].tags.includes('Drama')) {
            actionMovies.push(Data.cards[i])
        }
    }

    const alertContainer = useRef()

    const [watchList, setWatchList] = useState([]);

    const updateWatchList = (movieObject) => {
        console.log("Working");
        if (watchList.includes(movieObject)) {
            throwAlert("Already Exist in Watch List")
            return
        }
        setWatchList([...watchList, movieObject]);
        throwAlert("Added to Watch List")
    }

    const removeFromWatchList = (movieObject) => {
        setWatchList(watchList.filter(item => item.img !== movieObject.img));
        throwAlert("Removed From Watch List")

    }

    const throwAlert = (message) => {
        alertContainer.current.innerHTML = '';
        let div = document.createElement('div');
        let p = document.createElement('p');
        let span = document.createElement('span');
        div.classList.add('hotstar-alert');
        p.innerText = message;
        p.append(span);
        div.append(p);
        alertContainer.current.append(div);
    }



    return (
        <>
            {watchList.length === 0 ? <></> :
                <>
                    <h1 className='movie-list-title'>Your Watch List</h1>
                    {watchList.length >= 8 ?
                        <Slider className='movie-list watchList-cards' {...settings} arrows={false}>
                            {watchList.map((data) => {
                                return <MovieDiv data={data} key={data.img} inWatchList={true}
                                    rmFromWatchList={() => {
                                        removeFromWatchList(data)
                                    }} />
                            })}
                        </Slider> :
                        <div className='movie-list watchList-cards' >
                            {watchList.map((data) => {
                                return <MovieDiv data={data} key={data.img} inWatchList={true}
                                    rmFromWatchList={() => {
                                        removeFromWatchList(data)
                                    }} />
                            })}
                        </div>}
                </>
            }

            <h1 className='movie-list-title'>Recommended For You</h1>

            <Slider className='movie-list' {...settings} arrows={false}>
                {Data.cards.map((data, i) => {
                    if (i >= 16) {
                        return null
                    }
                    return <MovieDiv data={data} key={data.img} addToWatchList={() => {
                        updateWatchList(data)
                    }} />
                })}
            </Slider>
            <h1 className="movie-list-title">Hotstar Specials</h1>

            <Slider className='movie-list' {...settings} arrows={false}>
                {HotstarSpecials.map((data) => {
                    return <MovieDiv data={data} key={data.img} addToWatchList={() => {
                        updateWatchList(data)
                    }} />
                })}
            </Slider>

            <h1 className="movie-list-title">Popular in Action & Drama</h1>

            <Slider className='movie-list' {...settings} arrows={false}>
                {actionMovies.map((data) => {
                    return <MovieDiv data={data} key={data.img} addToWatchList={() => {
                        updateWatchList(data)
                    }} />
                })}
            </Slider>

            <div ref={alertContainer} className="alertContainer">
            </div>
        </>
    )
}

export default MovieCard