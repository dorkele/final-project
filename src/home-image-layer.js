import React, { useState } from "react";
import { Frame } from "framer";

export default function FoldedPaper({ randomX, randomY }) {
    const [hover, setHover] = useState(false);

    function onHoverStart() {
        setHover(true);
    }

    return (
        <React.Fragment>
            <Frame
                background={"none"}
                top={randomX}
                left={randomY}
                animate={{ visibility: hover ? "hidden" : "visible" }}
                onHoverStart={onHoverStart}
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
