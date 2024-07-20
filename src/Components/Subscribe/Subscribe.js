import React from 'react';
import './Subscribe.css';
import { HotstarLogo, Hotstar } from '../../Assets/ImagesIndex';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Login from '../Layout/Login/Login';
import MetaData from '../Layout/MetaData';

const Subscribe = () => {

    const [currentSelectedPlan, setCurrentSelectedPlan] = useState("premium");

    const handlePlans = (plan)=>{
        setCurrentSelectedPlan(plan)
    }

    const handleOpenLogin = () => {
        const loginContainer = document.getElementById('loginContainer');
        loginContainer.classList.toggle('displayNone')
      }

    return (
        <>
        <MetaData title="Subscribe Our Plan"/>
        <Login />
            <div className="subscribe-container">
                <div className="subs-bgContainer">
                    <img src={Hotstar} alt="AnimBgImg" className='subs-bgImg'/>
                    <span className='bg-curved'></span>
                    <span className='bg-overlay'></span>
                </div>
                <div className="subs-nav">
                    <div className="left-subs-nav">
                        <Link to='/'>
                        <img src={HotstarLogo} alt="Logo" className='hotstarLogo' />
                        </Link>
                        <p><span>Select Plan</span> &gt; <span>Log in</span> &gt; <span>Pay</span></p>
                    </div>
                    <button className='sub-btn' onClick={handleOpenLogin}>Login</button>
                </div>
                <div className="subsPlanContainer">
                    <h1>Subscribe to watch all content on Disney+ Hotstar</h1>
                    <div className="subsPlan">
                        <table className={currentSelectedPlan}>
                            <thead>

                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Super</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>All Content <br /> <span>Movies, Live Sports, TV, Specials</span></td>
                                    <td><i className="fa-solid fa-check"></i></td>
                                    <td><i className="fa-solid fa-xmark"></i></td>
                                </tr>
                                <tr>
                                    <td>Watch on TV or Laptop</td>
                                    <td><i className="fa-solid fa-check"></i></td>
                                    <td><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Ads free movies and shows (except sports)</td>
                                    <td><i className="fa-solid fa-xmark"></i></td>
                                    <td><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td>Number of devices that can be logged in</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Max video quality</td>
                                    <td>Full HD (1080p)</td>
                                    <td>4K (2160p)</td>
                                </tr>
                                <tr>
                                    <td>Max audio quality</td>
                                    <td>Dolby 5.1</td>
                                    <td>Dolby 5.1</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="planContainer">
                            <div className={`planBox ${currentSelectedPlan === 'super'? 'active': ''}`} onClick={()=>{
                                handlePlans('super')
                            }}>
                                <h3>Super</h3>
                                <h1>₹<span>899</span>/Year</h1>
                                <span className="checkCircle"><i className="fa-solid fa-check"></i></span>
                            </div>
                            <div className={`planBox ${currentSelectedPlan === 'premium'? 'active': ''}`} onClick={()=>{
                                handlePlans('premium')
                            }}>
                                <h3>Premium</h3>
                                <h1>₹<span>1499</span>/Year</h1>
                                <span className="checkCircle"><i className="fa-solid fa-check"></i></span>
                            </div>
                        </div>
                        <button className="planBtn">Continue With {currentSelectedPlan} &nbsp; <span>&#62;</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe