import React from 'react';
import '../Bar.css';


interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
        </button>
      <ul className='navbar-links'>
          <li><a href="#products" onClick={toggleSidebar}>Товары</a></li>
          <li><a href="#warehouses" onClick={toggleSidebar}>Склады</a></li>
          <li><a href="#about" onClick={toggleSidebar}>О системе</a></li>
          <li><a href="#profile" onClick={toggleSidebar}>Профиль</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;


