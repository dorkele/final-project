import React, { useEffect, useRef, useState } from "react";
import {
    useViewportScroll,
    Frame,
    useAnimation,
    useSpring,
    motion,
} from "framer";

import "./first.css";

export default function First() {
    const ref = useRef();
    const controls = useAnimation();
    let { scrollY, scrollX } = useViewportScroll();

    // if ({ scrollY } > 10) {
    //     controls.start({
    //         x: "100%",
    //         backgroundColor: "#f00",
    //         transition: { duration: 3 },
    //     });
    // }
    let [shouldShowAnimations, setShouldShowAnimations] = useState(false);
    //const [timing, setTiming] = useState();

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 5) {
                console.log("scrollY");

                setShouldShowAnimations(true);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <React.Fragment>
            <div>
                <Frame
                    size={100}
                    center
                    whileHover={{ scale: 1.2 }}
                    //scaleY={scrollYProgress}
                    // animate={{ rotate: 360 }}
                    // transition={{ duration: 2 }}
                    className="paragraf"
                    rotate={scrollY}
                >
                    Očnjaci, podočnjaci, kapci.
                </Frame>
            </div>
            <motion.div
                animate={{ rotate: shouldShowAnimations ? 360 : 0 }}
                transition={{ duration: 2 }}
            >
                Očnjaci, podočnjaci, kapci. Bilo je premalo sati kada su nam
                rekli što se događa. Bili smo ranjivi, sanjivi, fak.
            </motion.div>
            <Frame animate={{ opacity: 0 }} transition={{ duration: 5 }}>
                Sjediš negdje u dnu razreda, a ja duboko u sebi čujem
                preskakanje tvoje vilice, škripanje tvog kapka, škrgutanje tvog
                očnjaka.
            </Frame>
            <Frame animate={controls}>
                Očnjaci, podočnjaci, kapci. Očnjaci, podočnjaci, kapci tvoji ne
                govore tko su bili tvoji preci ni u kojim su nijemim filmovima
                glumili. Sve što mi imaju za reći su neugodne frekvencije.
            </Frame>
            <p>
                Koliko smo se puta u mojoj glavi, šta? Seksali jebali vodili
                ljubav, te spike. Ti si se malo okrenuo prema meni pa sam
                zaključila da me obožavaš.
            </p>
            <p>
                I tako, u skoro ljetno jutro, dok djevojčice pupaju (tiho, tiho,
                no ne i pretiho), oni ulaze u učionice i javljaju kako
                katastrofa čuči pod stolom. Najavljuju kolektivno umiranje. I
                nisu mogli biti precizniji od: „ovih dana“. Možda se prvo
                nervozno smijuckamo. Možda, ali nekako ne vjerujem, vidi se na
                njima da su malo prije povraćali. I da će opet.
            </p>
            <motion.div>
                Bojiš se, znojiš se, a možda bi baš bilo dobro u ovom trenutku
                kihnuti. Ali ne možeš toliko dugo oči držati zatvorene. Ej znaš
                šta, ti jedan jadno poseban, daj da ti diram kosu. Ali učionica
                je prazna. Zjapi prazna. Zjapi. Oni ljudi su otišli. Dali su mi
                kamenčiće. Sve što su mi dali bili su kamenčići.
            </motion.div>
            <p>
                Prvo što sam učinila kada sam shvatila da nam nema spasa. Bila
                sam u toj zjapljujuće praznoj učionici. Nisam otišla doma
                poljubiti roditelje. Ne odmah.
            </p>
            <motion.div>
                Bila sam tamo, zamotana u slojeve i slojeve svoje kože.
            </motion.div>
        </React.Fragment>
    );
}
