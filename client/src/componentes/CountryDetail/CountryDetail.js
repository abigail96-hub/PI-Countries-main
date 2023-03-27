import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanCountryDetail, getCountryById, getActivities } from '../../redux/actions/actions';
// import { Link } from 'react-router-dom';
import s from './CountryDetail.module.css';
import Loading from '../Loading/LoadingComponent';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


 

export default function Detail() {

    let { id } = useParams()
    let dispatch = useDispatch();
    let detail = useSelector(state => state.countryDetail);
    let getactivities = useSelector(state=> state.activities);
    const [isLoading, setIsLoading] = useState(false)
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        'https://example.com/image4.jpg',
      ];

      const [currentSlide, setCurrentSlide] = useState(0);
      
      function nextSlide() {
        setCurrentSlide((currentSlide + 1) % images.length);
      }
    
      function prevSlide() {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
      }


    useEffect(() => {
        setIsLoading(true);
        dispatch(getActivities());
        dispatch(getCountryById(id));
        return () => dispatch(cleanCountryDetail())
    }, [dispatch, id])

    function formatNumber(number) {
        return new Intl.NumberFormat().format(number)
    }

    // if (!detail.id) return <NotFound />

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return <Loading />
    }




   
      
  


    return (

        <div className={s.all}>
            <div className={s.up}>
                <div id={s.flag}>
                    <img id={s.img} src={detail.img} alt={detail.name} />
                </div>
                <span className={s.name}>
                    {detail.name}
                </span>
            </div>
            <div className={s.carouselContainer}>
      <div className={s.carousel} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <div className={s.carouselSlide} key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} className={s.carouselImage} />
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );


            <div className={s.down}>
            <a className={s.mapita} href={detail.maps}  target='blank'>    Maps📍
                    </a>
                <div id={s.cuadro}>
                    <span className={s.info}>Country  Information</span>
                </div>
                
                <div className={s.cuadro}>
                    <span className={s.span1}>Code:</span>
                    <span className={s.span2}>{detail.id}</span>
                </div>
                <div className={s.cuadro}>
                    <span className={s.span1}>Continent:</span>
                    <span className={s.span2}>{detail.continents}</span>
                </div>
                <div className={s.cuadro}>
                    <span className={s.span1}>Capital:</span>
                    <span className={s.span2}>{detail.capital}</span>
                </div>
                <div className={s.cuadro}>
                    <span className={s.span1}>Subregion:</span>
                    <span className={s.span2}>{detail.subregion}</span>
                </div>
                <div className={s.cuadro}>
                    <span className={s.span1}>Area:</span>
                    <span className={s.span2}>{formatNumber(detail.area)} km2</span>
                </div>
                <div className={s.cuadro}>
                    <span className={s.span1}>Population</span>
                    <span className={s.span2}>{formatNumber(detail.population)}</span>
                </div>
            </div>

            <div className={s.card2}>
                <div id={s.title}>
                    <p>Activities 🏕️ </p>
                </div>
                {
                    getactivities && getactivities.map(d => {
                        let a = null
                  d.Countries.filter(e => e.id === detail.id && (a = d))
                        return (
                            <div key={a?.id}>
                                <div className={s.cuadro}>
                                    <span id={s.activity}>{a?.name}</span>
                                </div>
                                <div className={s.cuadro}>
                                    <span className={s.span3}>Difficult:</span>
                                    <span className={s.span4}>{a?.difficult}</span>
                                </div>
                                <div className={s.cuadro}>  
                                    <span className={s.span3}>Duration:</span>
                                    <span className={s.span4}>{a?.duration} hrs</span>
                                </div>
                                <div className={s.cuadro}>
                                    <span className={s.span3}>Season:</span>
                                    <span className={s.span4}>{a?.season}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}