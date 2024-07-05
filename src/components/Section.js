import React from "react";

const Section = ({ children }) => {
    return (
        <div className="bg-gray-950">
            <section className="max-w-6xl mx-auto py-10 text-white px-5 min-[1150px]:px-0">
                {children}
            </section>
        </div>
    );
};

export default Section;
