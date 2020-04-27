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
                        height: 30,
                        whiteSpace: "nowrap",
                        fontSize: 30,
                        color: "white",
                        fontWeight: "bold",
                    }}
                    top={225}
                    initial={{ left: 1900 }}
                    animate={{ x: -3000 }}
                    transition={{ duration: 30 }}
                >
                    Jedna od čudnijih večeri, jedna od onih kada si toliko
                    zaokupljen sobom da ni ne primijetiš da je sunce izišlo na
                    zapadu. „To što u glavi znaš kako ide neka pjesma ne znači
                    da ćeš je na glas znati otpjevati.“, zaključila je
                    naposljetku. „Jesu li muze oduvijek bile ovako mudra
                    stvorenja?“, smijale smo se do zauvijek.
                </Frame>

                {/* <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        width: "50%",
                        fontSize: 30,
                        color: "white",
                        fontWeight: "bold",
                    }}
                    top={200}
                    variants={variantsVisibility}
                    initial={"hidden"}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                >
                    „To što u glavi znaš kako ide neka pjesma ne znači
                    da ćeš je na glas znati otpjevati.“, zaključila je
                    naposljetku. 
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        width: "50%",
                        fontSize: 30,
                        color: "white",
                        fontWeight: "bold",
                    }}
                    top={300}
                    variants={variantsVisibility}
                    initial={"hidden"}
                    animate={scrollY >= 150 ? "visible" : "hidden"}
                >
                    „Jesu li muze oduvijek bile ovako mudra stvorenja?“, smijale
                    smo se do zauvijek.
                </Frame> */}
            </div>
        </React.Fragment>
    );
}
