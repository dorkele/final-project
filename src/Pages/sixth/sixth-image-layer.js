import React from "react";
import { Frame } from "framer";

export default function SixthImageLayer() {
    return (
        <React.Fragment>
            <Frame left={70} top={80} backgroundColor="none" size={"150%"}>
                <img
                    src="/images/girl-dancing.png"
                    alt="girl-dancing"
                    height="110%"
                />
            </Frame>
            <Frame left={500} top={230} backgroundColor="none">
                <img src="/images/eowyn.png" alt="eowyn" height="100%" />
            </Frame>
            <Frame left={1000} top={50} backgroundColor="none" size={"150%"}>
                <img src="/images/the-and.png" alt="the-and" height="100%" />
            </Frame>
            <Frame left={1650} top={50} backgroundColor="none" size={"110%"}>
                <img
                    src="/images/creepy-doll.jpg"
                    alt="creepy-doll"
                    height="100%"
                />
            </Frame>
            <Frame left={2250} top={250} backgroundColor="none" size={"170%"}>
                <img
                    src="/images/full-moon.jpg"
                    alt="full-moon"
                    height="100%"
                />
            </Frame>
            <Frame left={2750} backgroundColor="none" size={"160%"}>
                <img
                    src="/images/space-hand.jpg"
                    alt="space-hand"
                    height="100%"
                />
            </Frame>
        </React.Fragment>
    );
}
