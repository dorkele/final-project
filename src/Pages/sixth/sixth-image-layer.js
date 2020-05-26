import React from "react";
import { Frame } from "framer";

export default function SixthImageLayer() {
    return (
        <React.Fragment>
            <Frame left={70} top={80} backgroundColor="none" size={"150%"}>
                <img src="/images/tree.jpg" alt="tree" height="110%" />
            </Frame>
            <Frame left={500} top={230} backgroundColor="none">
                <img src="/images/zavjesa.jpg" alt="curtain" height="100%" />
            </Frame>
            <Frame left={1050} top={50} backgroundColor="none" size={"150%"}>
                <img
                    src="/images/prozor.jpg"
                    alt="green window"
                    height="100%"
                />
            </Frame>
            <Frame left={1650} top={0} backgroundColor="none" size={"140%"}>
                <img src="/images/sobbing.jpg" alt="sobbing" height="100%" />
            </Frame>
            <Frame left={2250} top={250} backgroundColor="none" size={"170%"}>
                <img
                    src="/images/full-moon.jpg"
                    alt="full-moon"
                    height="100%"
                />
            </Frame>
            <Frame left={2750} backgroundColor="none" size={"160%"}>
                <img src="/images/panic.jpg" alt="panic" height="100%" />
            </Frame>
        </React.Fragment>
    );
}
