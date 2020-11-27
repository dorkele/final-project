import React from "react";
import styles from "./seventh/seventh.module.css";
import FadeInFrame from "../components/fadeInFrame";
import Background from "../components/Background";
import {
    croSeventhText1,
    engSeventhText1,
    croSeventhText2,
    engSeventhText2,
    croSeventhText3,
    engSeventhText3,
    croSeventhText4,
    engSeventhText4,
    croSeventhText5,
    engSeventhText5,
} from "../text";

export default function Seventh({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
    isMobile,
}) {
    if (scrollY > 1270) {
        getSteppers(true);
    }

    const styleBig = { fontSize: 60, textAlign: "center" };
    const styleSmall = { fontSize: 30, textAlign: "center" };

    return (
        <React.Fragment>
            <div className={styles.container}>
                <Background />
                <FadeInFrame
                    style={styleSmall}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={40}
                    top={"40%"}
                    text={
                        language === "croatian"
                            ? croSeventhText1
                            : engSeventhText1
                    }
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={100}
                    top={"70%"}
                    text={
                        language === "croatian"
                            ? croSeventhText2
                            : engSeventhText2
                    }
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={400}
                    top={"100%"}
                    text={
                        language === "croatian"
                            ? croSeventhText3
                            : engSeventhText3
                    }
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={700}
                    top={"150%"}
                    text={
                        language === "croatian"
                            ? croSeventhText4
                            : engSeventhText4
                    }
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    style={styleSmall}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={900}
                    top={"220%"}
                    text={
                        language === "croatian"
                            ? croSeventhText5
                            : engSeventhText5
                    }
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
            </div>
        </React.Fragment>
    );
}
