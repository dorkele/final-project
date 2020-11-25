import React from "react";
import { Frame } from "framer";
import styles from "./background.module.css";
import { useMediaQuery } from "react-responsive";

export default function Background() {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <React.Fragment>
            <Frame
                background={"url('/images/dandelion-snow.png')"}
                style={{
                    backgroundRepeat: "repeat",
                    opacity: 0.7,
                    // height: "170%",
                    // width: "170%",
                }}
                size={isMobile ? "170%" : "100%"}
                className={styles.background}
                x={0}
                y={-20}
                animate={{ x: -25, y: 0 }}
                transition={{ duration: 5, yoyo: "Infinity" }}
            ></Frame>
        </React.Fragment>
    );
}
