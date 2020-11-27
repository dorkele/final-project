import React from "react";
import { Frame } from "framer";
import styles from "./tenth/tenth.module.css";
import TenthImageLayer from "./tenth/tenthImageLayer";
import { croTenthText, engTenthText } from "../text";

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
                    {language === "croatian" ? croTenthText : engTenthText}
                </Frame>
            </div>
        </React.Fragment>
    );
}
