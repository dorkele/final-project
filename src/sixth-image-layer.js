import React from "react";
import { Frame } from "framer";

export default function SixthImageLayer() {
    return (
        <div>
            <Frame left={70} top={100} backgroundColor="none" size={"60%"}>
                <img
                    src="/images/girl-dancing.png"
                    alt="girl-dancing"
                    height="80%"
                />
            </Frame>
            <Frame left={700} top={230} backgroundColor="none" size={"60%"}>
                <img src="/images/eowyn.png" alt="eowyn" height="40%" />
            </Frame>
            <Frame left={1050} top={50} backgroundColor="none" size={"60%"}>
                <img src="/images/the-and.png" alt="the-and" height="70%" />
            </Frame>
            <Frame left={1650} top={50} backgroundColor="none" size={"60%"}>
                <img
                    src="/images/creepy-doll.jpg"
                    alt="creepy-doll"
                    height="50%"
                />
            </Frame>
            <Frame left={2350} top={300} backgroundColor="none" size={"60%"}>
                <img src="/images/full-moon.jpg" alt="full-moon" height="70%" />
            </Frame>
            <Frame left={2750} top={100} backgroundColor="none" size={"60%"}>
                <img
                    src="/images/space-hand.jpg"
                    alt="space-hand"
                    height="90%"
                />
            </Frame>
        </div>
    );
}
