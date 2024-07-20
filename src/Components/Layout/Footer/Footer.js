import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-sec1">
                    <div className="footer-links">
                        <p>About Disney+ Hotstar</p>
                        <p>Terms Of Use</p>
                        <p>Privacy Policy</p>
                        <p>FAQ</p>
                        <p>Feedback</p>
                        <p>Careers</p>
                    </div>
                    <p className='footer-desc'>&#169; 2023 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved</p>
                </div>
                <div className="footer-sec2">
                    <div className='f-subDiv-1'>
                        <p>Connect with us</p>
                        <div>
                            <button>
                                <i className="fa-brands fa-facebook-f"></i>
                            </button>
                            <button>
                                <i className="fa-brands fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                    <div className='f-subDiv-2'>
                        <p>Disney+ Hotstar App</p>
                        <div className='ft-btns'>
                            <button>
                            <i className="fa-brands fa-google-play"></i>
                                <div>
                                    <p>GET IT ON</p>
                                    <h2>Google Play</h2>
                                </div>

                            </button>
                            <button>
                            <i className="fa-brands fa-apple"></i>  
                            <div>
                                    <p>Download on the</p>
                                    <h2>App Store</h2>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer