import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { navlists } from "../arrays";

const Hamburger = () => {
    const [triggerOpen, setTriggerOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const triggerOpenFunction = () => {
        setTriggerOpen(!triggerOpen);
    };

    const handleLinkClick = () => {
        setTriggerOpen(false);
    };

    useEffect(() => {
        if (triggerOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.5,
                ease: "power3.inOut",
            });
            gsap.to(menuRef.current, {
                opacity: 1,
                duration: 0.5,
                ease: "power3.inOut",
                delay: 0.1,
            });
            gsap.to(hamburgerRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power3.inOut",
            });
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.5,
                ease: "power3.inOut",
            });
            gsap.to(menuRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
            });
            gsap.to(hamburgerRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power3.inOut",
                delay: 0.1,
            });
        }
    }, [triggerOpen]);

    return (
        <>
            <div
                ref={menuRef}
                className="absolute bg-gray-950 text-white top-0 left-0 right-0 flex flex-col justify-center items-center h-screen gap-8 opacity-0"
                style={{ zIndex: 1000 }}
            >
                <ul className="flex flex-col items-center gap-5 text-3xl uppercase">
                    {navlists.map((list, index) => (
                        <li key={index}>
                            <Link to={list.path} onClick={handleLinkClick}>
                                {list.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={triggerOpenFunction}
                    className="absolute top-4 right-4 hover:cursor-pointer"
                >
                    <span className="material-symbols-outlined text-4xl">
                        close
                    </span>
                </div>
            </div>
            <div
                ref={hamburgerRef}
                onClick={triggerOpenFunction}
                className="hover:cursor-pointer"
            >
                <span className="material-symbols-outlined text-4xl">menu</span>
            </div>
        </>
    );
};

export default Hamburger;
