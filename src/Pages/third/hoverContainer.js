import React from "react";
import { Frame } from "framer";

export default function HoverContainer({ visible }) {
    let src, alt;

    if (visible === 1) {
        src = "/images/2.jpg";
        alt = "bread";
    } else if (visible === 2) {
        src = "/images/5.jpg";
        alt = "lips";
    } else if (visible === 3) {
        src = "/images/6.jpg";
        alt = "red-sea";
    } else if (visible === 4) {
        src = "/images/7.jpg";
        alt = "use-me";
    } else if (visible === 5) {
        src = "/images/8.jpg";
        alt = "ghosts";
    } else if (visible === 6) {
        src = "/images/4.jpg";
        alt = "intuition";
    } else if (visible === 7) {
        src = "/images/3.jpg";
        alt = "dragon-balls";
    } else if (visible === 8) {
        src = "/images/1.jpg";
        alt = "nothing";
    } else if (visible === 9) {
        src = "/images/9.jpg";
        alt = "dog-duck";
    } else if (visible === 10) {
        src = "/images/10.jpg";
        alt = "magritte";
    }
    return (
        <Frame
            style={{
                background: "none",
            }}
            top={0}
        >
            <img src={src} alt={alt} height="100%"></img>
        </Frame>
    );
}
