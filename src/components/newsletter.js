import React, { useState } from 'react';

const title = "Sugn up & Stay Connected";
const capture = "Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!"
const buttonLabel = "Subscribe";

export default function Newsletter() {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="newsletter-container">
            <div className="newsletter">
                <div className="newsletter-header">
                    <h2>{title}</h2>
                </div>
                <div className="newsletter-content">
                    <div className="newsletter-capture">
                        <p>{capture}</p>
                    </div>
                    <div className="newsletter-form-wrapper">
                        <form onSubmit={(e) => {e.preventDefault(); alert('Form submitted!')}} className="newsletter-form">
                            <input
                                value={inputValue}
                                placeholder="Your Email Address"
                                onChange={(e) => setInputValue(e.target.value)}
                                type="email"
                                className="newsletter-input"
                            >
                            </input>
                            <button className="button newsletter-button">
                                {buttonLabel}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}