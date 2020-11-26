import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function ThirdWindow({
    variantsVisibility,
    scrollY,
    language,
    isMobile,
}) {
    const style = { zIndex: 1, fontSize: 40, textAlign: "center" };
    const bigStyle = { zIndex: 1, fontSize: 100, textAlign: "center" };
    let text1, text2, text3, text4, text5, text6;
    if (language === "croatian") {
        text1 =
            "Sjediš negdje u dnu razreda, a ja duboko u sebi čujem preskakanje tvoje vilice, škripanje tvog kapka, rimu škrgutanja očnjaka i podočnjaka.";
        text2 = "Očnjaci, podočnjaci, kapci.";
        text3 = "Očnjaci,";
        text4 = "podočnjaci,";
        text5 = "kapci,";
        text6 =
            "tvoji ne govore tko su bili tvoji preci ni u kojim su nijemim filmovima glumili. Sve što mi imaju za reći su neugodne frekvencije.";
    } else {
        text1 =
            "You are sitting somewhere in the back of the classroom and, deep inside myself, I can hear the crunching of your jaw, creaking of your eyelids, the grinding rhyme of your dogteeth.";
        text2 = "Dogteeth, dark circles, eyelids.";
        text3 = "Dogteeth,";
        text4 = "dark circles,";
        text5 = "eyelids";
        text6 =
            "of yours do not tell me anything about your ancestors or which silent movies they played their roles in. Everything they have to tell me are unpleasent frequences.";
    }

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
                text={text1}
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={style}
                treshold={700}
                top={"180%"}
                text={text2}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1000}
                top={"195%"}
                text={text3}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1050}
                top={"200%"}
                text={text4}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1100}
                top={"205%"}
                text={text5}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={{
                    zIndex: 2,
                    fontSize: 40,
                    textAlign: "center",
                    color: "white",
                }}
                treshold={1150}
                top={"260%"}
                width={isMobile ? "100%" : "25%"}
                text={text6}
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
