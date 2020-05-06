import React from "react";
import { Frame } from "framer";

export default function VideoFixedCenter(props) {
    return (
        <Frame
            center
            size={"100%"}
            position={"fixed"}
            background={"none"}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <video autoPlay={true} muted={true} loop={true}>
                <source src={props.src} type="video/mp4"></source>
            </video>
        </Frame>
    );
}
