import React, { useState, useEffect } from "react";
import { motion, Frame } from "framer";

export default function MyComp3() {
    let [startAnimation, setStartAnimation] = useState(false);
    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;

            console.log("scrollY.current: ", window.scrollY);

            if (scrollY >= 600) {
                console.log("cujemo li se");
                setStartAnimation(true);
            }
        }
        window.addEventListener("scroll", handleScroll);
    });
    return (
        <React.Fragment>
            <Frame
                initial={{ opacity: 0 }}
                animate={{ opacity: startAnimation ? 1 : 0 }}
                top={1000}
                center
                backgroundColor={"none"}
            >
                Sjediš negdje u dnu razreda, a ja duboko u sebi čujem
                preskakanje tvoje vilice, škripanje tvog kapka, rimu škrgutanja
                očnjaka i podočnjaka.
            </Frame>
        </React.Fragment>
    );
}
