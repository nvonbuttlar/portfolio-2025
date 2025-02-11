import { Bars3Icon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import MobileMenu from './MobileMenu';

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
      <ul className="nav__list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/development">Dev</a>
        </li>
        <li>
          <a href="/other">Other</a>
        </li>
        <li>
          <a href="/styleguide">Styleguide</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
      </ul>
      <MobileMenu />
    </nav>
  );
}