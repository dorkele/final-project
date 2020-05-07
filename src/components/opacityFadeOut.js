import React from "react";
import { Frame } from "framer";

export default function opacityFadeOut(props) {
    return (
        <Frame
            background={"none"}
            variants={props.variantsOpacity}
            initial={"active"}
            animate={props.scrollY >= props.treshold ? "initial" : "active"}
            width={props.width}
            style={props.style}
            top={props.top}
            center={props.center}
        >
            {props.text}
            {props.src && <img src={props.src} alt={props.alt} />}
        </Frame>
    );
}
