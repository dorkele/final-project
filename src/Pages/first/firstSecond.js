import React from "react";
import FadeInFrame from "../../components/fadeInFrame";
import RedZoomIn from "../../components/redZoomIn";

export default function SecondWindow({ scrollY, variantsVisibility }) {
    const arrLeft = [1000, 250, 100, 711, 340, 632];
    const arrTop = [670, 680, 690, 640, 660, 510];

    return (
        <React.Fragment>
            <FadeInFrame
                top={650}
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={180}
                width={"25%"}
                style={{ zIndex: 1, fontSize: 40, textAlign: "center" }}
                text="Bilo je premalo sati kada su nam rekli što se događa. Bili smo
                ranjivi, sanjivi,"
            />
            <RedZoomIn
                top={670}
                fontSize={80}
                variantsVisibility={variantsVisibility}
                treshold={400}
                scrollY={scrollY}
                center="y"
                text="fak."
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
                        text="fak"
                    />
                );
            })}
        </React.Fragment>
    );
}
