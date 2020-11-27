import React from "react";
import styles from "./second/second.module.css";
import FadeInFrame from "../components/fadeInFrame";
import BlinkingText from "../components/blinkingText";
import {
    croSecondText1,
    engSecondText1,
    croSecondText2,
    engSecondText2,
    croSecondText3,
    engSecondText3,
    croSecondText4,
    engSecondText4,
} from "../text";

export default function Second({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
    isMobile,
}) {
    if (scrollY > 170) {
        getSteppers(true);
    }

    const style = isMobile
        ? { fontSize: "20px", color: "#ff5757" }
        : {
              fontSize: "25px",
              color: "#ff5757",
          };

    return (
        <React.Fragment>
            <div className={styles.textbox}>
                <FadeInFrame
                    text={
                        language === "croatian"
                            ? croSecondText1
                            : engSecondText1
                    }
                    style={style}
                    top={"30%"}
                    treshold={40}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    center="x"
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    text={
                        language === "croatian"
                            ? croSecondText2
                            : engSecondText2
                    }
                    style={style}
                    top={"60%"}
                    treshold={80}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    center="x"
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    text={
                        language === "croatian"
                            ? croSecondText3
                            : engSecondText3
                    }
                    style={style}
                    top={"90%"}
                    treshold={150}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    center="x"
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <BlinkingText
                    text={
                        language === "croatian"
                            ? croSecondText4
                            : engSecondText4
                    }
                    variantsVisibility={variantsVisibility}
                    width={isMobile ? "100%" : 700}
                    style={
                        isMobile
                            ? {
                                  fontSize: "100px",
                                  opacity: 0,
                                  position: "fixed",
                                  zIndex: -1,
                              }
                            : {
                                  fontSize: "200px",
                                  opacity: 0,
                                  position: "fixed",
                                  zIndex: -1,
                              }
                    }
                    isMobile={isMobile}
                />
            </div>
        </React.Fragment>
    );
}
