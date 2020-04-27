import React from "react";
import { Frame } from "framer";

export default function TenthHahahaLayer() {
    return (
        <React.Fragment>
            <Frame
                background={"none"}
                style={{
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                }}
                center
                size={"100%"}
            >
                <img src="/images/doki-i-ale_FRONT.png" alt="girls" />
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
                <img src="/images/doki-i-ale_BACK.png" alt="girls" />
                <Frame
                    background={"#ff5757"}
                    center
                    style={{ zIndex: -2 }}
                    size={"48%"}
                />
            </Frame>
        </React.Fragment>
    );
}
