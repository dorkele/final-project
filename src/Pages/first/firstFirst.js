import React from "react";
import FadeOutFrame from "../../components/fadeOutFrame";
import FadeInFrame from "../../components/fadeInFrame";

export default function FirstWindow({
    variantsVisibility,
    scrollY,
    language,
    isMobile,
}) {
    const style = { fontSize: 100, textAlign: "center", width: "100%" };
    const styleMobile = { fontSize: 70, textAlign: "center", width: "100%" };

    let text1, text2, text3, text4;
    if (language === "croatian") {
        text1 = "Očnjaci, podočnjaci, kapci.";
        text2 = "Očnjaci,";
        text3 = "podočnjaci,";
        text4 = "kapci.";
    } else {
        text1 = "Dogteeth, dark circles, eyelids.";
        text2 = "Dogteeth,";
        text3 = "dark circles,";
        text4 = "eyelids.";
    }

    return (
        <React.Fragment>
            <div
                width={"100%"}
                style={{
                    display: "flex",
                    flexDirection: "row",
                    background: "none",
                }}
            >
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={100}
                    left={"0%"}
                    src="/images/ocnjak1.png"
                    alt="dogtooth"
                    isMobile={isMobile}
                    width={"30%"}
                />
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={70}
                    left={"27%"}
                    src="/images/ocnjak2.png"
                    alt="dogtooth"
                    isMobile={isMobile}
                    width={"30%"}
                />
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={40}
                    left={"50%"}
                    src="/images/ocnjak4.png"
                    alt="dogtooth"
                    isMobile={isMobile}
                    width={"30%"}
                />
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={140}
                    left={"72%"}
                    src="/images/ocnjak5.png"
                    alt="dogtooth"
                    isMobile={isMobile}
                    width={"30%"}
                />
            </div>
            <div style={{ textAlign: "center", width: "100%", height: "100%" }}>
                <FadeOutFrame
                    center="y"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={150}
                    style={{ zIndex: 1, fontSize: 30, textAlign: "center" }}
                    text={text1}
                    isMobile={isMobile}
                    width={"100%"}
                />
                <FadeInFrame
                    top={isMobile ? "8%" : "30%"}
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={40}
                    style={isMobile ? styleMobile : style}
                    text={text2}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    top={isMobile ? "18%" : "40%"}
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={70}
                    style={isMobile ? styleMobile : style}
                    text={text3}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    top={isMobile ? "28%" : "50%"}
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={100}
                    style={isMobile ? styleMobile : style}
                    text={text4}
                    isMobile={isMobile}
                />
            </div>
        </React.Fragment>
    );
}
