
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);
  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="flex justify-between px-7 items-center w-full h-[90px] border-b shadow-md relative lg:justify-around bg-white z-50">
      {/* Logo */}
      <div className="w-[70px]">
        <a href="#home">
          <img src="/img1.png" className="rounded-2xl" alt="logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex list-none">
        <li className="mx-5 hover:text-green-500">
          <a href="#home">Home</a>
        </li>
        <li className="mx-5 hover:text-green-500">
          <a href="#about">About Us</a>
        </li>
        <li className="mx-5 hover:text-green-500">
          <a href="#donation">Donation</a>
        </li>
        <li className="mx-5 hover:text-green-500">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden cursor-pointer text-xl" onClick={toggleMenu}>
        <FontAwesomeIcon icon={openMenu ? faTimes : faBars} />
      </div>

      {/* Mobile Dropdown */}
      {openMenu && (
        <ul className="absolute top-22 left-0 w-full backdrop-blur-md bg-white/10 text-white flex flex-col items-center space-y-4 py-5 lg:hidden z-50 border-b border-white/20 shadow-md">
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About Us</a>
          </li>
          <li>
            <a href="#donation" onClick={closeMenu}>Donation</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
