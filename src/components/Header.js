import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = ({ children }) => {
  const navRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        gsap.to(navRef.current, {
          y: -navRef.current.offsetHeight,
          duration: 0.2,
        });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.2 });
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className="w-full bg-gray-950 py-4 text-white fixed top-0 left-0 z-10 transition-transform duration-500"
    >
      {children}
    </header>
  );
};

export default Header;
