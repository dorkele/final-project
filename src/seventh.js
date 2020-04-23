import React, { useEffect } from "react";
import { Frame } from "framer";
import "./seventh.css";

export default function Seventh({ variantsVisibility, scrollY }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <div className="wrapping-container">
                <Frame
                    style={{ backgroundColor: "none" }}
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
                    style={{ backgroundColor: "none" }}
                    top={700}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? "visible" : "hidden"}
                >
                    Prostrano
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={1400}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 1000 ? "visible" : "hidden"}
                >
                    Prostiranje
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={2100}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 1700 ? "visible" : "hidden"}
                >
                    Prostranstvima
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={2800}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 2000 ? "visible" : "hidden"}
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
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={3300}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 2200 ? "visible" : "hidden"}
                >
                    Kako da vam (kome?) opišem ovu realnost u njezinom nerealnom
                    sjaju, blještavilu? Sizifove muke. Evo, ovo dijete što mi
                    raste ispod srca, u nedostatku kreativnosti, nazvat ću
                    Sizif.
                </Frame>
            </div>
        </React.Fragment>
    );
}
