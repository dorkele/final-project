import React from "react";
import { Frame } from "framer";

export default function SeventhImageLayer() {
    return (
        <React.Fragment>
            <Frame
                background={"url('/images/dandelion-snow.png')"}
                style={{
                    backgroundRepeat: "repeat",
                    position: "fixed",
                    opacity: 0.7,
                }}
                top={0}
                size={"100%"}
                animate={{ x: 20, y: -20 }}
                transition={{ duration: 5, yoyo: "Infinity" }}
            ></Frame>
        </React.Fragment>
    );
}
