import React from "react";
import FadeInFrame from "../../components/fadeInFrame";
import {
    croFirst3text1,
    engFirst3text1,
    croFirst3text2,
    engFirst3text2,
    croFirst3text3,
    engFirst3text3,
    croFirst3text4,
    engFirst3text4,
    croFirst3text5,
    engFirst3text5,
    croFirst3text6,
    engFirst3text6,
} from "../../text";

export default function ThirdWindow({
    variantsVisibility,
    scrollY,
    language,
    isMobile,
}) {
    const style = isMobile
        ? { zIndex: 1, fontSize: 30, textAlign: "center" }
        : { zIndex: 1, fontSize: 40, textAlign: "center" };

    const bigStyle = { zIndex: 1, fontSize: 100, textAlign: "center" };

    return (
        <React.Fragment>
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={style}
                treshold={600}
                top={"150%"}
                center="x"
                width={isMobile ? "100%" : "25%"}
                text={language === "croatian" ? croFirst3text1 : engFirst3text1}
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={style}
                treshold={700}
                top={"180%"}
                text={language === "croatian" ? croFirst3text2 : engFirst3text2}
                center="x"
                isMobile={isMobile}
                width={isMobile ? "100%" : 500}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1000}
                top={"195%"}
                text={language === "croatian" ? croFirst3text3 : engFirst3text3}
                center="x"
                isMobile={isMobile}
                width={isMobile ? "100%" : 500}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1050}
                top={"200%"}
                text={language === "croatian" ? croFirst3text4 : engFirst3text4}
                center="x"
                isMobile={isMobile}
                width={isMobile ? "100%" : 500}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1100}
                top={"205%"}
                text={language === "croatian" ? croFirst3text5 : engFirst3text5}
                center="x"
                isMobile={isMobile}
                width={isMobile ? "100%" : 500}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={
                    isMobile
                        ? {
                              zIndex: 2,
                              fontSize: 30,
                              textAlign: "center",
                              color: "white",
                          }
                        : {
                              zIndex: 2,
                              fontSize: 40,
                              textAlign: "center",
                              color: "white",
                          }
                }
                treshold={1150}
                top={"260%"}
                width={isMobile ? "90%" : "25%"}
                text={language === "croatian" ? croFirst3text6 : engFirst3text6}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={1150}
                top={"210%"}
                src="/images/ocnjak-cat.png"
                alt="cat-fang"
                width={"100%"}
                height={"100%"}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
                isMobile={isMobile}
            />
        </React.Fragment>
    );
}
