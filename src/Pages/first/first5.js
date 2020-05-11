import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function FifthWindow({ variantsVisibility, scrollY }) {
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
            text="Bila sam tamo, zamotana u slojeve i slojeve svoje kože."
        />
    );
}
