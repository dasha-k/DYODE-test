import React from 'react';

import facebook from "./fb.png"
import insta from "./insta.png"
import twitter from "./twitter.png"

const titles = ["Customer Service", "Company"];
const columns = {
    col0: ["Accessibility", "Contact Us", "Return Policy", "FAQ", "Gift Certificates", "Wishlist"],
    col1: ["About us", "Careers", "Press", "Affiliates"],
}

export default function FooterLinks() {
    return (
        <div className="footer-links-container">
            {
                titles.map((el, index) => {
                    const currentColumn = "col"+ index;
                    return (
                        <div key={index} className="footer-links-col">
                            <h3>{el}</h3>
                            <ul>
                                {columns[currentColumn].map(el => <li key={el}><a href="#" className="footer-links-link">{el}</a></li>)}
                            </ul>
                        </div>
                    )
                })
            }
            <div className="footer-links-col-wide">
                <h3>Follow Us</h3>
                <div>
                    <a href="#" target="_blank" className="social-link"><img src={facebook} alt="Follow us on ..." /></a>
                    <a href="#" target="_blank" className="social-link"><img src={insta} alt="Follow us on ..." /></a>
                    <a href="#" target="_blank" className="social-link"><img src={twitter} alt="Follow us on ..." /></a>
                </div>
            </div>
        </div>
    )
}