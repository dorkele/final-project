import React from "react";
import { Frame } from "framer";

export default function FadeInFadeOutFrame(props) {
    return (
        <Frame
            center={!props.center ? false : true}
            position={"fixed"}
            backgroundColor={"none"}
            variants={props.variantsVisibility}
            initial={{ opacity: 0 }}
            animate={
                props.scrollY >= props.treshold &&
                props.scrollY < props.tresholdOut
                    ? "visible"
                    : "hidden"
            }
            style={props.style}
            width={props.width}
            left={props.left}
            top={props.top}
        >
            {props.text}
        </Frame>
    );
}
