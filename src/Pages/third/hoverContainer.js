import React from "react";
import { Frame } from "framer";

export default function HoverContainer({ visible }) {
    let src, alt;

    if (visible === 1) {
        src = "/images/bread.png";
        alt = "bread";
    } else if (visible === 2) {
        src = "/images/lips2.png";
        alt = "lips";
    } else if (visible === 3) {
        src = "/images/red-sea.png";
        alt = "red-sea";
    } else if (visible === 4) {
        src = "/images/use-me.png";
        alt = "use-me";
    } else if (visible === 5) {
        src = "/images/ghosts.png";
        alt = "ghosts";
    } else if (visible === 6) {
        src = "/images/zenska-intuicija.png";
        alt = "intuition";
    } else if (visible === 7) {
        src = "/images/dragon-balls.jpg";
        alt = "dragon-balls";
    } else if (visible === 8) {
        src = "/images/nothing.jpg";
        alt = "nothing";
    } else if (visible === 9) {
        src = "/images/dog-duck.jpg";
        alt = "dog-duck";
    } else if (visible === 10) {
        src = "/images/magritte.png";
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
