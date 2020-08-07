import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Slider from './slider';

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
}