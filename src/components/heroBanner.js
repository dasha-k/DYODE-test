import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Button from './button';

const slideTitle = "Title goes here";
const slideSubtitle = "Tagline will go right here";

export default function HeroBanner() {
    const data = useStaticQuery(graphql`
        query {
            heroMobile: file(relativePath: { eq: "banner-hero-mobile-1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 750, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            heroDesktop: file(relativePath: { eq: "banner-hero-1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const sources = [
        data.heroMobile.childImageSharp.fluid,
        {
            ...data.heroDesktop.childImageSharp.fluid,
            media: `(min-width: 750px)`,
        },
    ]

    return (
        <div className="hero-container">
            <Img
                fluid={sources}
                alt="New collection"
            />
            <div className="hero-capture">
                <h2>{slideTitle}</h2>
                <span className="subtitle">{slideSubtitle}</span>
                <Button color="primary" link="/" label="Shop now" />
            </div>
        </div>
    )
}