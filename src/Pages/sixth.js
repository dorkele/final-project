import React from "react";
import { Frame } from "framer";
import SixthImageLayer from "./sixth/sixth-image-layer";
import {
    croSixthText1,
    engSixthText1,
    croSixthText2,
    engSixthText2,
    croSixthText3,
    engSixthText3,
    croSixthText4,
    engSixthText4,
    croSixthText5,
    engSixthText5,
    croSixthText6,
    engSixthText6,
    croSixthText7,
    engSixthText7,
} from "../text";

export default function Sixth({ getSteppers, scrollY, language, isMobile }) {
    if (scrollY > 2130) {
        getSteppers(true);
    }

    const style = { backgroundColor: "none", fontSize: 25 };

    return (
        <React.Fragment>
            <Frame
                width={"100%"}
                height={isMobile ? "580%" : "400%"}
                background={"none"}
            >
                <Frame background={"none"} x={-scrollY} position={"fixed"}>
                    <SixthImageLayer />
                    <Frame
                        style={style}
                        top={380}
                        width={600}
                        height={200}
                        left={50}
                    >
                        {language === "croatian"
                            ? croSixthText1
                            : engSixthText1}
                    </Frame>
                    <Frame
                        style={style}
                        top={100}
                        left={520}
                        width={500}
                        height={200}
                    >
                        {language === "croatian"
                            ? croSixthText2
                            : engSixthText2}
                    </Frame>
                    <Frame
                        style={style}
                        top={300}
                        left={1000}
                        width={500}
                        height={200}
                    >
                        {language === "croatian"
                            ? croSixthText3
                            : engSixthText3}
                    </Frame>
                    <Frame
                        style={style}
                        top={300}
                        left={1600}
                        width={500}
                        height={200}
                    >
                        {language === "croatian"
                            ? croSixthText4
                            : engSixthText4}
                    </Frame>
                    <Frame
                        style={style}
                        top={100}
                        left={2200}
                        width={500}
                        height={200}
                    >
                        {language === "croatian"
                            ? croSixthText5
                            : engSixthText5}
                    </Frame>
                    <Frame
                        style={style}
                        top={300}
                        left={2800}
                        width={500}
                        height={200}
                    >
                        {language === "croatian"
                            ? croSixthText6
                            : engSixthText6}
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        whiteSpace: "nowrap",
                        position: "fixed",
                        fontSize: 23,
                    }}
                    bottom={"15%"}
                    width={"230%"}
                    height={25}
                    initial={{ left: 0 }}
                    animate={{ left: -scrollY }}
                >
                    {language === "croatian" ? croSixthText7 : engSixthText7}
                </Frame>
            </Frame>
        </React.Fragment>
    );
}
