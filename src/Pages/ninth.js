import React from "react";
import { Frame, Page } from "framer";
import {
    croNinthText1,
    engNinthText1,
    croNinthText2,
    engNinthText2,
    croNinthText3,
    engNinthText3,
    croNinthText4,
    engNinthText4,
} from "../text";

export default function Ninth({ getSteppers, language, isMobile }) {
    const styleColorless = isMobile
        ? {
              backgroundColor: "none",
              fontSize: 20,
              width: "100%",
              height: "100%",
          }
        : {
              backgroundColor: "none",
              fontSize: 30,
              width: "100%",
              height: "100%",
          };

    return (
        <React.Fragment>
            <Page
                alignment="center"
                size="100%"
                defaultEffect={"coverflow"}
                onChangePage={(current, previous) => {
                    if (current === 3) {
                        getSteppers(true);
                    } else {
                        getSteppers(false);
                    }
                }}
            >
                <Frame style={styleColorless} top={100}>
                    <Frame
                        center
                        width={isMobile ? "100%" : "50%"}
                        background={"none"}
                    >
                        {language === "croatian"
                            ? croNinthText1
                            : engNinthText1}
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "#8c52ff",
                        color: "#ff5757",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                >
                    {language === "croatian" ? croNinthText2 : engNinthText2}
                </Frame>
                <Frame style={styleColorless} center>
                    <Frame
                        center
                        width={isMobile ? "100%" : "50%"}
                        background={"none"}
                    >
                        {language === "croatian"
                            ? croNinthText3
                            : engNinthText3}
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "#ff5757",
                        color: "#8c52ff",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                >
                    {language === "croatian" ? croNinthText4 : engNinthText4}
                </Frame>
            </Page>
        </React.Fragment>
    );
}
