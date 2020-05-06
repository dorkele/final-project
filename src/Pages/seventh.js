import React, { useEffect } from "react";
import "./seventh/seventh.css";
import FadeInFrame from "../components/fadeInFrame";
import SeventhBackground from "./seventh/seventhBackground";

export default function Seventh({ variantsVisibility, scrollY, getSteppers }) {
    useEffect(() => {
        getSteppers(false);
    }, []);

    if (scrollY > 1270) {
        getSteppers(true);
    }

    const styleBig = { fontSize: 60, textAlign: "center" };

    return (
        <React.Fragment>
            <SeventhBackground scrollY={scrollY} />
            <div className="container">
                <FadeInFrame
                    style={{ fontSize: 30 }}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={40}
                    top={500}
                    text="Napisala sam pjesmu. Neki dan. Napisala sam ju i šaptom
                    otpjevala prije spavanja onim pahuljicama od maslačaka kada
                    se pretvore u paučinu. Pjesma je išla ovako nekako:"
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={100}
                    top={700}
                    text="Prostrano"
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={400}
                    top={1000}
                    text="Prostiranje"
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={700}
                    top={1300}
                    text="Prostranstvima"
                />
                <FadeInFrame
                    style={{ fontSize: 30 }}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={950}
                    top={1500}
                    text="Mogla sam otpjevati samo posljednja tri slova, ali to nije
                    bilo samo. A kada bi me njezin brat upitao što mi to znači,
                    ja bih ga poljubila. Prostrano. Njezin brat mi priča priče o
                    ubojstvima koja je vidio. Ali sneno i bajkovito. Te priče
                    imaju okus kave koju nismo pili još od onda. „Jesi li ti
                    koga?“, svaki ga dan pitam očarano. „Jesam, ali idemo po
                    redu.“, lukavo odgovara jer bezbroj ubojstava je teško
                    ispričati."
                />
            </div>
        </React.Fragment>
    );
}
