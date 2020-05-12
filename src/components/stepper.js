import React from "react";
import "./stepper.css";
import { Frame } from "framer";

export default function Stepper({ getStep, steppers }) {
    function sendStep(step) {
        getStep(step);
        window.scrollTo(0, 0);
    }

    const variants = {
        slideIn: {
            y: -100,
        },
        slideOut: {
            y: 100,
        },
    };

    return (
        <Frame
            variants={variants}
            animate={steppers ? "slideIn" : "slideOut"}
            transition={{ duration: 1 }}
            className="stepper-container"
            width={"100%"}
            height={100}
            backgroundColor={"#ff5757"}
            style={{
                bottom: -100,
                position: "fixed",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <button
                className="home-btn buttons"
                onClick={() => sendStep(0)}
            ></button>
            <button
                className="one-btn buttons"
                onClick={() => sendStep(1)}
            ></button>
            <button
                className="two-btn buttons"
                onClick={() => sendStep(2)}
            ></button>
            <button
                className="three-btn buttons"
                onClick={() => sendStep(3)}
            ></button>
            <button
                className="four-btn buttons"
                onClick={() => sendStep(4)}
            ></button>
            <button
                className="five-btn buttons"
                onClick={() => sendStep(5)}
            ></button>
            <button
                className="six-btn buttons"
                onClick={() => sendStep(6)}
            ></button>
            <button
                className="seven-btn buttons"
                onClick={() => sendStep(7)}
            ></button>
            <button
                className="eight-btn buttons"
                onClick={() => sendStep(8)}
            ></button>
            <button
                className="nine-btn buttons"
                onClick={() => sendStep(9)}
            ></button>
            <button
                className="ten-btn buttons"
                onClick={() => sendStep(10)}
            ></button>
            {/* {step > 0 && (
                    <button onClick={() => sendStep(step - 1)}>Previous</button>
                )}
                
                

                {step < 10 && (
                    <button onClick={() => sendStep(step + 1)}>Next</button>
                )}*/}
        </Frame>
    );
}
