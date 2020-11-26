import React from "react";
import { Frame } from "framer";
import styles from "./tenth.module.css";

export default function TenthImageLayer({ isMobile }) {
    return (
        <React.Fragment>
            <Frame
                background={"url(/images/narance.png)"}
                style={{
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 10,
                }}
                center
                size={"100%"}
            >
                <img
                    src="/images/doki-i-ale_FRONT.png"
                    alt="girls"
                    className={styles.img}
                />
            </Frame>
            <Frame
                background={"none"}
                style={{
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: -1,
                }}
                center
                size={"100%"}
            >
                <img
                    src="/images/doki-i-ale_BACK.png"
                    alt="girls"
                    className={styles.img}
                />
                <Frame
                    center
                    style={{ zIndex: -2 }}
                    width={isMobile ? "100%" : "34%"}
                    height={"100%"}
                    backgroundColor={"#ff5757"}
                />
            </Frame>
        </React.Fragment>
    );
}
