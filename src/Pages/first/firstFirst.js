import React from "react";
import { Frame } from "framer";
import FadeOutFrame from "../../components/fadeOutFrame";
import FadeInFrame from "../../components/fadeInFrame";

export default function FirstWindow({ variantsVisibility, scrollY }) {
    const style = { fontSize: 100, textAlign: "center" };
    return (
        <React.Fragment>
            <Frame width={"100%"} background={"none"}>
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={100}
                    src="/images/ocnjak1.png"
                    alt="dogtooth"
                />
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={70}
                    left={"27%"}
                    src="/images/ocnjak2.png"
                    alt="dogtooth"
                />
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={40}
                    left={"50%"}
                    src="/images/ocnjak4.png"
                    alt="dogtooth"
                />
                <FadeOutFrame
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={140}
                    left={"72%"}
                    src="/images/ocnjak5.png"
                    alt="dogtooth"
                />
            </Frame>
            <FadeOutFrame
                center="y"
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={150}
                style={{ zIndex: 1, fontSize: 40, textAlign: "center" }}
                text="Očnjaci, podočnjaci, kapci."
            />
            <FadeInFrame
                top={"30%"}
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={40}
                style={style}
                text="Očnjaci,"
            />
            <FadeInFrame
                top={"40%"}
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={70}
                style={style}
                text="podočnjaci,"
            />
            <FadeInFrame
                top={"50%"}
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={100}
                style={style}
                text="kapci."
            />
        </React.Fragment>
    );
}