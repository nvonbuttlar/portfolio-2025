import { Bars3Icon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import MobileMenu from './MobileMenu';
import NavList from "./NavList";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log("show mobile menu: ", showMobileMenu);
  }

  return (
    <nav className="nav">
      <a href="/" className="logo">Nickvb.xyz</a>
      {showMobileMenu ? 
        <XMarkIcon className="nav__mobile-icon" onClick={() => toggleMenu()} /> :
        <Bars3Icon className="nav__mobile-icon" onClick={() => toggleMenu()} />
      }
      <NavList />
      <MobileMenu showMobileMenu={showMobileMenu} />
    </nav>
  );
}