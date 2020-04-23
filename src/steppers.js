import React, { useState, useEffect } from "react";
import "./steppers.css";
import Home from "./home";
import First from "./first";
import Second from "./second";
import Third from "./third";
import Fourth from "./fourth";
import Fifth from "./fifth";
import Sixth from "./sixth";
import Seventh from "./seventh";
import Eight from "./eight";
import Ninth from "./ninth";
import Tenth from "./tenth";

export default function Steppers() {
    let [step, setStep] = useState(0);
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

    if (step === 0) {
        page = <Home />;
    } else if (step === 1) {
        page = (
            <First variantsVisibility={variantsVisibility} scrollY={scrollY} />
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
            <Fifth variantsVisibility={variantsVisibility} scrollY={scrollY} />
        );
    } else if (step === 6) {
        page = (
            <Sixth variantsVisibility={variantsVisibility} scrollX={scrollX} />
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
            <div className="stepper-container">
                {step > 0 && (
                    <button onClick={() => setStep(step - 1)}>Previous</button>
                )}
                <button
                    className="home-btn"
                    onClick={() => setStep(0)}
                ></button>
                <button className="one-btn" onClick={() => setStep(1)}></button>
                <button className="two-btn" onClick={() => setStep(2)}></button>
                <button
                    className="three-btn"
                    onClick={() => setStep(3)}
                ></button>
                <button
                    className="four-btn"
                    onClick={() => setStep(4)}
                ></button>
                <button
                    className="five-btn"
                    onClick={() => setStep(5)}
                ></button>
                <button className="six-btn" onClick={() => setStep(6)}></button>
                <button
                    className="seven-btn"
                    onClick={() => setStep(7)}
                ></button>
                <button
                    className="eight-btn"
                    onClick={() => setStep(8)}
                ></button>
                <button
                    className="nine-btn"
                    onClick={() => setStep(9)}
                ></button>
                <button
                    className="ten-btn"
                    onClick={() => setStep(10)}
                ></button>

                {step < 10 && (
                    <button onClick={() => setStep(step + 1)}>Next</button>
                )}
            </div>
            {page}
        </React.Fragment>
    );
}
