import React from "react";
import { Frame } from "framer";

export default function OpacityFadeInFadeOut(props) {
    return (
        <Frame
            center={props.center}
            position={"fixed"}
            backgroundColor={"none"}
            variants={props.variantsOpacity}
            initial={"initial"}
            animate={
                props.scrollY >= props.treshold &&
                props.scrollY < props.tresholdOut
                    ? "active"
                    : "initial"
            }
            style={props.style}
            width={props.width}
            left={props.left}
            top={props.top}
        >
            {props.text}
            {props.src && <img src={props.src} alt={props.alt} />}
        </Frame>
    );
}
