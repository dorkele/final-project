import React from "react";
import { Frame } from "framer";

export default function Background({ isMobile }) {
    return (
        <React.Fragment>
            <Frame
                background={"url('/images/dandelion-snow.png')"}
                style={{
                    backgroundRepeat: "repeat",
                    opacity: 0.7,
                }}
                // size={isMobile ? "170%" : "100%"}
                size={"100%"}
                x={0}
                y={-20}
                animate={{ x: -25, y: 0 }}
                transition={{ duration: 5, yoyo: "Infinity" }}
            ></Frame>
        </React.Fragment>
    );
}
