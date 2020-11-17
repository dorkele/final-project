import React from "react";
import FoldedPaper from "./home/home-foldedpaper";
import styles from "./home/home.module.css";
import Background from "../components/Background";

export default function Home(props) {
    let randomXArray = [];

    for (let i = 0; i < 30; i++) {
        randomXArray.push(Math.round(Math.random() * 70) + "%");
    }
    let randomYArray = [];
    for (let i = 0; i < 30; i++) {
        randomYArray.push(Math.round(Math.random() * 83) + "%");
    }
    function sendStep(step) {
        props.getStep(step);
    }

    const titleCro = "Žudnja Za Smakom";
    const titleEng = "Apocalypse Dreams";

    return (
        <div className={styles.container}>
            <Background />
            <div className={styles.title}>
                {props.language === "croatian" ? titleCro : titleEng}
            </div>
            <div className={styles.languages}>
                <div onClick={() => props.getLanguage("croatian")}>
                    Croatian
                </div>
                <div onClick={() => props.getLanguage("english")}>English</div>
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
