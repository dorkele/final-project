import React from "react";
import { Frame } from "framer";

export default function FadeInFrame(props) {
    return (
        <Frame
            background={props.background || "none"}
            variants={props.variantsVisibility}
            initial={"hidden"}
            animate={
                props.isMobile || props.scrollY >= props.treshold
                    ? "visible"
                    : "hidden"
            }
            width={props.width || 500}
            height={props.height}
            style={props.style}
            top={props.top}
            left={props.left}
            center={!props.center ? false : true}
        >
            {props.text}
            {props.src && (
                <img src={props.src} alt={props.alt} style={props.imgStyle} />
            )}
        </Frame>
    );
}
