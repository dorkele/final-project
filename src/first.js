import React, { useEffect } from "react";
import { motion, Frame } from "framer";
import "./first.css";

export default function First({ variantsVisibility, scrollY }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <div className="wrapping-container">
                <div className="first-words">Očnjaci, podočnjaci, kapci.</div>
                <motion.div
                    variants={variantsVisibility}
                    animate={scrollY >= 40 ? "visible" : "hidden"}
                    className="text"
                >
                    Očnjaci,
                </motion.div>
                <motion.div
                    variants={variantsVisibility}
                    animate={scrollY >= 70 ? "visible" : "hidden"}
                    className="text"
                >
                    podočnjaci,
                </motion.div>
                <motion.div
                    variants={variantsVisibility}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                    className="text"
                >
                    kapci.
                </motion.div>
                <motion.div
                    variants={variantsVisibility}
                    animate={scrollY >= 140 ? "visible" : "hidden"}
                    className="subtext"
                >
                    Bilo je premalo sati kada su nam rekli što se događa. Bili
                    smo ranjivi, sanjivi,
                </motion.div>
                <Frame
                    top={620}
                    backgroundColor="none"
                    style={{ fontSize: 50 }}
                    initial={{ opacity: 0 }}
                    variants={variantsVisibility}
                    animate={scrollY >= 500 ? "visible" : "hidden"}
                >
                    fak.
                </Frame>
                <Frame
                    initial={{ opacity: 0 }}
                    variants={variantsVisibility}
                    animate={scrollY >= 600 ? "visible" : "hidden"}
                    top={1000}
                    center
                    backgroundColor={"none"}
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
                    animate={scrollY >= 1120 ? "visible" : "hidden"}
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
                    animate={scrollY >= 3000 ? "visible" : "hidden"}
                >
                    Prvo što sam učinila kada sam shvatila da nam nema spasa.
                    Bila sam u toj zjapljujuće praznoj učionici. Nisam otišla
                    doma poljubiti roditelje. Ne odmah.
                </Frame>

                <Frame
                    top={4100}
                    backgroundColor="none"
                    variants={variantsVisibility}
                    animate={scrollY >= 3550 ? "visible" : "hidden"}
                >
                    Bila sam tamo, zamotana u slojeve i slojeve svoje kože.
                </Frame>
            </div>
        </React.Fragment>
    );
}
