import React from "react";
import { Frame } from "framer";

export default function FadeInFadeOutFrame(props) {
    return (
        <Frame
            center={props.center}
            position={"fixed"}
            backgroundColor={"none"}
            variants={props.variantsVisibility}
            initial={{ opacity: 0 }}
            animate={props.scrollY >= props.treshold ? "visible" : "hidden"}
            className={props.scrollY >= props.tresholdOut ? "hidden" : "black"}
            style={props.style}
            width={props.width}
        >
            {props.text}
        </Frame>
    );
}
