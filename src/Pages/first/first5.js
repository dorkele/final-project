import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function FifthWindow({
    variantsVisibility,
    scrollY,
    language,
    isMobile,
}) {
    let text;
    if (language === "croatian") {
        text = "Bila sam tamo, zamotana u slojeve i slojeve svoje kože.";
    } else {
        text = "I was there, covered in layers upon layers of my own skin.";
    }
    return (
        <FadeInFrame
            variantsVisibility={variantsVisibility}
            scrollY={scrollY}
            top={"550%"}
            background="url('/images/skin.jpg')"
            treshold={3550}
            style={{ fontSize: 60, textAlign: "center" }}
            width={"100%"}
            height={"100%"}
            text={text}
            isMobile={isMobile}
        />
    );
}
