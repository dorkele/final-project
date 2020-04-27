import React, { useEffect } from "react";
import { Frame, motion } from "framer";
import "./fourth.css";

export default function Fourth({ variantsVisibility, scrollY, getSteppers }) {
    //console.log(variantsVisibility, scrollY);

    useEffect(() => {
        window.scrollTo(0, 0);
        getSteppers(false);
    }, []);
    if (scrollY > 970) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }
    return (
        <React.Fragment>
            <div className="wrapper-container">
                <Frame
                    center
                    size={"100%"}
                    position={"fixed"}
                    background={"none"}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <video autoplay="true" muted="true" loop="true">
                        <source
                            src="/images/video.mp4"
                            type="video/mp4"
                        ></source>
                    </video>
                </Frame>
                <Frame
                    center
                    position={"fixed"}
                    backgroundColor={"none"}
                    variants={variantsVisibility}
                    animate={scrollY >= 80 ? "hidden" : "visible"}
                    width={500}
                    style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
                >
                    Sjećate li se trenutka kada se Zemlja sručila u bezdan?
                    Smrad kaosa poput smrada leševa lelujao je ulicama ne
                    očekujući da ga netko osjeti. I onda smo mi postali mali
                    mravići koji hodaju po crti tik iznad tvojih trepavica
                    (postoji li uopće ime za taj dio tijela?). Što je najgore,
                    zaboravili smo pjevati. A kad mravi zaplaču, e to su
                    krokodilske suze. Pa se tako danima moglo čuti samo
                    zapomaganje, bez naznake lijepe melodije. A ja sam bila
                    mlada.
                </Frame>
                <Frame
                    center
                    position={"fixed"}
                    backgroundColor={"none"}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 80 ? "visible" : "hidden"}
                    className={scrollY >= 120 ? "hidden" : "black"}
                    style={{ fontWeight: "bold", color: "white" }}
                >
                    I kad dođem doma sjest ću za stol s bratom, sestrom i djecom
                    iz susjedstva jer nam se roditelji nisu vratili.
                </Frame>

                <Frame
                    center
                    position={"fixed"}
                    backgroundColor={"none"}
                    style={{ fontWeight: "bold", color: "white" }}
                    initial={{ opacity: 0 }}
                    variants={variantsVisibility}
                    animate={scrollY >= 120 ? "visible" : "hidden"}
                    className={scrollY >= 160 ? "hidden" : "black"}
                >
                    Zvoni telefon.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 160 ? "visible" : "hidden"}
                    className={scrollY >= 200 ? "hidden" : "black"}
                >
                    Zvoni telefoni.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 200 ? "visible" : "hidden"}
                    className={scrollY >= 240 ? "hidden" : "black"}
                >
                    Zvoni.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 240 ? "visible" : "hidden"}
                    className={scrollY >= 280 ? "hidden" : "black"}
                >
                    Zove.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 280 ? "visible" : "hidden"}
                    className={scrollY >= 320 ? "hidden" : "black"}
                >
                    Zvon.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 320 ? "visible" : "hidden"}
                    className={scrollY >= 360 ? "hidden" : "black"}
                >
                    Zovu.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 400 ? "visible" : "hidden"}
                    className={scrollY >= 440 ? "hidden" : "black"}
                >
                    Zvone vrata.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 440 ? "visible" : "hidden"}
                    className={scrollY >= 480 ? "hidden" : "black"}
                >
                    Zvone vrata.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 520 ? "visible" : "hidden"}
                    className={scrollY >= 560 ? "hidden" : "black"}
                >
                    Otkuda izviru ta malena ubojstva? Zašto mi goblini skakuću
                    po kući?
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    top={300}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 560 ? "visible" : "hidden"}
                    className={scrollY >= 600 ? "hidden" : "black"}
                >
                    Zvone vrata.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 600 ? "visible" : "hidden"}
                    className={scrollY >= 640 ? "hidden" : "black"}
                >
                    Ne mičem se. Ne smijem, jebote.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 640 ? "visible" : "hidden"}
                    className={scrollY >= 680 ? "hidden" : "black"}
                >
                    To nije nitko naš. Ne više. Ne još. Rekla sam im: „Odite
                    stvarajte buku.“ I pitam se što su im rekli i pitam se di ti
                    je glava.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 680 ? "visible" : "hidden"}
                    className={scrollY >= 720 ? "hidden" : "black"}
                >
                    Di je tvoja glava da tu legne na taj moj jadni usplahireni
                    ušlagirani organ i sluša kako jedva živim?
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 720 ? "visible" : "hidden"}
                    className={scrollY >= 740 ? "hidden" : "black"}
                >
                    Brat i sestra su istovremeno zašutjeli i ja s njima kada smo
                    shvatili da su zvali da nam jave da su naši roditelji bivši
                    ljudi. Nisu plakali. To je bilo ok od njih.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 740 ? "visible" : "hidden"}
                    className={scrollY >= 780 ? "hidden" : "black"}
                    width={500}
                >
                    Iščekivanje:  
                    <ul>
                        <li> uskrsnuća mrtvih </li>
                        <li>
                            prsnuća žilice u kutu lijevog oka, tamo kod suza
                        </li>
                        <li> grešnog začeća</li>
                        <li> bestjelesnog vlakovođe</li>
                        <li> tople mrtvačnice.</li>
                    </ul>
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 770 ? "visible" : "hidden"}
                    className={scrollY >= 820 ? "hidden" : "black"}
                    width={500}
                >
                    Kad bi mi sad netko rekao trepćem li brzo ili sporo i kolike
                    su mi zjenice, kad bi mi bar sad netko rekao sve što vidim.
                    Nisam sigurna bih li ga čula. Strah strah strah je u glavi
                    osamljen pa mu mašta mašta prijatelje.
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 820 ? "visible" : "hidden"}
                    className={scrollY >= 860 ? "hidden" : "black"}
                    width={500}
                >
                    Stara susjeda nam je donijela juhe. Puno je pričala, ali
                    zapamtila sam samo ovo: „Možda se pri kraju baš tako
                    osjećaš. Žao ti je, da, da, ti bi sve, sve si htio i još bi,
                    samo, nekako, spava ti se, malo sna, malo smrti ti ne bi
                    škodilo, šta sad.“ To što nema šanse da se sutra probudiš je
                    ideja toliko daleka da te apsolutno ne dira. Pa i kad kažeš
                    do viđenja, kad to zapravo i misliš? Rekli smo joj „do
                    viđenja“ sasvim nasmiješeni, no staru susjedu nismo više
                    nikada vidjeli.  
                </Frame>
                <Frame
                    backgroundColor={"none"}
                    center
                    position={"fixed"}
                    style={{ fontWeight: "bold", fontSize: 30, color: "white" }}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 900 ? "visible" : "hidden"}
                    width={500}
                >
                    Djeca su krenula relativno rano. Mislim, ranije nego što to
                    obično biva. Evo, to sam zapamtila. Onda, što još...? Bilo
                    je tu nekoliko čaša mlijeka na stolu i mogli smo čuti
                    krčkanje s krive radio-stanice. Od kud nam mlijeko? Mislim
                    da nije bilo mlijeka na stolu. Otišli su. A ja sam pogledala
                    crtiće bez njih.
                </Frame>
            </div>
        </React.Fragment>
    );
}
