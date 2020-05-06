import React from "react";
import { Frame } from "framer";

export default function BlinkingText(props) {
    return (
        <Frame
            center
            width={props.width}
            variants={props.variantsVisibility}
            initial={"hidden"}
            animate={"visible"}
            backgroundColor={"none"}
            style={props.style}
            transition={{ duration: 2, yoyo: "Infinity" }}
        >
            {props.text}
        </Frame>
    );
}
