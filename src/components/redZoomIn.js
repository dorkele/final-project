import React from "react";
import { Frame } from "framer";

export default function RedZoomIn(props) {
    return (
        <Frame
            backgroundColor="none"
            style={{ fontSize: props.fontSize }}
            top={props.top}
            left={props.left}
            center={props.center}
            variants={props.variantsVisibility}
            initial={"hidden"}
            animate={
                props.scrollY >= props.treshold
                    ? ["visible", "redZoom"]
                    : "hidden"
            }
            width={props.width}
        >
            {props.text}
        </Frame>
    );
}
