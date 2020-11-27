import React from "react";
import FadeInFrame from "../../components/fadeInFrame";
import {
    croFirst4text1,
    engFirst4text1,
    croFirst4text2,
    engFirst4text2,
    croFirst4text3,
    engFirst4text3,
    croFirst4text4,
    engFirst4text4,
} from "../../text";

export default function FourthWindow({
    variantsVisibility,
    scrollY,
    language,
    isMobile,
}) {
    const style = isMobile
        ? { fontSize: 30, textAlign: "center" }
        : { fontSize: 40, textAlign: "center" };

    return (
        <React.Fragment>
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={1580}
                style={style}
                top={"330%"}
                width={isMobile ? "100%" : "25%"}
                text={language === "croatian" ? croFirst4text1 : engFirst4text1}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2200}
                style={style}
                top={isMobile ? "383%" : "390%"}
                width={isMobile ? "100%" : "50%"}
                text={language === "croatian" ? croFirst4text2 : engFirst4text2}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2600}
                style={style}
                top={"450%"}
                width={isMobile ? "100%" : "50%"}
                text={language === "croatian" ? croFirst4text3 : engFirst4text3}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                top={"480%"}
                left={isMobile ? "5%" : "60%"}
                src="/images/stones.png"
                alt="stones"
                isMobile={isMobile}
                imgStyle={isMobile ? { width: "80%" } : 0}
                width={isMobile ? "90%" : 500}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                style={style}
                top={isMobile ? "530%" : "510%"}
                width={isMobile ? "100%" : "25%"}
                text={language === "croatian" ? croFirst4text4 : engFirst4text4}
                center="x"
                isMobile={isMobile}
            />
        </React.Fragment>
    );
}
