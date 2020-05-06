import React, { useEffect } from "react";
import "./second/second.css";
import FadeInFrame from "../components/fadeInFrame";
import BlinkingText from "../components/blinkingText";

export default function Second({ variantsVisibility, scrollY, getSteppers }) {
    useEffect(() => {
        getSteppers(false);
    }, []);

    if (scrollY > 320) {
        getSteppers(true);
    }

    return (
        <React.Fragment>
            <div className="textbox">
                <FadeInFrame
                    text="Prva osoba koju sam nazvala bila je ta jedna osoba bez koje
                    nisam ni htjela postojati. Naravno da nije doma, ili je
                    zaspala, ali to joj nije slično, strah ju je, vidi kako ju
                    je strah, i atmosfera je pomalo spuki. Dođi doma, dođi doma
                    danas, ti možda nisi čula pa ne znaš, ali doma ti je tu,
                    doma kod mene, a možda i znaš, a zašto onda ne dolaziš doma?
                    Osobo. Ali onda se javila sekretarica: „Muze su pijane,
                    nakon tona ostavite poruku.“"
                    style={{
                        fontSize: "25px",
                        color: "#ff5757",
                    }}
                    top={400}
                    treshold={40}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
                <FadeInFrame
                    text="Nisam stigla ništa reći, policija je došla po mene i moje
                    ofucane fraze. Donijeli su mi i za presvuć se. Omanji šator.
                    Sjećam se kako sam pomislila – naravno. Glupa pomisao. Ali,
                    apokalipsa je u modi. Ovo je zasigurno ravno s modnih pista.
                    Izgestikulirala sam im da me ne slijede. Znala sam da ću
                    preživjeti. Oni neće."
                    style={{
                        fontSize: "25px",
                        color: "#ff5757",
                    }}
                    top={600}
                    treshold={80}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
                <FadeInFrame
                    text="Mučili su me prastari leptirići u trbuhu. Idem leć na pod.
                    Jebe mi se za ožiljke i za dan,"
                    style={{
                        fontSize: "25px",
                        color: "#ff5757",
                    }}
                    top={800}
                    treshold={275}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
                <BlinkingText
                    text="želim biti što i ti."
                    variantsVisibility={variantsVisibility}
                    width={700}
                    style={{
                        fontSize: "200px",
                        opacity: 0,
                        position: "fixed",
                        zIndex: -1,
                    }}
                />
            </div>
        </React.Fragment>
    );
}
