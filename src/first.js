import React, { useEffect } from "react";
import { Frame } from "framer";
import "./first.css";

export default function First({ variantsVisibility, scrollY, getSteppers }) {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     getSteppers(false);
    // }, []);

    variantsVisibility.fakZoom = {
        scale: 5,
        color: "red",
        duration: 3,
    };

    if (scrollY > 4040) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }
    return (
        <React.Fragment>
            <div
                className="wrapping-container"
                background="radial-gradient(B59194 0%, rgb(255, 255, 255) 87%)"
            >
                <Frame
                    className="first-words "
                    backgroundColor={"none"}
                    width={"25%"}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 300 ? "hidden" : "visible"}
                    style={{ zIndex: 1 }}
                >
                    Očnjaci, podočnjaci, kapci.
                </Frame>
                <Frame
                    top={200}
                    variants={variantsVisibility}
                    animate={scrollY >= 40 ? "visible" : "hidden"}
                    className="text"
                    backgroundColor={"none"}
                >
                    Očnjaci,
                </Frame>
                <Frame
                    top={300}
                    variants={variantsVisibility}
                    animate={scrollY >= 70 ? "visible" : "hidden"}
                    className="text"
                    backgroundColor={"none"}
                >
                    podočnjaci,
                </Frame>
                <Frame
                    top={400}
                    variants={variantsVisibility}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                    className="text"
                    backgroundColor={"none"}
                >
                    kapci.
                </Frame>
                <Frame
                    top={450}
                    variants={variantsVisibility}
                    animate={scrollY >= 180 ? "visible" : "hidden"}
                    className="subtext first-words"
                    backgroundColor={"none"}
                    width={"25%"}
                >
                    Bilo je premalo sati kada su nam rekli što se događa. Bili
                    smo ranjivi, sanjivi,
                </Frame>
                <Frame
                    top={670}
                    backgroundColor="none"
                    style={{ fontSize: 80 }}
                    initial={{ opacity: 0 }}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? ["visible", "fakZoom"] : "hidden"}
                    center
                >
                    fak.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 20 }}
                    top={670}
                    left={1000}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? ["visible", "fakZoom"] : "hidden"}
                    delay={0.3}
                >
                    fak
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 20 }}
                    top={680}
                    left={250}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? ["visible", "fakZoom"] : "hidden"}
                >
                    fak
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 20 }}
                    top={690}
                    left={100}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? ["visible", "fakZoom"] : "hidden"}
                >
                    fak
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 20 }}
                    top={640}
                    left={711}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? ["visible", "fakZoom"] : "hidden"}
                >
                    fak
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 20 }}
                    top={310}
                    left={340}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? ["visible", "fakZoom"] : "hidden"}
                >
                    fak
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", fontSize: 20 }}
                    top={680}
                    left={632}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? ["visible", "fakZoom"] : "hidden"}
                >
                    fak
                </Frame>
                <Frame
                    initial={{ opacity: 0 }}
                    variants={variantsVisibility}
                    animate={scrollY >= 600 ? "visible" : "hidden"}
                    top={1000}
                    center
                    backgroundColor={"none"}
                    className="first-words"
                    width={"25%"}
                >
                    Sjediš negdje u dnu razreda, a ja duboko u sebi čujem
                    preskakanje tvoje vilice, škripanje tvog kapka, rimu
                    škrgutanja očnjaka i podočnjaka.
                </Frame>
                <Frame
                    top={1200}
                    backgroundColor="none"
                    variants={variantsVisibility}
                    animate={scrollY >= 700 ? "visible" : "hidden"}
                    className="first-words"
                >
                    Očnjaci, podočnjaci, kapci.
                </Frame>
                <Frame
                    top={1300}
                    variants={variantsVisibility}
                    animate={scrollY >= 1000 ? "visible" : "hidden"}
                    className="text"
                    backgroundColor="none"
                >
                    Očnjaci,
                </Frame>
                <Frame
                    top={1350}
                    variants={variantsVisibility}
                    animate={scrollY >= 1050 ? "visible" : "hidden"}
                    className="text"
                    backgroundColor="none"
                >
                    podočnjaci,
                </Frame>
                <Frame
                    top={1400}
                    variants={variantsVisibility}
                    animate={scrollY >= 1100 ? "visible" : "hidden"}
                    className="text"
                    backgroundColor="none"
                >
                    kapci
                </Frame>
                <Frame
                    top={1600}
                    backgroundColor="none"
                    initial={{ opacity: 0 }}
                    variants={variantsVisibility}
                    animate={scrollY >= 1150 ? "visible" : "hidden"}
                    className="first-words"
                    width={"25%"}
                >
                    tvoji ne govore tko su bili tvoji preci ni u kojim su
                    nijemim filmovima glumili. Sve što mi imaju za reći su
                    neugodne frekvencije.
                </Frame>
                <Frame
                    top={2100}
                    backgroundColor="none"
                    variants={variantsVisibility}
                    animate={scrollY >= 1600 ? "visible" : "hidden"}
                    className="first-words"
                    width={"25%"}
                >
                    Koliko smo se puta u mojoj glavi, šta? Seksali jebali vodili
                    ljubav, te spike. Ti si se malo okrenuo prema meni pa sam
                    zaključila da me obožavaš.
                </Frame>

                <Frame
                    top={2600}
                    backgroundColor="none"
                    variants={variantsVisibility}
                    animate={scrollY >= 2200 ? "visible" : "hidden"}
                    className="first-words"
                    width={"50%"}
                >
                    <div className="text-align-center">I tako, </div>
                    <div className="text-align-center">
                        u skoro ljetno jutro,{" "}
                    </div>
                    <div className="text-align-center">
                        dok djevojčice pupaju{" "}
                    </div>
                    <div className="text-align-center">
                        (tiho, tiho, no ne i pretiho),
                    </div>
                    <div className="text-align-center">
                        oni ulaze u učionice i javljaju kako katastrofa čuči pod
                        stolom. Najavljuju kolektivno umiranje. I nisu mogli
                        biti precizniji od: „ovih dana“. Možda se prvo nervozno
                        smijuckamo. Možda, ali nekako ne vjerujem, vidi se na
                        njima da su malo prije povraćali. I da će opet.
                    </div>
                </Frame>

                <Frame
                    top={3100}
                    backgroundColor="none"
                    variants={variantsVisibility}
                    animate={scrollY >= 2600 ? "visible" : "hidden"}
                    className="first-words"
                    width={"50%"}
                >
                    Bojiš se, znojiš se, a možda bi baš bilo dobro u ovom
                    trenutku kihnuti. Ali ne možeš toliko dugo oči držati
                    zatvorene. Ej znaš šta, ti jedan jadno poseban, daj da ti
                    diram kosu. Ali učionica je prazna. Zjapi prazna. Zjapi. Oni
                    ljudi su otišli. Dali su mi kamenčiće. Sve što su mi dali
                    bili su kamenčići.
                </Frame>

                <Frame
                    top={3600}
                    backgroundColor="none"
                    variants={variantsVisibility}
                    animate={scrollY >= 3100 ? "visible" : "hidden"}
                    className="first-words"
                    width={"25%"}
                >
                    Prvo što sam učinila kada sam shvatila da nam nema spasa.
                    Bila sam u toj zjapljujuće praznoj učionici. Nisam otišla
                    doma poljubiti roditelje. Ne odmah.
                </Frame>

                <Frame
                    top={4100}
                    background="url('/images/skin.jpg')"
                    variants={variantsVisibility}
                    animate={scrollY >= 3550 ? "visible" : "hidden"}
                    className="first-words"
                    width={"100%"}
                    height={"100%"}
                >
                    Bila sam tamo, zamotana u slojeve i slojeve svoje kože.
                </Frame>
            </div>
        </React.Fragment>
    );
}
