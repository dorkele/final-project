import React from "react";
import { Frame } from "framer";
import styles from "./tenth/tenth.module.css";
import TenthImageLayer from "./tenth/tenthImageLayer";

export default function Tenth({ variantsVisibility, scrollY, getSteppers }) {
    if (scrollY > 152) {
        getSteppers(true);
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <TenthImageLayer />
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
                    Jedna od čudnijih večeri, jedna od onih kada si toliko
                    zaokupljen sobom da ni ne primijetiš da je sunce izišlo na
                    zapadu. „To što u glavi znaš kako ide neka pjesma ne znači
                    da ćeš je na glas znati otpjevati.“, zaključila je
                    naposljetku. „Jesu li muze oduvijek bile ovako mudra
                    stvorenja?“, smijale smo se do zauvijek.
                </Frame>
            </div>
        </React.Fragment>
    );
}
