import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Button from './button';

const slideTitle = "Title goes here";
const slideSubtitle = "Tagline will go right here";

export default function HeroBanner() {
    const data = useStaticQuery(graphql`
        query {
        heroDesktop: file(relativePath: { eq: "banner-hero-1.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 1700) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    return (
        <div className="hero-container">
            <Img
                fluid={data.heroDesktop.childImageSharp.fluid}
                alt="New collection"
            />
            <div className="hero-capture">
                <h2>{slideTitle}</h2>
                <span>{slideSubtitle}</span>
                <Button color="primary" link="/" label="Shop now" />
            </div>
        </div>
    )
}