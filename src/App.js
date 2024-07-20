import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Home from './Components/Home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Layout/Footer/Footer';
import Subscribe from './Components/Subscribe/Subscribe';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Driod Sans','Poppins', 'Chilanka']
      }
    })
  }, [])


  return (
    <>
      <Router forceRefresh={true}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
