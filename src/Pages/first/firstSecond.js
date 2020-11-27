import React from "react";
import FadeInFrame from "../../components/fadeInFrame";
import RedZoomIn from "../../components/redZoomIn";
import {
    croFirst2text1,
    engFirst2text1,
    croFirst2text2,
    engFirst2text2,
    croFirst2text3,
    engFirst2text3,
} from "../../text";

export default function SecondWindow({
    scrollY,
    variantsVisibility,
    language,
    isMobile,
}) {
    const arrLeft = ["80%", "25%", "10%", "71%", "34%", "63%"];
    const arrTop = ["91%", "93%", "75%", "95%", "97%", "86%"];

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <FadeInFrame
                top={isMobile ? "70%" : "90%"}
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={180}
                width={isMobile ? "100%" : "25%"}
                style={
                    isMobile
                        ? { zIndex: 1, fontSize: 30, textAlign: "center" }
                        : { zIndex: 1, fontSize: 40, textAlign: "center" }
                }
                text={language === "croatian" ? croFirst2text1 : engFirst2text1}
                center="y"
                isMobile={isMobile}
            />
            <RedZoomIn
                top={"93%"}
                fontSize={50}
                variantsVisibility={variantsVisibility}
                treshold={400}
                scrollY={scrollY}
                center="y"
                text={language === "croatian" ? croFirst2text2 : engFirst2text2}
                width={isMobile ? "0" : null}
                isMobile={isMobile}
            />
            {arrLeft.map((val, index) => {
                return (
                    <RedZoomIn
                        key={index}
                        left={arrLeft[index]}
                        top={arrTop[index]}
                        treshold={400}
                        fontSize={20}
                        variantsVisibility={variantsVisibility}
                        scrollY={scrollY}
                        width={isMobile ? 0 : 50}
                        text={
                            language === "croatian"
                                ? croFirst2text3
                                : engFirst2text3
                        }
                        isMobile={isMobile}
                    />
                );
            })}
        </div>
    );
}
