import React from "react";
import FadeInFrame from "../../components/fadeInFrame";
import { croFirst5text, engFirst5text } from "../../text";

export default function FifthWindow({
    variantsVisibility,
    scrollY,
    language,
    isMobile,
}) {
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
            text={language === "croatian" ? croFirst5text : engFirst5text}
            isMobile={isMobile}
        />
    );
}
