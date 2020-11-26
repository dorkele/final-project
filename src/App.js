import React, { useState, useEffect } from "react";
import "./App.css";
import Stepper from "./components/stepper";
import Home from "./Pages/home";
import First from "./Pages/first";
import Second from "./Pages/second";
import Third from "./Pages/third";
import Fourth from "./Pages/fourth";
import Fifth from "./Pages/fifth";
import Sixth from "./Pages/sixth";
import Seventh from "./Pages/seventh";
import Eight from "./Pages/eight";
import Ninth from "./Pages/ninth";
import Tenth from "./Pages/tenth";
import { useMediaQuery } from "react-responsive";

export default function App() {
    const [steppers, setSteppers] = useState(false);
    let [step, setStep] = useState(0);
    const [language, setLanguage] = useState("croatian");

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const change = (e) => {
        e.preventDefault();
        if (steppers === true) {
            setSteppers(false);
        } else if (steppers === false) {
            setSteppers(true);
        }
    };

    function getLanguage(language) {
        setLanguage(language);
    }

    function getStep(step) {
        setSteppers(false);
        setStep(step);
    }

    function getSteppers(boolean) {
        if (boolean === true) {
            setSteppers(true);
        } else {
            setSteppers(false);
        }
    }

    let page;
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < scrollY;
            if (isScrollingUp === true) {
                setSteppers(false);
            }
            setScrollY(yPos);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY]);

    useEffect(() => {
        getSteppers(false);
    }, [step]);

    const variantsVisibility = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
        redZoom: {
            scale: 5,
            color: "red",
            duration: 3,
        },
    };
    const variantsOpacity = {
        initial: {
            opacity: 0.3,
        },
        active: {
            opacity: 1,
        },
    };

    function fullScreen() {
        document.documentElement.webkitRequestFullscreen();
    }
    if (step === 0) {
        page = (
            <Home
                getStep={(step) => getStep(step)}
                variantsVisibility={variantsVisibility}
                language={language}
                getLanguage={(language) => getLanguage(language)}
                isMobile={isMobile}
            />
        );
    } else if (step === 1) {
        page = (
            <First
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
                isMobile={isMobile}
            />
        );
    } else if (step === 2) {
        page = (
            <Second
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    } else if (step === 3) {
        page = (
            <Third
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    } else if (step === 4) {
        page = (
            <Fourth
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    } else if (step === 5) {
        page = (
            <Fifth
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    } else if (step === 6) {
        page = (
            <Sixth
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    } else if (step === 7) {
        page = (
            <React.Fragment>
                <Seventh
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    getSteppers={(boolean) => getSteppers(boolean)}
                    language={language}
                />
            </React.Fragment>
        );
    } else if (step === 8) {
        page = (
            <Eight
                variantsVisibility={variantsVisibility}
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    } else if (step === 9) {
        page = (
            <Ninth
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    } else if (step === 10) {
        page = (
            <Tenth
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
                language={language}
            />
        );
    }
    return (
        <React.Fragment>
            <button className="menu-toggle-btn" onClick={change}>
                <img
                    className="logo-red"
                    src="/images/logo_red.png"
                    alt="logo-red"
                />
            </button>
            <button className="full-screen-btn" onClick={fullScreen}>
                <img
                    className="logo-fullscreen"
                    src="/images/open-eye.png"
                    alt="open-eye-logo"
                />
            </button>

            {page}
            <Stepper getStep={(step) => getStep(step)} steppers={steppers} />
        </React.Fragment>
    );
}
