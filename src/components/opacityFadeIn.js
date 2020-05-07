import React from "react";
import { Frame } from "framer";

export default function FadeInFrame(props) {
    return (
        <Frame
            background={"none"}
            variants={props.variantsOpacity}
            initial={"initial"}
            animate={props.scrollY >= props.treshold ? "active" : "initial"}
            width={500}
            style={props.style}
            top={props.top}
            left={props.left}
            center={props.center}
        >
            {props.text}
            {props.src && <img src={props.src} alt={props.alt} />}
        </Frame>
    );
}
