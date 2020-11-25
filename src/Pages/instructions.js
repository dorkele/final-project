import React from "react";

const englishText = `jdklsjaö 
jkslajsöa`;

export default function Instructions() {
    return (
        <div>
            {englishText}
            <div>A story about two drunk girls romaniticizing apocalypse.</div>
            <div>
                Navigate through the hypertext of their chaotic minds by
                clicking, scrolling and hovering...and see where the story takes
                you...Bear in mind: there is no one or right way to read.
            </div>
        </div>
    );
}
