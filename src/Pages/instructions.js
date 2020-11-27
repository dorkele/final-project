import React from "react";
import styles from "./instructions.module.css";
import {
    croInstructionsTitle,
    engInstructionsTitle,
    croInstructionsText,
    engInstructionsText,
} from "../text";

export default function Instructions({ language, setInstructions }) {
    console.log(language);
    return (
        <div className={styles.overlay}>
            <div className={`${styles.container} ${styles.scrollbar}`}>
                <div
                    className={styles.iks}
                    onClick={() => setInstructions(false)}
                >
                    X
                </div>
                <div className={styles.title}>
                    {language === "croatian"
                        ? croInstructionsTitle
                        : engInstructionsTitle}
                </div>
                <div className={styles.text}>
                    {language === "croatian"
                        ? croInstructionsText
                        : engInstructionsText}
                </div>
            </div>
        </div>
    );
}
