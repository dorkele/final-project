import React from "react";
import styles from "./fifth/fifth.module.css";
import FifthImageLayer from "./fifth/fifth-image-layer";
import FadeInFrame from "../components/fadeInFrame";
import {
    croFifthText1,
    engFifthText1,
    croFifthText2,
    engFifthText2,
    croFifthText3,
    engFifthText3,
    croFifthText4,
    engFifthText4,
    croFifthText5,
    engFifthText5,
    croFifthText6,
    engFifthText6,
    croFifthText7,
    engFifthText7,
    croFifthText8,
    engFifthText8,
    croFifthText9,
    engFifthText9,
    croFifthText10,
    engFifthText10,
    croFifthText11,
    engFifthText11,
} from "../text";

export default function Fifth({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
    isMobile,
}) {
    if (scrollY > 770) {
        getSteppers(true);
    }

    const style = isMobile
        ? { fontWeight: "normal", fontSize: "19px", color: "red" }
        : {
              fontSize: "25px",
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
          };

    return (
        <React.Fragment>
            <div className={styles.container_wrap}>
                <FifthImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"25%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={50}
                    text={
                        language === "croatian" ? croFifthText1 : engFifthText1
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"35%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={100}
                    text={
                        language === "croatian" ? croFifthText2 : engFifthText2
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"45%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={150}
                    text={
                        language === "croatian" ? croFifthText3 : engFifthText3
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"55%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={200}
                    text={
                        language === "croatian" ? croFifthText4 : engFifthText4
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"68%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={250}
                    text={
                        language === "croatian" ? croFifthText5 : engFifthText5
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"80%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={300}
                    text={
                        language === "croatian" ? croFifthText6 : engFifthText6
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"95%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={350}
                    text={
                        language === "croatian" ? croFifthText7 : engFifthText7
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"105%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={400}
                    text={
                        language === "croatian" ? croFifthText8 : engFifthText8
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"120%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={450}
                    text={
                        language === "croatian" ? croFifthText9 : engFifthText9
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"135%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={500}
                    text={
                        language === "croatian"
                            ? croFifthText10
                            : engFifthText10
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"150%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={550}
                    text={
                        language === "croatian"
                            ? croFifthText11
                            : engFifthText11
                    }
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
            </div>
        </React.Fragment>
    );
}
