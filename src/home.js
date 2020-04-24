import React from "react";
import FoldedPaper from "./home-image-layer";
import "./home.css";

export default function Home() {
    //let randomX = Math.random(500);
    //let randomY = Math.random(800);
    let randomXArray = [];

    for (let i = 0; i < 30; i++) {
        randomXArray.push(Math.round(Math.random() * 500));
    }
    let randomYArray = [];
    for (let i = 0; i < 30; i++) {
        randomYArray.push(Math.round(Math.random() * 1250));
    }
    return (
        <div className="wrapping-container">
            <div className="title">Žudnja Za Smakom</div>
            <div className="subtitle">
                A story about two drunk girls romaniticizing apocalypse.
            </div>
            <div className="subtitle">
                Navigate through their chaotic thoughts by clickig through
                sections, scrolling, hovering, clicking on the links...and see
                where the story takes you.
            </div>
            <div className="start">START</div>
            <FoldedPaper randomX={randomXArray[1]} randomY={randomYArray[1]} />
            <FoldedPaper randomX={randomXArray[2]} randomY={randomYArray[2]} />
            <FoldedPaper randomX={randomXArray[3]} randomY={randomYArray[3]} />
            <FoldedPaper randomX={randomXArray[4]} randomY={randomYArray[4]} />
            <FoldedPaper randomX={randomXArray[5]} randomY={randomYArray[5]} />
            <FoldedPaper randomX={randomXArray[6]} randomY={randomYArray[6]} />
            <FoldedPaper randomX={randomXArray[7]} randomY={randomYArray[7]} />
            <FoldedPaper randomX={randomXArray[8]} randomY={randomYArray[8]} />
            <FoldedPaper randomX={randomXArray[9]} randomY={randomYArray[9]} />
            <FoldedPaper
                randomX={randomXArray[10]}
                randomY={randomYArray[10]}
            />
            <FoldedPaper
                randomX={randomXArray[11]}
                randomY={randomYArray[11]}
            />
            <FoldedPaper
                randomX={randomXArray[12]}
                randomY={randomYArray[13]}
            />
            <FoldedPaper
                randomX={randomXArray[14]}
                randomY={randomYArray[15]}
            />
            <FoldedPaper
                randomX={randomXArray[16]}
                randomY={randomYArray[17]}
            />
            <FoldedPaper
                randomX={randomXArray[18]}
                randomY={randomYArray[19]}
            />
            <FoldedPaper
                randomX={randomXArray[21]}
                randomY={randomYArray[21]}
            />
            <FoldedPaper
                randomX={randomXArray[22]}
                randomY={randomYArray[22]}
            />
            <FoldedPaper
                randomX={randomXArray[23]}
                randomY={randomYArray[23]}
            />
            <FoldedPaper
                randomX={randomXArray[24]}
                randomY={randomYArray[24]}
            />
            <FoldedPaper
                randomX={randomXArray[25]}
                randomY={randomYArray[25]}
            />
            <FoldedPaper
                randomX={randomXArray[26]}
                randomY={randomYArray[26]}
            />
            <FoldedPaper
                randomX={randomXArray[27]}
                randomY={randomYArray[27]}
            />
            <FoldedPaper
                randomX={randomXArray[28]}
                randomY={randomYArray[28]}
            />
            <FoldedPaper
                randomX={randomXArray[29]}
                randomY={randomYArray[29]}
            />
            <FoldedPaper
                randomX={randomXArray[30]}
                randomY={randomYArray[30]}
            />
        </div>
    );
}
