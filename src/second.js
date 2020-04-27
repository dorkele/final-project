import React, { useEffect } from "react";
import { Frame } from "framer";
import "./second.css";

export default function Second({ variantsVisibility, scrollY, getSteppers }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        getSteppers(false);
    }, []);
    if (scrollY > 320) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }
    return (
        <React.Fragment>
            <div className="textbox">
                <Frame
                    top={400}
                    variants={variantsVisibility}
                    initial={"visible"}
                    animate={scrollY >= 40 ? "visible" : "hidden"}
                    backgroundColor={"none"}
                    style={{
                        fontSize: "25px",
                        opacity: 0,
                        color: "#ff5757",
                    }}
                    width={500}
                >
                    Prva osoba koju sam nazvala bila je ta jedna osoba bez koje
                    nisam ni htjela postojati. Naravno da nije doma, ili je
                    zaspala, ali to joj nije slično, strah ju je, vidi kako ju
                    je strah, i atmosfera je pomalo spuki. Dođi doma, dođi doma
                    danas, ti možda nisi čula pa ne znaš, ali doma ti je tu,
                    doma kod mene, a možda i znaš, a zašto onda ne dolaziš doma?
                    Osobo. Ali onda se javila sekretarica: „Muze su pijane,
                    nakon tona ostavite poruku.“
                </Frame>
                <Frame
                    top={600}
                    width={500}
                    variants={variantsVisibility}
                    animate={scrollY >= 80 ? "visible" : "hidden"}
                    backgroundColor={"none"}
                    style={{
                        fontSize: "25px",
                        opacity: 0,
                        color: "#ff5757",
                    }}
                >
                    Nisam stigla ništa reći, policija je došla po mene i moje
                    ofucane fraze. Donijeli su mi i za presvuć se. Omanji šator.
                    Sjećam se kako sam pomislila – naravno. Glupa pomisao. Ali,
                    apokalipsa je u modi. Ovo je zasigurno ravno s modnih pista.
                    Izgestikulirala sam im da me ne slijede. Znala sam da ću
                    preživjeti. Oni neće.
                </Frame>
                <Frame
                    top={800}
                    width={500}
                    variants={variantsVisibility}
                    animate={scrollY >= 275 ? "visible" : "hidden"}
                    backgroundColor={"none"}
                    style={{
                        fontSize: "25px",
                        opacity: 0,
                        color: "#ff5757",
                    }}
                >
                    Mučili su me prastari leptirići u trbuhu. Idem leć na pod.
                    Jebe mi se za ožiljke i za dan,  
                </Frame>
                <Frame
                    center
                    width={700}
                    variants={variantsVisibility}
                    initial={"hidden"}
                    animate={"visible"}
                    backgroundColor={"none"}
                    style={{
                        fontSize: "200px",
                        opacity: 0,
                        position: "fixed",
                        zIndex: -1,
                    }}
                    transition={{ duration: 2, yoyo: "Infinity" }}
                >
                    želim biti što i ti.
                </Frame>
            </div>
        </React.Fragment>
    );
}
