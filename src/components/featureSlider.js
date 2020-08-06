import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Slider from './slider';

// function Slide({data}) {
//     return (
//         <div className="slide">
//             <a href="#">
//                 <Img
//                     fluid={data.heroDesktop.childImageSharp.fluid}
//                     alt="Product title"
//                 />
//                 <div>
//                     <span>{productTitle}</span>
//                     <span>{productDescription}</span>
//                     <span>{price}</span>
//                 </div>
//             </a>
//         </div>
//     )
// }

export default function FeatureSlider() {
    const data = useStaticQuery(graphql`
        query {
        heroDesktop: file(relativePath: { eq: "product-image.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)

    const slides = [data.heroDesktop, data.heroDesktop, data.heroDesktop, data.heroDesktop]

    return (
        <Slider 
            slides={slides}
            title="New Arrivals"
            arrows={true}
            slideDesktop={4}
            slideMobile={2}
            capture={true}
        />
    )
        // <div className="slider-container">
        //     <div className="slider-header">
        //         <h2>{title}</h2>
        //     </div>
        //     <div className="slider">
        //         <div className="slider-track">
        //             {[1,2,3,4].map(el => <Slide key={el} data={data}/>)}
        //         </div>
        //     </div>
        // </div>
}