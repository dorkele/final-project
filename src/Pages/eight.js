import React from "react";
import styles from "./eight/eight.module.css";
import FadeOutFrame from "../components/fadeOutFrame";
import FadeInFadeOutFrame from "../components/fadeInFadeOutFrame";
import FadeInFrame from "../components/fadeInFrame";
import EightImageLayer from "./eight/eight-image-layer";
import {
    croEightText1,
    engEightText1,
    croEightText2,
    engEightText2,
    croEightText3,
    engEightText3,
    croEightText4,
    engEightText4,
    croEightText5,
    engEightText5,
    croEightText6,
    engEightText6,
    croEightText7,
    engEightText7,
    croEightText8,
    engEightText8,
} from "../text";

export default function Eight({
    variantsVisibility,
    scrollY,
    getSteppers,
    variantsOpacity,
    language,
    isMobile,
}) {
    if (scrollY > 570) {
        getSteppers(true);
    }

    const style = isMobile
        ? {
              backgroundColor: "none",
              position: "fixed",
              fontSize: 20,
              fontWeight: "bold",
          }
        : {
              backgroundColor: "none",
              position: "fixed",
              fontSize: 30,
              fontWeight: "bold",
          };

    return (
        <React.Fragment>
            <div className={styles.container}>
                <EightImageLayer
                    variantsOpacity={variantsOpacity}
                    scrollY={scrollY}
                />
                <FadeOutFrame
                    style={style}
                    width={isMobile ? "100%" : "53%"}
                    scrollY={scrollY}
                    treshold={60}
                    variantsVisibility={variantsVisibility}
                    left={isMobile ? 0 : "47%"}
                    top={"35%"}
                    text={
                        language === "croatian" ? croEightText1 : engEightText1
                    }
                />
                <FadeInFadeOutFrame
                    top={"40%"}
                    left={isMobile ? "20%" : "47%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={60}
                    tresholdOut={100}
                    text={
                        language === "croatian" ? croEightText2 : engEightText2
                    }
                />
                <FadeInFadeOutFrame
                    top={"70%"}
                    left={"10%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={100}
                    tresholdOut={150}
                    text={
                        language === "croatian" ? croEightText3 : engEightText3
                    }
                />
                <FadeInFadeOutFrame
                    top={"25%"}
                    left={isMobile ? "5%" : "60%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={150}
                    tresholdOut={200}
                    width={isMobile ? "90%" : "40%"}
                    text={
                        language === "croatian" ? croEightText4 : engEightText4
                    }
                />
                <FadeInFadeOutFrame
                    top={isMobile ? "50%" : "22%"}
                    left={isMobile ? "20%" : "45%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={200}
                    tresholdOut={250}
                    text={
                        language === "croatian" ? croEightText5 : engEightText5
                    }
                />
                <FadeInFadeOutFrame
                    top={"20%"}
                    left={"37%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={300}
                    tresholdOut={350}
                    text={
                        language === "croatian" ? croEightText6 : engEightText6
                    }
                />
                <FadeInFadeOutFrame
                    top={"25%"}
                    left={isMobile ? "20%" : "53%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={400}
                    tresholdOut={450}
                    text={
                        language === "croatian" ? croEightText7 : engEightText7
                    }
                />
                <FadeInFrame
                    center="x"
                    top={isMobile ? "20%" : "10%"}
                    width={isMobile ? "60%" : null}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={500}
                    text={
                        language === "croatian" ? croEightText8 : engEightText8
                    }
                />
            </div>
        </React.Fragment>
    );
}
