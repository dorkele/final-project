import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function FifthImageLayer({ variantsVisibility, scrollY }) {
    const style = {
        position: "fixed",
        height: "100%",
        top: 0,
        left: "60%",
    };
    return (
        <React.Fragment>
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                style={style}
                src="/images/left/left_1.png"
                alt="sea-sun"
                scrollY={scrollY}
                treshold={50}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                style={style}
                src="/images/left/left_2.png"
                alt="astronaut"
                scrollY={scrollY}
                treshold={150}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                style={style}
                src="/images/left/left_3.png"
                alt="face"
                scrollY={scrollY}
                treshold={250}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                style={style}
                src="/images/left/left_4.png"
                alt="hand"
                scrollY={scrollY}
                treshold={350}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                style={style}
                src="/images/left/left_5.png"
                alt="worms1"
                scrollY={scrollY}
                treshold={450}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                style={style}
                src="/images/left/left_6.png"
                alt="worms2"
                scrollY={scrollY}
                treshold={550}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                style={style}
                src="/images/left/left_7.png"
                alt="worms3"
                scrollY={scrollY}
                treshold={650}
            />
        </React.Fragment>
    );
}
