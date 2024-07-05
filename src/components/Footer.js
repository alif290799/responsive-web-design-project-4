import React from "react";
import Section from "./Section";

const Footer = () => {
    return (
        <footer className="bg-blue-950 relative">
            <Section>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div>
                        <div>Brightrix.</div>
                        <div>Bespoke Software Solution</div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
