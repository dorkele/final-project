import React from "react";
import { Frame } from "framer";

export default function FadeOutFrame(props) {
    return (
        <Frame
            position={"fixed"}
            backgroundColor={"none"}
            width={props.width}
            style={props.style}
            variants={props.variantsVisibility}
            animate={props.scrollY >= props.treshold ? "hidden" : "visible"}
            center={props.center}
        >
            {props.text}
        </Frame>
    );
}
