import React from "react";
import { Frame } from "framer";
import styles from "./tenth/tenth.module.css";
import TenthImageLayer from "./tenth/tenthImageLayer";

export default function Tenth({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
    isMobile,
}) {
    if (scrollY > 152) {
        getSteppers(true);
    }

    let text;

    if (language === "croatian") {
        text =
            "Jedna od čudnijih večeri, jedna od onih kada si toliko zaokupljen sobom da ni ne primijetiš da je sunce izišlo na zapadu. „To što u glavi znaš kako ide neka pjesma ne znači da ćeš je na glas znati otpjevati.“, zaključila je naposljetku. „Jesu li muze oduvijek bile ovako mudra stvorenja?“, smijale smo se do zauvijek.";
    } else {
        text =
            "One of those weird evenings, one when you are so preoccupied with yourself that you don't even notice that the sun rose in the west. „Knowing a song in your head does not mean you will be able to sing it out loud.”, she concluded ultimately. „Have the muses always been such wise creatures?”, we laughed until forever.";
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <TenthImageLayer isMobile={isMobile} />
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        width: "50%",
                        height: 30,
                        whiteSpace: "nowrap",
                        fontSize: 30,
                        color: "white",
                        fontWeight: "bold",
                    }}
                    top={"30%"}
                    initial={{ left: 1900 }}
                    animate={{ x: -3000 }}
                    transition={{ duration: 30 }}
                >
                    {text}
                </Frame>
            </div>
        </React.Fragment>
    );
}
