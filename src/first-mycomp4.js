import React, { useState, useEffect } from "react";

const Scroller = () => {
    const [scroll, setScroll] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            console.log(scroll);
            setScroll(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return <div id="scroll">{scroll}</div>;
};

export default Scroller;
