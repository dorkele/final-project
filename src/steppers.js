import React, { useState } from "react";
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

    if (step === 0) {
        page = <Home />;
    } else if (step === 1) {
        page = <First />;
    } else if (step === 2) {
        page = <Second />;
    } else if (step === 3) {
        page = <Third />;
    } else if (step === 4) {
        page = <Fourth />;
    } else if (step === 5) {
        page = <Fifth />;
    } else if (step === 6) {
        page = <Sixth />;
    } else if (step === 7) {
        page = <Seventh />;
    } else if (step === 8) {
        page = <Eight />;
    } else if (step === 9) {
        page = <Ninth />;
    } else if (step === 10) {
        page = <Tenth />;
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
