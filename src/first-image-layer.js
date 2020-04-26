import React from "react";
import { Frame } from "framer";
import "./first-image-layer.css";

export default function FirstImageLayer({ variantsVisibility, scrollY }) {
    return (
        <React.Fragment>
            <Frame
                style={{
                    backgroundColor: "none",
                    display: "flex",
                    flexDirection: "row",
                    height: 300,
                }}
                top={0}
            >
                <Frame
                    backgroundColor={"none"}
                    variants={variantsVisibility}
                    animate={scrollY >= 100 ? "hidden" : "visible"}
                >
                    <img src="/images/ocnjak1.png" alt="dogtooth" />
                </Frame>
                <Frame
                    left={400}
                    backgroundColor={"none"}
                    variants={variantsVisibility}
                    animate={scrollY >= 70 ? "hidden" : "visible"}
                >
                    <img src="/images/ocnjak2.png" alt="dogtooth" />
                </Frame>

                <Frame
                    left={750}
                    backgroundColor={"none"}
                    variants={variantsVisibility}
                    animate={scrollY >= 40 ? "hidden" : "visible"}
                >
                    <img src="/images/ocnjak4.png" alt="dogtooth" />
                </Frame>
                <Frame
                    left={1100}
                    backgroundColor={"none"}
                    variants={variantsVisibility}
                    animate={scrollY >= 140 ? "hidden" : "visible"}
                >
                    <img src="/images/ocnjak5.png" alt="dogtooth" />
                </Frame>
            </Frame>
            <Frame
                backgroundColor={"none"}
                top={1300}
                left={470}
                variants={variantsVisibility}
                animate={scrollY >= 1000 ? "visible" : "hidden"}
            >
                <img
                    className="cat-fang"
                    src="/images/ocnjak-cat.png"
                    alt="cat-fang"
                />
            </Frame>
            <Frame
                backgroundColor={"none"}
                top={1400}
                left={920}
                variants={variantsVisibility}
                animate={scrollY >= 1050 ? "visible" : "hidden"}
            >
                <img
                    className="dark-circles"
                    src="/images/oko3.png"
                    alt="eye-with-dark-circles"
                />
            </Frame>
            <Frame
                top={1870}
                backgroundColor={"none"}
                initial={{ x: "-100%" }}
                animate={{ x: scrollY >= 1400 ? 450 : -600 }}
            >
                <img
                    className="techno"
                    src="/images/hate-techno.png"
                    alt="hate-techno-banner"
                />
            </Frame>
            <Frame
                top={2500}
                backgroundColor={"none"}
                variants={variantsVisibility}
                animate={scrollY >= 1900 ? "visible" : "hidden"}
            >
                <img
                    //classname="techno"
                    src="/images/avril-anakin.png"
                    alt="avril-anakin-sad"
                />
            </Frame>
            <Frame
                top={3300}
                left={1000}
                backgroundColor={"none"}
                variants={variantsVisibility}
                animate={scrollY >= 3100 ? "visible" : "hidden"}
            >
                <img
                    //classname="techno"
                    src="/images/stones.png"
                    alt="stones"
                />
            </Frame>
        </React.Fragment>
    );
}
