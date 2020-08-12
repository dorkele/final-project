import React, { useState } from "react";
import { Frame } from "framer";

export default function FoldedPaper({ randomX, randomY }) {
    const [hover, setHover] = useState(false);
    const [touch, setTouch] = useState(false);

    function onHoverStart() {
        setHover(true);
    }
    function onTouchStart() {
        setTouch(true);
    }

    return (
        <React.Fragment>
            <Frame
                background={"none"}
                top={randomX}
                left={randomY}
                animate={{ visibility: hover || touch ? "hidden" : "visible" }}
                onHoverStart={onHoverStart}
                onTouchStart={onTouchStart}
            >
                <img
                    src="/images/zguzvani-papir.png"
                    alt="folded-paper"
                    height="100%"
                />
            </Frame>
        </React.Fragment>
    );
}
