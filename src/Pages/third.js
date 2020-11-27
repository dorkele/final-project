import React, { useState } from "react";
import { Frame } from "framer";
import HoverContainer from "./third/hoverContainer";
import styles from "./third/third.module.css";
import {
    croThirdText1,
    engThirdText1,
    croThirdText2,
    engThirdText2,
    croThirdText3,
    engThirdText3,
    croThirdText4,
    engThirdText4,
    croThirdText5,
    engThirdText5,
    croThirdText6,
    engThirdText6,
    croThirdText7,
    engThirdText7,
    croThirdText8,
    engThirdText8,
    croThirdText9,
    engThirdText9,
    croThirdText10,
    engThirdText10,
    croThirdText11,
    engThirdText11,
    croThirdText12,
    engThirdText12,
    croThirdText13,
    engThirdText13,
    croThirdText14,
    engThirdText14,
    croThirdText15,
    engThirdText15,
    croThirdText16,
    engThirdText16,
    croThirdText17,
    engThirdText17,
    croThirdText18,
    engThirdText18,
    croThirdText19,
    engThirdText19,
    croThirdText20,
    engThirdText20,
} from "../text";

export default function Third({ scrollY, getSteppers, language, isMobile }) {
    const [visible, setVisible] = useState(0);
    if (scrollY > 10) {
        getSteppers(true);
    }

    return (
        <React.Fragment>
            <div className={styles.scroll_container}>
                <Frame
                    width={"80%"}
                    height={"70%"}
                    center
                    backgroundColor="none"
                    style={
                        isMobile
                            ? { fontSize: 20, textAlign: "center" }
                            : { fontSize: 40, textAlign: "center" }
                    }
                >
                    {language === "croatian" ? croThirdText1 : engThirdText1}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=8whTAkkBv6U"
                        onMouseEnter={() => setVisible(1)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText2
                            : engThirdText2}
                    </a>
                    {language === "croatian" ? croThirdText3 : engThirdText3}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://collection.eliterature.org/1/works/jackson__my_body_a_wunderkammer/index.html"
                        onMouseEnter={() => setVisible(2)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText4
                            : engThirdText4}
                    </a>
                    {language === "croatian" ? croThirdText5 : engThirdText5}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Crying"
                        onMouseEnter={() => setVisible(3)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText6
                            : engThirdText6}
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.nts.live/shows/literaryfriction"
                        onMouseEnter={() => setVisible(4)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText7
                            : engThirdText7}
                    </a>
                    {language === "croatian" ? croThirdText8 : engThirdText8}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://hexenloveletters.tumblr.com/"
                        onMouseEnter={() => setVisible(5)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText9
                            : engThirdText9}
                    </a>
                    {language === "croatian" ? croThirdText10 : engThirdText10}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://lithub.com/on-whiteness-and-the-racial-imaginary/"
                        onMouseEnter={() => setVisible(6)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText11
                            : engThirdText11}
                    </a>
                    {language === "croatian" ? croThirdText12 : engThirdText12}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.nytimes.com/2019/01/03/magazine/driving-living-reality.html"
                        onMouseEnter={() => setVisible(7)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText13
                            : engThirdText13}
                    </a>
                    {language === "croatian" ? croThirdText14 : engThirdText14}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://zagrebfilm.hr/odrasti-u-malo-drvo/"
                        onMouseEnter={() => setVisible(8)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText15
                            : engThirdText15}
                    </a>
                    {language === "croatian" ? croThirdText16 : engThirdText16}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.solitr.com/spider-solitaire-four-suits"
                        onMouseEnter={() => setVisible(9)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText17
                            : engThirdText17}
                    </a>
                    {language === "croatian" ? croThirdText18 : engThirdText18}

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=v7rf-MWSqc0"
                        onMouseEnter={() => setVisible(10)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {language === "croatian"
                            ? croThirdText19
                            : engThirdText19}
                    </a>
                    {language === "croatian" ? croThirdText20 : engThirdText20}
                </Frame>
            </div>
            <HoverContainer visible={visible} />
        </React.Fragment>
    );
}
