import React from 'react'
import Caraousel from '../Layout/Caraousel/Caraousel';
import Login from '../Layout/Login/Login';
import MetaData from '../Layout/MetaData';
import MovieCard from '../Layout/MovieCard/MovieCard';
import Navbar from '../Layout/Navbar/Navbar';
import VideoCard from '../Layout/VideoCard/VideoCard';
import './Home.css';

const Home = () => {



  return (
    <>
      <MetaData title="Hotstar" />
      <Login />
      <Navbar />
      <Caraousel />
      <VideoCard />
      <MovieCard />
      
    </>
  )
}

export default Home