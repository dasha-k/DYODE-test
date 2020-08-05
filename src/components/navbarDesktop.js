import React from 'react';

const navItems = ['Womens', 'Mens', 'Accessories', 'Sale!'];

export default function NavbarDesktop () {
    return (
        <nav>
            <ul className="menu-desktop">
                {
                    navItems.map(el => <li className="menu-item" key={el}><a href="#">{el}</a></li>) // key is temporary decision, can use uuid later
                }
            </ul>
        </nav>
    )
}