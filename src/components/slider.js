import React from 'react';
import Img from "gatsby-image";

import arrow_left from './arrow-left.png';
import arrow_right from './arrow-right.png';

const productTitle = "Product Title";
const productDescription = "Women's T-Shirt";
const price = "19.99";


function Slide({ image, capture = false }) {
    return (
        <div className="slide">
            <a href="#">
                <Img
                    fluid={image.childImageSharp.fluid}
                    alt="Describe image for accessebility purposes"
                />
                {
                    capture &&
                    <div className="slide-caption">
                        <span className="caption-title">{productTitle}</span>
                        <span className="caption-subtitle">{productDescription}</span>
                        <span className="caption-special">${price}</span>
                    </div>
                }
            </a>
        </div>
    )
}

export default function Slider({ arrows=false, slideDesktop, slideMobile, capture, slides, title }) {
    const sliderClass = arrows ? "slider slider-arrows" : "slider";
    return (
        <div className="slider-container">
            <div className="slider-header">
                <h2 className="h3">{title}</h2>
            </div>
            <div className={sliderClass}>
                <div className={`slider-track track--${slideDesktop}-${slideMobile}`}>
                    {slides.map((el, index) => {
                        //const currentImage = `image${el}`
                        return (
                            <Slide key={index} image={el} capture={capture}/>
                        )
                    })}
                </div>
            </div>
            {arrows && 
                <>
                    <div className="arrow-left">
                        <img src={arrow_left}></img>
                    </div>
                    <div className="arrow-right">
                        <img src={arrow_right}></img>
                    </div>
                </>
            }
        </div>
    )
}