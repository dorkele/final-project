import React, { useEffect, useState } from "react";
import { motion } from "framer";
import "./first-mycomp2.css";

export default function MyComp2() {
    let [firstAnimation, setFirstAnimation] = useState(false);
    let [secondAnimation, setSecondAnimation] = useState(false);
    let [thirdAnimation, setThirdAnimation] = useState(false);
    let [fourthAnimation, setFourthAnimation] = useState(false);

    const [currentY, setCurrentY] = useState(0);
    const [scroll, setScroll] = useState(window.scrollY);

    useEffect(() => {
        // function handleScroll() {
        //     const scrollY = window.scrollY;
        //     setCurrentY(scrollY);
        //     console.log("scrollY.current: ", window.scrollY);
        //     console.log("currentY: ", currentY);
        //     if (currentY >= 40) {
        //         setFirstAnimation(true);
        //     }
        // }
        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     window.removeEventListener("scroll", handleScroll);
        // };
        const handleScroll = () => {
            console.log(scroll);
            setScroll(window.scrollY);
        };
        if (scroll >= 40) {
            setFirstAnimation(true);
        } else if (scroll >= 60) {
            setSecondAnimation(true);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    return (
        <React.Fragment>
            <div className="container">
                <motion.div
                    animate={{ opacity: scroll >= 40 ? 1 : 0 }}
                    className="text"
                >
                    Očnjaci,
                </motion.div>
                <motion.div
                    animate={{ opacity: scroll >= 60 ? 1 : 0 }}
                    transition={{ delay: 1 }}
                    className="text"
                >
                    podočnjaci,
                </motion.div>
                {/* <motion.div
                    animate={{
                        opacity: thirdAnimation ? 1 : 0,
                    }}
                    className="text"
                    transition={{ delay: 2 }}
                >
                    kapci.
                </motion.div>
                <motion.div
                    animate={{ opacity: fourthAnimation ? 1 : 0 }}
                    className="subtext"
                    transition={{ delay: 3 }}
                >
                    Bilo je premalo sati kada su nam rekli što se događa. Bili
                    smo ranjivi, sanjivi, fak.
                </motion.div> */}
            </div>
        </React.Fragment>
    );
}
