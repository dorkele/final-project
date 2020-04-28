import React, { useState, useEffect } from "react";
import "./App.css";
import Stepper from "./stepper";
import Home from "./home";
import First from "./first";
import FirstImageLayer from "./first-image-layer";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";
import Fifth from "./fifth";
import Sixth from "./sixth";
import SixthImageLayer from "./sixth-image-layer";
import Seventh from "./seventh";
import SeventhImageLayer from "./seventh-image-layer";
import Eight from "./eight";
import EightImageLayer from "./eight-image-layer";
import Ninth from "./ninth";
import Tenth from "./tenth";
import TenthHahahaLayer from "./tenth-hahaha-layer";

export default function App() {
    const [steppers, setSteppers] = useState(false);

    const change = (e) => {
        console.log("E: ", e);

        e.preventDefault();
        if (steppers === true) {
            setSteppers(false);
        } else if (steppers === false) {
            setSteppers(true);
        }
    };

    let page;
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [scrollX, setScrollX] = useState(window.scrollX);
    let [step, setStep] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            console.log(scrollY);
            console.log(scrollX);

            setScrollY(window.scrollY);
            setScrollX(window.scrollX);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY, scrollX, step]);
    const variantsVisibility = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };

    function getStep(step) {
        setStep(step);
        setSteppers(false);
        console.log("step in app: ", step);
    }
    function getSteppers(boolean) {
        if (boolean === true) {
            setSteppers(true);
        } else {
            setSteppers(false);
        }
    }

    function fullScreen() {
        document.documentElement.webkitRequestFullscreen();
    }

    if (step === 0) {
        page = <Home getStep={(step) => getStep(step)} />;
    } else if (step === 1) {
        page = (
            <React.Fragment>
                <First
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    getSteppers={(boolean) => getSteppers(boolean)}
                />
                <FirstImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
            </React.Fragment>
        );
    } else if (step === 2) {
        page = (
            <Second
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
            />
        );
    } else if (step === 3) {
        page = (
            <Third
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
            />
        );
    } else if (step === 4) {
        page = (
            <Fourth
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
            />
        );
    } else if (step === 5) {
        page = (
            <React.Fragment>
                <Fifth
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    getSteppers={(boolean) => getSteppers(boolean)}
                />
            </React.Fragment>
        );
    } else if (step === 6) {
        page = (
            <React.Fragment>
                <Sixth
                    variantsVisibility={variantsVisibility}
                    scrollX={scrollX}
                    getSteppers={(boolean) => getSteppers(boolean)}
                />
                <SixthImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollX}
                />
            </React.Fragment>
        );
    } else if (step === 7) {
        page = (
            <React.Fragment>
                <Seventh
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    getSteppers={(boolean) => getSteppers(boolean)}
                />
                <SeventhImageLayer scrollY={scrollY} />
            </React.Fragment>
        );
    } else if (step === 8) {
        page = (
            <React.Fragment>
                <Eight
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    getSteppers={(boolean) => getSteppers(boolean)}
                />
                <EightImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
            </React.Fragment>
        );
    } else if (step === 9) {
        page = (
            <Ninth
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                getSteppers={(boolean) => getSteppers(boolean)}
            />
        );
    } else if (step === 10) {
        page = (
            <React.Fragment>
                <Tenth
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    getSteppers={(boolean) => getSteppers(boolean)}
                />
                <TenthHahahaLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <button className="menu-toggle-btn" onClick={change}>
                {/* <div className="button-text">{buttonText}</div> */}
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

            <Stepper getStep={(step) => getStep(step)} steppers={steppers} />

            {page}
        </React.Fragment>
    );
}
