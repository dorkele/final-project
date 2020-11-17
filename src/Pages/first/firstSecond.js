import React from "react";
import FadeInFrame from "../../components/fadeInFrame";
import RedZoomIn from "../../components/redZoomIn";

export default function SecondWindow({
    scrollY,
    variantsVisibility,
    language,
}) {
    const arrLeft = ["80%", "25%", "10%", "71%", "34%", "63%"];
    const arrTop = ["91%", "93%", "75%", "95%", "97%", "86%"];
    let text1, text2, text3;
    if (language === "croatian") {
        text1 =
            "Bilo je premalo sati kada su nam rekli što se događa. Bili smo ranjivi, sanjivi,";
        text2 = "fak.";
        text3 = "fak";
    } else {
        text1 =
            "It was not enough hours into the day when they told us what was happening. We were vulnerable, daydreamy,";
        text2 = "fuck.";
        text3 = "fuck";
    }
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
                top={"90%"}
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={180}
                width={"25%"}
                style={{ zIndex: 1, fontSize: 40, textAlign: "center" }}
                text={text1}
                center="y"
            />
            <RedZoomIn
                top={"93%"}
                fontSize={80}
                variantsVisibility={variantsVisibility}
                treshold={400}
                scrollY={scrollY}
                center="y"
                text={text2}
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
                        width={50}
                        text={text3}
                    />
                );
            })}
        </div>
    );
}
