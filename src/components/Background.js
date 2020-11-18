import React from "react";
import { Frame } from "framer";

export default function Background() {
    return (
        <React.Fragment>
            <Frame
                background={"url('/images/dandelion-snow.png')"}
                style={{
                    backgroundRepeat: "repeat",
                    // position: "fixed",
                    opacity: 0.7,
                    height: "100vh",
                    width: "100vw",
                }}
                top={0}
                animate={{ x: 20, y: -20 }}
                transition={{ duration: 5, yoyo: "Infinity" }}
            ></Frame>
        </React.Fragment>
    );
}
