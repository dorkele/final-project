import React from "react";
import { Frame } from "framer";
import "./eight.css";

export default function EightImageLayer({ scrollY }) {
    const variantsOpacity = {
        initial: {
            opacity: 0.3,
        },
        active: {
            opacity: 1,
        },
    };
    return (
        <React.Fragment>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                top={100}
                style={{ zIndex: -1 }}
                width={"30%"}
                initial={"active"}
                animate={scrollY >= 60 ? "initial" : "active"}
                className={scrollY >= 100 ? "hidden" : "black"}
            >
                <img src="/images/anger.jpg" alt="anger-quote" width="100%" />
            </Frame>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                initial={"initial"}
                animate={scrollY >= 60 ? "active" : "initial"}
                className={scrollY >= 100 ? "hidden" : "black"}
                top={110}
                left={500}
                style={{ zIndex: -1 }}
            >
                <img src="/images/body.jpg" alt="body-quote" />
            </Frame>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                initial={"initial"}
                left={700}
                animate={scrollY >= 100 ? "active" : "initial"}
                className={scrollY >= 150 ? "hidden" : "black"}
                top={400}
                style={{ zIndex: -1 }}
            >
                <img src="/images/personality.jpg" alt="personality-quote" />
            </Frame>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                initial={"initial"}
                left={50}
                animate={scrollY >= 150 ? "active" : "initial"}
                className={scrollY >= 200 ? "hidden" : "black"}
                top={400}
                style={{ zIndex: -1 }}
            >
                <img src="/images/pink-meme.jpg" alt="pink-meme" />
            </Frame>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                initial={"initial"}
                left={100}
                animate={scrollY >= 200 ? "active" : "initial"}
                className={scrollY >= 250 ? "hidden" : "black"}
                top={100}
                style={{ zIndex: -1 }}
            >
                <img src="/images/rebel.jpg" alt="rebel-quote" />
            </Frame>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                initial={"initial"}
                left={700}
                animate={scrollY >= 300 ? "active" : "initial"}
                className={scrollY >= 350 ? "hidden" : "black"}
                top={500}
                style={{ zIndex: -1 }}
            >
                <img src="/images/scream.jpg" alt="scream-quote" />
            </Frame>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                initial={"initial"}
                left={700}
                animate={scrollY >= 400 ? "active" : "initial"}
                className={scrollY >= 450 ? "hidden" : "black"}
                top={50}
                style={{ zIndex: -1 }}
            >
                <img src="/images/suffering.jpg" alt="suffering-quote" />
            </Frame>
            <Frame
                background={"none"}
                position={"fixed"}
                variants={variantsOpacity}
                initial={"initial"}
                left={950}
                animate={scrollY >= 500 ? "active" : "initial"}
                top={250}
                style={{ zIndex: -1 }}
            >
                <img src="/images/tired.jpg" alt="tired-quote" />
            </Frame>
        </React.Fragment>
    );
}
