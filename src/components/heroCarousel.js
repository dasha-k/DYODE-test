import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Button from './button';

const slideTitle = "Title goes here";
const slideSubtitle = "Tagline will go right here";

function CarouselSlide() {
    const data = useStaticQuery(graphql`
        query {
        carouselSlideDesktop: file(relativePath: { eq: "carousel-hero-1.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1700) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    return (
        <div className="carousel-slide">
            <Img
                fluid={data.carouselSlideDesktop.childImageSharp.fluid}
                alt="New collection"
            />
            <div className="carousel-capture">
                <h2>{slideTitle}</h2>
                <span>{slideSubtitle}</span>
                <Button color="black" link="/" label="Shop now" />
            </div>
        </div>
    )
}

export default function HeroCarousel() {
    return (
        <div className="carousel-container">
            <CarouselSlide />
            <ul className="carousel-indicators">
                {Array(1,2,3, 4).map(el => <li key={el}><span className={el === 1 ? `indicator indicator-active`: `indicator`}></span></li>)}
            </ul>
        </div>
    )
}