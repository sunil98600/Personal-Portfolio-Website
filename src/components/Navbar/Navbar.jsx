import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [nav, setNav] = useState(false);

  // Use the location hook from react-router-dom
  const location = useLocation();

  // Update menu state based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setMenu('home');
    } else if (path.includes('/about')) {
      setMenu('about');
    } else if (path.includes('/work')) {
      setMenu('work');
    } else if (path.includes('/blog')) {
      setMenu('blog');
    } else if (path.includes('/contact')) {
      setMenu('contact');
    }
  }, [location]);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener('scroll', changeValueOnScroll);

  return (
    <nav
      className={`${
        nav === true ? 'Sticky' : ''
      } z-50 bg-transparent py-4 px-24 shadow-sm fixed w-full z-10 top-0 flex items-center justify-between `}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-gray-800">SKY</span>
        <span className="text-gray-400">FLY</span>
      </div>

      {/* Navbar Links */}
      <ul
        className={`hidden md:flex space-x-8  ${
          nav === true ? 'text-black' : 'text-white'
        }`}
      >
        <li className="hover:text-gray-500">
          <Link to="/">
            Home
            {menu === 'home' && (
              <hr className={`${nav === true ? 'scrolled-custom-hr' : 'custom-hr'}`} />
            )}
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link to="/about">
            About Me
            {menu === 'about' && (
              <hr className={`${nav === true ? 'scrolled-custom-hr' : 'custom-hr'}`} />
            )}
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link to="/work">
            My Work
            {menu === 'work' && (
              <hr className={`${nav === true ? 'scrolled-custom-hr' : 'custom-hr'}`} />
            )}
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link to="/blog">
            Blog
            {menu === 'blog' && (
              <hr className={`${nav === true ? 'scrolled-custom-hr' : 'custom-hr'}`} />
            )}
          </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link to="/contact">
            Contact Me
            {menu === 'contact' && (
              <hr className={`${nav === true ? 'scrolled-custom-hr' : 'custom-hr'}`} />
            )}
          </Link>
        </li>
      </ul>

      {/* Mobile menu (Hamburger icon) */}
      <div className="md:hidden flex items-center">
        <button className="mobile-menu-button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
