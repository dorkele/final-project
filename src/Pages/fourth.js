import React from "react";
import styles from "./fourth/fourth.module.css";
import VideoFixedCenter from "./fourth/videoCenter";
import FadeOutFrame from "../components/fadeOutFrame";
import FadeInFadeOutFrame from "../components/fadeInFadeOutFrame";
import {
    croFourthText1,
    engFourthText1,
    croFourthText2,
    engFourthText2,
    croFourthText3,
    engFourthText3,
    croFourthText4,
    engFourthText4,
    croFourthText5,
    engFourthText5,
    croFourthText6,
    engFourthText6,
    croFourthText7,
    engFourthText7,
    croFourthText8,
    engFourthText8,
    croFourthText9,
    engFourthText9,
    croFourthText10,
    engFourthText10,
    croFourthText11,
    engFourthText11,
    croFourthText12,
    engFourthText12,
    croFourthText13,
    engFourthText13,
    croFourthText14,
    engFourthText14,
    croFourthText15,
    engFourthText15,
    croFourthText16,
    engFourthText16,
    croFourthText17,
    engFourthText17,
    croFourthText18,
    engFourthText18,
    croFourthText19,
    engFourthText19,
    croFourthText20,
    engFourthText20,
} from "../text";

export default function Fourth({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
    isMobile,
}) {
    if (scrollY > 970) {
        getSteppers(true);
    }

    const style = isMobile
        ? {
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
          }
        : {
              fontSize: 30,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
          };

    return (
        <React.Fragment>
            <div className={styles.wrapper_container}>
                <VideoFixedCenter src={"/images/video.mp4"} />
                <FadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText1
                            : engFourthText1
                    }
                    width={isMobile ? "100%" : "40%"}
                    style={style}
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={80}
                    center="y"
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText2
                            : engFourthText2
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={80}
                    tresholdOut={120}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText3
                            : engFourthText3
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={120}
                    tresholdOut={160}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText4
                            : engFourthText4
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={160}
                    tresholdOut={200}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText5
                            : engFourthText5
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={200}
                    tresholdOut={240}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText6
                            : engFourthText6
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={240}
                    tresholdOut={280}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText7
                            : engFourthText7
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={280}
                    tresholdOut={320}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText8
                            : engFourthText8
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={320}
                    tresholdOut={360}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText9
                            : engFourthText9
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={400}
                    tresholdOut={440}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText10
                            : engFourthText10
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={440}
                    tresholdOut={480}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText11
                            : engFourthText11
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={520}
                    tresholdOut={560}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText12
                            : engFourthText12
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={560}
                    tresholdOut={600}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText13
                            : engFourthText13
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={600}
                    tresholdOut={640}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText14
                            : engFourthText14
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={640}
                    tresholdOut={680}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText15
                            : engFourthText15
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={680}
                    tresholdOut={720}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText16
                            : engFourthText16
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={720}
                    tresholdOut={740}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText17
                            : engFourthText17
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={740}
                    tresholdOut={780}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText18
                            : engFourthText18
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={770}
                    tresholdOut={820}
                    style={style}
                    scrollY={scrollY}
                    width={isMobile ? "80%" : "40%"}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText19
                            : engFourthText19
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={820}
                    tresholdOut={860}
                    style={style}
                    scrollY={scrollY}
                    width={isMobile ? "100%" : "40%"}
                />
                <FadeInFadeOutFrame
                    text={
                        language === "croatian"
                            ? croFourthText20
                            : engFourthText20
                    }
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={900}
                    tresholdOut={950}
                    style={style}
                    scrollY={scrollY}
                    width={isMobile ? "90%" : "40%"}
                />
            </div>
        </React.Fragment>
    );
}
