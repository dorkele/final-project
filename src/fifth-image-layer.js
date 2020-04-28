import React, { useEffect } from "react";
import { Frame } from "framer";

export default function FifthImageLayer({ variantsVisibility, scrollY }) {
    console.log("bkjfdskskbcdk");

    return (
        <React.Fragment>
            <Frame
                variants={variantsVisibility}
                animate={scrollY >= 50 ? "visible" : "hidden"}
                backgroundColor={"none"}
                initial={"hidden"}
                style={{
                    position: "fixed",
                    height: "100%",
                }}
                top={0}
            >
                <img src="/images/left/left_1.png" alt="sea-sun" />
            </Frame>
            <Frame
                variants={variantsVisibility}
                animate={scrollY >= 150 ? "visible" : "hidden"}
                backgroundColor={"none"}
                initial={"hidden"}
                style={{
                    position: "fixed",
                    height: "100%",
                }}
                top={0}
            >
                <img src="/images/left/left_2.png" alt="astronaut" />
            </Frame>
            <Frame
                variants={variantsVisibility}
                animate={scrollY >= 250 ? "visible" : "hidden"}
                backgroundColor={"none"}
                initial={"hidden"}
                style={{
                    position: "fixed",
                    height: "100%",
                }}
                top={0}
            >
                <img src="/images/left/left_3.png" alt="face" />
            </Frame>
            <Frame
                variants={variantsVisibility}
                animate={scrollY >= 350 ? "visible" : "hidden"}
                backgroundColor={"none"}
                initial={"hidden"}
                style={{
                    position: "fixed",
                    height: "100%",
                }}
                top={0}
            >
                <img src="/images/left/left_4.png" alt="hand" />
            </Frame>
            <Frame
                variants={variantsVisibility}
                animate={scrollY >= 450 ? "visible" : "hidden"}
                backgroundColor={"none"}
                initial={"hidden"}
                style={{
                    position: "fixed",
                    height: "100%",
                }}
                top={0}
            >
                <img src="/images/left/left_5.png" alt="worms1" />
            </Frame>
            <Frame
                variants={variantsVisibility}
                animate={scrollY >= 550 ? "visible" : "hidden"}
                backgroundColor={"none"}
                initial={"hidden"}
                style={{
                    position: "fixed",
                    height: "100%",
                }}
                top={0}
            >
                <img src="/images/left/left_6.png" alt="worms2" />
            </Frame>
            <Frame
                variants={variantsVisibility}
                animate={scrollY >= 650 ? "visible" : "hidden"}
                backgroundColor={"none"}
                initial={"hidden"}
                style={{
                    position: "fixed",
                    height: "100%",
                }}
                top={0}
            >
                <img src="/images/left/left_7.png" alt="worms3" />
            </Frame>
        </React.Fragment>
    );
}
