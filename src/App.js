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
import FifthImageLayer from "./fifth-image-layer";
import Sixth from "./sixth";
import SixthImageLayer from "./sixth-image-layer";
import Seventh from "./seventh";
import Eight from "./eight";
import Ninth from "./ninth";
import Tenth from "./tenth";

export default function App() {
    const [steppers, setSteppers] = useState(false);
    // const [visible, setVisible] = useState(false);
    function change() {
        if (steppers === true) {
            setSteppers(false);
            // setVisible(false);
        } else if (steppers === false) {
            setSteppers(true);
            // setVisible(true);
        }
    }

    let page;
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [scrollX, setScrollX] = useState(window.scrollX);
    useEffect(() => {
        const handleScroll = () => {
            console.log(scrollY);
            console.log(scrollX);

            setScrollY(window.scrollY);
            setScrollX(window.scrollX);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY, scrollX]);
    const variantsVisibility = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
    };
    let [step, setStep] = useState(0);

    function getStep(step) {
        setStep(step);
    }
    console.log("step: ", step);

    if (step === 0) {
        page = <Home />;
    } else if (step === 1) {
        page = (
            <React.Fragment>
                <First
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
                <FirstImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
            </React.Fragment>
        );
    } else if (step === 2) {
        page = (
            <Second variantsVisibility={variantsVisibility} scrollY={scrollY} />
        );
    } else if (step === 3) {
        page = (
            <Third variantsVisibility={variantsVisibility} scrollY={scrollY} />
        );
    } else if (step === 4) {
        page = (
            <Fourth variantsVisibility={variantsVisibility} scrollY={scrollY} />
        );
    } else if (step === 5) {
        page = (
            <React.Fragment>
                <Fifth
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
                <FifthImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
            </React.Fragment>
        );
    } else if (step === 6) {
        page = (
            <React.Fragment>
                <Sixth
                    variantsVisibility={variantsVisibility}
                    scrollX={scrollX}
                />
                <SixthImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollX}
                />
            </React.Fragment>
        );
    } else if (step === 7) {
        page = (
            <Seventh
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
            />
        );
    } else if (step === 8) {
        page = (
            <Eight variantsVisibility={variantsVisibility} scrollY={scrollY} />
        );
    } else if (step === 9) {
        page = (
            <Ninth variantsVisibility={variantsVisibility} scrollY={scrollY} />
        );
    } else if (step === 10) {
        page = (
            <Tenth variantsVisibility={variantsVisibility} scrollY={scrollY} />
        );
    }
    return (
        <React.Fragment>
            <button className="menu-toggle-btn" onClick={change}>
                Click
            </button>

            {steppers && (
                <Stepper
                    getStep={(step) => getStep(step)}
                    steppers={steppers}
                />
            )}

            {page}
        </React.Fragment>
    );
}
