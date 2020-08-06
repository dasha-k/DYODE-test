import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Slider from './slider';

export default function InstagramFeed() {
    const data = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "social-1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            image2: file(relativePath: { eq: "social-2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            image3: file(relativePath: { eq: "social-3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            image4: file(relativePath: { eq: "social-4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            image5: file(relativePath: { eq: "social-5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

const slides = [data.image1, data.image2, data.image3, data.image4, data.image5];

    return (
        <Slider 
            slides={slides}
            title="Follow Us on Instagram"
            slideDesktop={5}
            slideMobile={3}
        />
    )
}