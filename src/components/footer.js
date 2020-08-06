import React from "react";

import Newsletter from './newsletter';
import FooterLinks from './footerLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <Newsletter />
      <FooterLinks />
    </footer>
  )
}