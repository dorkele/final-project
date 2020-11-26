import React from "react";
import { Frame } from "framer";

export default function FadeOutFrame(props) {
    return (
        <Frame
            // position={"fixed"}
            backgroundColor={"none"}
            width={props.width}
            style={props.style}
            variants={props.variantsVisibility}
            animate={props.scrollY >= props.treshold ? "hidden" : "visible"}
            center={!props.center ? false : true}
            top={props.top}
            left={props.left}
        >
            {props.text}
            {props.src && (
                <img
                    src={props.src}
                    alt={props.alt}
                    style={props.isMobile ? { width: "100%" } : null}
                />
            )}
        </Frame>
    );
}
