import React from "react";

import AnnouncementBar from './announcementBar';
import NavbarDesktop from './navbarDesktop';

import logo from "./logo.png"

export default function Header() {
  return (
    <>
      	<AnnouncementBar />
      	<header className="header">
			<div className="header-icon-menu">hamburger</div>
				<div className="header-inner">
					<h1 className="header-logo"><a href="/"><img src={logo} alt="Store name" /></a></h1>
					<NavbarDesktop />
				</div>
			<div className="header-icon-cart">cart icon</div>
      	</header>
    </>
  )
}