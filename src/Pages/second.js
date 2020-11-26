import React from "react";
import styles from "./second/second.module.css";
import FadeInFrame from "../components/fadeInFrame";
import BlinkingText from "../components/blinkingText";

export default function Second({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
    isMobile,
}) {
    if (scrollY > 170) {
        getSteppers(true);
    }

    const style = isMobile
        ? { fontSize: "20px", color: "#ff5757" }
        : {
              fontSize: "25px",
              color: "#ff5757",
          };

    let text1, text2, text3, text4;
    if (language === "croatian") {
        text1 =
            "Prva osoba koju sam nazvala bila je ta jedna osoba bez koje nisam ni htjela postojati. Naravno da nije doma, ili je zaspala, ali to joj nije slično, strah ju je, vidi kako ju je strah, i atmosfera je pomalo spuki. Dođi doma, dođi doma danas, ti možda nisi čula pa ne znaš, ali doma ti je tu, doma kod mene, a možda i znaš, a zašto onda ne dolaziš doma? Osobo. Ali onda se javila sekretarica: „Muze su pijane, nakon tona ostavite poruku.“";
        text2 =
            "Nisam stigla ništa reći, policija je došla po mene i moje ofucane fraze. Donijeli su mi i za presvuć se. Omanji šator. Sjećam se kako sam pomislila – naravno. Glupa pomisao. Ali, apokalipsa je u modi. Ovo je zasigurno ravno s modnih pista. Izgestikulirala sam im da me ne slijede. Znala sam da ću preživjeti. Oni neće.";
        text3 =
            "Mučili su me prastari leptirići u trbuhu. Idem leć na pod. Jebe mi se za ožiljke i za dan,";
        text4 = "želim biti što i ti.";
    } else {
        text1 =
            "The first person I called was that one person I didn't even want to exist without. Of course she isn't home, or she fell asleep, but that's not like her, she is scared, look at how scared she is, the atmosphere is also a bit spooky. Come home, come home today, you maybe didn't hear so you don't know but your home is here with me, but maybe you know, so why aren't you coming home then? Person. But then I reached the voicemail: „The muses are drunk, leave a message after the tone.”";
        text2 =
            "I managed to say nothing. The police came for me and my torn phrases. They brought me spare clothes. A little tent. I remember thinking – of course. Stupid thought. But apocalypse is in fashion. This must have came directly from the runway. I gestured for them not to follow me. I knew I am going to survive. They won't.";
        text3 =
            "I was bothered by the primeval butterflies in my stomach. I am going to lay on the floor. Fuck the scars and the daytime,";
        text4 = "I want to be what you are.";
    }

    return (
        <React.Fragment>
            <div className={styles.textbox}>
                <FadeInFrame
                    text={text1}
                    style={style}
                    top={"30%"}
                    treshold={40}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    center="x"
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    text={text2}
                    style={style}
                    top={"60%"}
                    treshold={80}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    center="x"
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <FadeInFrame
                    text={text3}
                    style={style}
                    top={"90%"}
                    treshold={150}
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    center="x"
                    isMobile={isMobile}
                    width={isMobile ? "100%" : null}
                />
                <BlinkingText
                    text={text4}
                    variantsVisibility={variantsVisibility}
                    width={isMobile ? "100%" : 700}
                    style={
                        isMobile
                            ? {
                                  fontSize: "100px",
                                  opacity: 0,
                                  position: "fixed",
                                  zIndex: -1,
                              }
                            : {
                                  fontSize: "200px",
                                  opacity: 0,
                                  position: "fixed",
                                  zIndex: -1,
                              }
                    }
                    isMobile={isMobile}
                />
            </div>
        </React.Fragment>
    );
}
