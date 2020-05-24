import React from "react";
import FoldedPaper from "./home/home-foldedpaper";
import styles from "./home/home.module.css";

export default function Home(props) {
    let randomXArray = [];

    for (let i = 0; i < 30; i++) {
        randomXArray.push(Math.round(Math.random() * 500));
    }
    let randomYArray = [];
    for (let i = 0; i < 30; i++) {
        randomYArray.push(Math.round(Math.random() * 1250));
    }
    function sendStep(step) {
        props.getStep(step);
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Žudnja Za Smakom</div>
            <div className={styles.subtitle}>
                A story about two drunk girls romaniticizing apocalypse.
            </div>
            <div className={styles.sub}>
                Navigate through the hypertext of their chaotic minds by
                clicking, scrolling and hovering...and see where the story takes
                you...Bear in mind: there is no one or right way to read.
            </div>
            <button className={styles.start} onClick={() => sendStep(1)}>
                START
            </button>

            {randomXArray.map((val, index) => {
                return (
                    <FoldedPaper
                        key={index}
                        randomX={randomXArray[index]}
                        randomY={randomYArray[index]}
                    />
                );
            })}
        </div>
    );
}
