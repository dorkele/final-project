import React, { useEffect } from "react";
import { Frame } from "framer";
import "./tenth.css";

export default function Tenth({ variantsVisibility, scrollY, getSteppers }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        getSteppers(false);
    }, []);
    if (scrollY > 152) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }

    return (
        <React.Fragment>
            <div className="wrapping-box">
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        width: "50%",
                    }}
                    top={100}
                    variants={variantsVisibility}
                    initial={"hidden"}
                    animate={scrollY >= 60 ? "visible" : "hidden"}
                >
                    Jedna od čudnijih večeri, jedna od onih kada si toliko
                    zaokupljen sobom da ni ne primijetiš da je sunce izišlo na
                    zapadu.
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        width: "50%",
                    }}
                    top={200}
                    variants={variantsVisibility}
                    initial={"hidden"}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                >
                    „To što u glavi znaš kako ide neka pjesma ne znači da ćeš je
                    na glas znati otpjevati.“, zaključila je naposljetku.
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        width: "50%",
                    }}
                    top={300}
                    variants={variantsVisibility}
                    initial={"hidden"}
                    animate={scrollY >= 150 ? "visible" : "hidden"}
                >
                    „Jesu li muze oduvijek bile ovako mudra stvorenja?“, smijale
                    smo se do zauvijek.
                </Frame>
            </div>
        </React.Fragment>
    );
}
