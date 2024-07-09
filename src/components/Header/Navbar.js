import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Hamburger from "./Hamburger";
import data from "../../data.json";

const Navbar = () => {
    const {
        header: { navlists },
    } = data;
    const location = useLocation();
    const indicatorRefs = useRef([]);
    const [clickedIndex, setClickedIndex] = useState(null);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        navlists.forEach((_, index) => {
            if (indicatorRefs.current[index]) {
                gsap.to(indicatorRefs.current[index], {
                    opacity: location.pathname === navlists[index].path ? 1 : 0,
                    duration: 0.5,
                    ease: "power3.inOut",
                });
            }
        });
    }, [location.pathname, navlists]);

    useEffect(() => {
        if (clickedIndex !== null) {
            const timer = setTimeout(() => {
                if (indicatorRefs.current[clickedIndex]) {
                    gsap.to(indicatorRefs.current[clickedIndex], {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power3.inOut",
                    });
                }
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [clickedIndex]);

    const handleLinkClick = (index) => {
        setClickedIndex(index);
    };

    return (
        <nav className="px-5 lg:px-5 min-[1150px]:px-0 flex justify-between items-center max-w-6xl mx-auto">
            <div className="hover:cursor-pointer text-xl lg:text-3xl  font-semibold">
                <Link to={"/"}>Brightrix</Link>
            </div>
            <ul className="hidden sm:flex justify-center items-center sm:text-xs sm:gap-7 md:text-sm lg:gap-10 font-bold relative">
                {navlists.map((list, index) => (
                    <li
                        key={index}
                        className="relative"
                        onMouseEnter={() =>
                            gsap.to(indicatorRefs.current[index], {
                                opacity: 1,
                                duration: 0.5,
                                ease: "power3.inOut",
                            })
                        }
                        onMouseLeave={() =>
                            gsap.to(indicatorRefs.current[index], {
                                opacity:
                                    location.pathname === list.path ? 1 : 0,
                                duration: 0.5,
                                ease: "power3.inOut",
                            })
                        }
                        onClick={scrollToTop}
                    >
                        <Link
                            to={list.path}
                            className="relative z-10"
                            onClick={() => handleLinkClick(index)}
                        >
                            {list.name}
                        </Link>
                        <div
                            ref={(el) => (indicatorRefs.current[index] = el)}
                            className="absolute top-7 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full opacity-0"
                        />
                    </li>
                ))}
            </ul>
            <div className="hidden sm:flex items-center gap-4">
                <button className="text-orange-600 bg-orange-100 p-2 px-7 rounded-full sm:text-xs md:text-sm font-bold">
                    Sign In
                </button>
            </div>
            <div className="flex sm:hidden">
                <Hamburger />
            </div>
        </nav>
    );
};

export default Navbar;
