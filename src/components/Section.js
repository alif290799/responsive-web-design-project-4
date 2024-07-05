import React from "react";

const Section = ({ children }) => {
    return (
        <div className="bg-white">
            <section className="max-w-6xl mx-auto py-16 text-white px-5 min-[1150px]:px-0 overflow-hidden">
                {children}
            </section>
        </div>
    );
};

export default Section;
