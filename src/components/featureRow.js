import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const items = ["Womens", "Mens", "Accessories"];


function FeatureItem({item, image}) {

    return (
        <div className="feature-item">
            <a className="feature-item-inner" href="#" aria-label={`Link to ${item}`}>
                <Img
                    fluid={image.childImageSharp.fluid}
                    alt={`Link to ${item}`}
                />
                <div className="feature-item-title">
                    <span>{item}</span>
                </div>
            </a>
        </div>
    )
}

export default function FeatureRow() {
    const data = useStaticQuery(graphql`
        query {
            womens: file(relativePath: { eq: "womens.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            mens: file(relativePath: { eq: "mens.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            accessories: file(relativePath: { eq: "accessories.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            accessoriesMobile: file(relativePath: { eq: "accessories-mobile.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div className="feature-row-container">
            {items.map(el => {
                const image = el.toLowerCase();
                return (
                    <FeatureItem key={el} item={el} image={data[image]}/>
                )
            })}
        </div>
    )
}