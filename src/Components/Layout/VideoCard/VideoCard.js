import React from 'react';
import './VideoCard.css'
import {disneyImg,pixarImg,geographicImg,starWarsImg,marvelImg} from '../../../Assets/ImagesIndex'
import {disneyVid,pixarVid,geographicVid,starWarsVid,marvelVid} from '../../../Assets/VideoIndex'

const VideoCard = () => {
  return (
    <>
        <div className="video-card-container">
            <div className="video-card">
                <img src={disneyImg} alt="Disney" className='video-card-img'/>
                <video src={disneyVid} autoPlay loop muted className='card-video'></video>
            </div>
            <div className="video-card">
                <img src={pixarImg} alt="Disney" className='video-card-img'/>
                <video src={pixarVid} autoPlay loop muted className='card-video'></video>
            </div>
            <div className="video-card">
                <img src={geographicImg} alt="Disney" className='video-card-img'/>
                <video src={geographicVid} autoPlay loop muted className='card-video'></video>
            </div>
            <div className="video-card">
                <img src={starWarsImg} alt="Disney" className='video-card-img'/>
                <video src={starWarsVid} autoPlay loop muted className='card-video'></video>
            </div>
            <div className="video-card">
                <img src={marvelImg} alt="Disney" className='video-card-img'/>
                <video src={marvelVid} autoPlay loop muted className='card-video'></video>
            </div>
        </div>
    </>
  )
}

export default VideoCard