import React, { useEffect } from "react";
import { Frame } from "framer";

export default function Tenth({ variantsVisibility, scrollY }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <div className="wrapping-container">
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        width: "50%",
                    }}
                    top={100}
                    variants={variantsVisibility}
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
                    animate={scrollY >= 150 ? "visible" : "hidden"}
                >
                    „Jesu li muze oduvijek bile ovako mudra stvorenja?“, smijale
                    smo se do zauvijek.
                </Frame>
            </div>
        </React.Fragment>
    );
}
