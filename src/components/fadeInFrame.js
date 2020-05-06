import React from "react";
import { Frame } from "framer";

export default function FadeInFrame(props) {
    return (
        <Frame
            background={"none"}
            variants={props.variantsVisibility}
            initial={"hidden"}
            animate={props.scrollY >= props.treshold ? "visible" : "hidden"}
            width={500}
            style={props.style}
            top={props.top}
            center={props.center}
        >
            {props.text}
            {props.src && <img src={props.src} alt={props.alt} />}
        </Frame>
    );
}
