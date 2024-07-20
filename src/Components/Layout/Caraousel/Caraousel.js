import React from 'react'
import './Caraousel.css'
import Slider from "react-slick";
//Import CSS in App.js

const Caraousel = () => {

    let movieData = [
        {
            name: 'Taaza Khabar',
            tags: ['Fantasy', 'Hotstar Specials', '2023'],
            desc: "A public toilet caretaker's poverty-stricken life takes a drastic U-turn when he helps an old woman. How long will fate smile upon him?",
            img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5001/1445001-h-afaa07019b4d'
        },
        {
            name: 'Aar Ya Paar',
            tags: ['Action', 'Hotstar Specials', 'U/A 16+'],
            desc: "When the modern world's greed destroys his idyllic tribal existence, a vailant archet becomes a deadly assassin to get even.",
            img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3748/1443748-h-5a4434bee5f5'
        },
        {
            name: 'Thor: Love and Thunder',
            tags: ['Action', 'U/A 13+'],
            desc: "The God of Thunder teams up with King Valkyrie, Korg and ex-girlfriend turned Mighty Thor Jane Foster to take on a galactic killer known as Gorr the God Butcher",
            img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8295/1328295-h-b05c8156e59a'
        },
        {
            name: 'Criminal Justice',
            tags: ['Drama', 'U/A 16+', 'Hotstar Specials'],
            desc: "A one-night stand turns into a nightmare when Aditya wakes up covered in blood. All evidence is against him, but he doesn't remember anything. Is he guilty?",
            img: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3615/753615-h'
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
    };



    return (
        <>
            <div className="caraousel-container">
                    <Slider className='caraousel' {...settings} arrows={false} autoplay={true} autoplaySpeed={5000}>
                        {
                            movieData.map((data, i) => {
                                return <div className="slider" key={data.desc}>
                                    <div className="slide-content">
                                        <h1 className='movieTitle'>{data.name}</h1>
                                        <p className='movieTags'>
                                            {data.tags.map((tag) => {
                                                return <span key={tag}>{tag}</span>
                                            })}
                                        </p>
                                        <p className='movieDesc'>{data.desc}</p>
                                    </div>
                                    <img src={data.img} alt="Movie-Img" />
                                </div>
                            })
                        }
                    </Slider>
             </div>
        </>
    )
}

export default Caraousel