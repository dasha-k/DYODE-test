import React from 'react';
import Img from "gatsby-image";

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
                    <div>
                        <span>{productTitle}</span>
                        <span>{productDescription}</span>
                        <span>{price}</span>
                    </div>
                }
            </a>
        </div>
    )
}

export default function Slider({ arrows=false, slideDesktop, slideMobile, capture, slides, title }) {
    return (
        <div className="slider-container">
            <div className="slider-header">
                <h2>{title}</h2>
            </div>
            <div className="slider">
                <div className={`slider-track track--${slideDesktop}-${slideMobile}`}>
                    {slides.map((el, index) => {
                        //const currentImage = `image${el}`
                        return (
                            <Slide key={index} image={el} capture={capture}/>
                        )
                    })}
                </div>
                {arrows && <>arrows</>}
            </div>
        </div>
    )
}