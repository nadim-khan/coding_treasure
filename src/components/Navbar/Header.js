import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import logo from '../../svg/logo.svg';
import menu from '../../svg/menu.svg';
import close from '../../svg/close.svg';
import {
  Link as NavLink
  } from "react-router-dom";

  const activeLink = {
      color:'#61dafb'
  }

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setMenuOPen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
    setMenuOPen(!isOpen);
  };

  return (
    <header className="Header">
      <NavLink to='/'>
          <img src={logo} alt='logo' width="85vh" />
      </NavLink>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <NavLink to="/"  >Home</NavLink>
          <NavLink to="/projects" >Projects</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger" >
        {isOpen ? <img src={close} alt='menu' width="30vh" />: <img src={menu} alt='menu' width="30vh" />}
      </button>
      
    </header>
  );
}
