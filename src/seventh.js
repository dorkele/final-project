import React, { useEffect } from "react";
import { Frame } from "framer";
import "./seventh.css";

export default function Seventh({ variantsVisibility, scrollY, getSteppers }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        getSteppers(false);
    }, []);
    if (scrollY > 1270) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }
    return (
        <React.Fragment>
            <div className="container">
                <Frame
                    style={{ backgroundColor: "none", fontSize: 30 }}
                    center
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 40 ? "visible" : "hidden"}
                >
                    Napisala sam pjesmu. Neki dan. Napisala sam ju i šaptom
                    otpjevala prije spavanja onim pahuljicama od maslačaka kada
                    se pretvore u paučinu. Pjesma je išla ovako nekako:
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 60 }}
                    top={700}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                >
                    Prostrano
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 60 }}
                    top={1000}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? "visible" : "hidden"}
                >
                    Prostiranje
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 60 }}
                    top={1300}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 700 ? "visible" : "hidden"}
                >
                    Prostranstvima
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 30 }}
                    top={1700}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 950 ? "visible" : "hidden"}
                    width={500}
                >
                    Mogla sam otpjevati samo posljednja tri slova, ali to nije
                    bilo samo. A kada bi me njezin brat upitao što mi to znači,
                    ja bih ga poljubila. Prostrano. Njezin brat mi priča priče o
                    ubojstvima koja je vidio. Ali sneno i bajkovito. Te priče
                    imaju okus kave koju nismo pili još od onda. „Jesi li ti
                    koga?“, svaki ga dan pitam očarano. „Jesam, ali idemo po
                    redu.“, lukavo odgovara jer bezbroj ubojstava je teško
                    ispričati.
                </Frame>
            </div>
        </React.Fragment>
    );
}
