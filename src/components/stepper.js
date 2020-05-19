import React from "react";
import styles from "./stepper.module.css";
import { Frame } from "framer";

export default function Stepper({ getStep, steppers }) {
    function sendStep(step) {
        getStep(step);
        window.scrollTo(0, 0);
    }

    const variants = {
        slideIn: {
            y: "-100%",
        },
        slideOut: {
            y: "100%",
        },
    };

    return (
        <Frame
            variants={variants}
            animate={steppers ? "slideIn" : "slideOut"}
            transition={{ duration: 1 }}
            className={styles.container}
            width={"100%"}
            height={"14%"}
            backgroundColor={"#ff5757"}
            style={{
                position: "fixed",
                display: "flex",
                justifyContent: "center",
                bottom: "-14%",
            }}
        >
            <button
                className={`${styles.home} ${styles.buttons}`}
                onClick={() => sendStep(0)}
            ></button>
            <button
                className={`${styles.one} ${styles.buttons}`}
                onClick={() => sendStep(1)}
            ></button>
            <button
                className={`${styles.two} ${styles.buttons}`}
                onClick={() => sendStep(2)}
            ></button>
            <button
                className={`${styles.three} ${styles.buttons}`}
                onClick={() => sendStep(3)}
            ></button>
            <button
                className={`${styles.four} ${styles.buttons}`}
                onClick={() => sendStep(4)}
            ></button>
            <button
                className={`${styles.five} ${styles.buttons}`}
                onClick={() => sendStep(5)}
            ></button>
            <button
                className={`${styles.six} ${styles.buttons}`}
                onClick={() => sendStep(6)}
            ></button>
            <button
                className={`${styles.seven} ${styles.buttons}`}
                onClick={() => sendStep(7)}
            ></button>
            <button
                className={`${styles.eight} ${styles.buttons}`}
                onClick={() => sendStep(8)}
            ></button>
            <button
                className={`${styles.nine} ${styles.buttons}`}
                onClick={() => sendStep(9)}
            ></button>
            <button
                className={`${styles.ten} ${styles.buttons}`}
                onClick={() => sendStep(10)}
            ></button>
        </Frame>
    );
}
