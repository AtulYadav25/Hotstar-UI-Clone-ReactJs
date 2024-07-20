import React from 'react'
import './Navbar.css'
import { HotstarLogo,kidsLogo } from '../../../Assets/ImagesIndex';
import { Link } from 'react-router-dom';


const Navbar = () => {

  
  const handleOpenLogin = () => {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.classList.toggle('displayNone')
  }


  return (
    <>
      <div className="navbar">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={HotstarLogo} alt="brand-logo" className='hotstarLogo' />
        <ul className='nav-links-ul'>
          <li className='nav-link-li'>
            <a href="/">TV</a>
            <br />
            <br />
            <ul className='dropdown'>
              <li>Mood Mix</li>
              <li>Other Shows</li>
              <li>Hotstar Specials</li>
              <li>Quix</li>
              <li>StarPlus</li>
              <li>Star Vijay</li>
              <li>Star Jalsha</li>
              <li>Star Bharat</li>
              <li>more...</li>
            </ul>
          </li>
          <li className='nav-link-li'>
            <a href="/">Movies</a>
            <ul className='dropdown'>
              <li>Odia</li>
              <li>Hindi</li>
              <li>Telugu</li>
              <li>Bengali</li>
              <li>Malayalam</li>
              <li>Tamil</li>
              <li>Marathi</li>
              <li>English</li>
              <li>Kannada</li>
              <li>Korean</li>
              <li>Japanese</li>
            </ul>
          </li>
          <li className='nav-link-li'>
            <a href="/">Sports</a>
            <ul className='dropdown'>
              <li>Cricket</li>
              <li>Football</li>
              <li>Hockey</li>
              <li>Kabbadi</li>
              <li>Martial Arts</li>
              <li>American Football</li>
              <li>Tennis</li>
              <li>Khelo India</li>
              <li>Formula E</li>
              <li>Athletics</li>
            </ul>
          </li>
          <li className='nav-link-li'>
            <a href="/">Disney+</a>
          </li>
          <img src={kidsLogo} alt="Kids" className='kids-nav'/>
        </ul>
        <div className="nav-right">
          <div className="nav-input">
            <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
            <input type="text" className='searchBox' placeholder='Search' />
          </div>
          <Link to='/subscribe' className='sub-btn'>subscribe</Link>
          <p className='login-link' onClick={handleOpenLogin}>Login</p>
        </div>
      </div>
    </>
  )
}

export default Navbar