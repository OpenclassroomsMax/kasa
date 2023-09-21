import React, { useState } from 'react'

import slider from '../../assets/Slider.svg'

import "../../styles/Carrousel.css"

export default function Carrousel({images}) {

    const [current, setCurrent] = useState(0)

	let length = images.length

    const PreviousImage = () => {
        if(current === 0) {
            setCurrent(length - 1);
        } else {
            setCurrent(current - 1);
        }
        return(setCurrent);
    };  

    const NextImage = () => {
        if(current === length - 1) {
            setCurrent(length = 0);
        } else {
            setCurrent(current + 1);
        }
        return(setCurrent);
    };

	return (
      
        <div className='carrousel'>
             {
                length > 1 && <img className="slider-previous" src={slider} alt="Précédent" onClick={PreviousImage}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === current ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                length > 1 && <img className="slider-next" src={slider} alt="Suivant" onClick={NextImage}/>
            }
        </div>
       
		
	);
}