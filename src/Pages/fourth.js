import React from "react";
import "./fourth/fourth.css";
import VideoFixedCenter from "./fourth/videoCenter";
import FadeOutFrame from "../components/fadeOutFrame";
import FadeInFadeOutFrame from "../components/fadeInFadeOutFrame";

export default function Fourth({ variantsVisibility, scrollY, getSteppers }) {
    if (scrollY > 970) {
        getSteppers(true);
    }

    const style = {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    };

    return (
        <React.Fragment>
            <div className="wrapper-container">
                <VideoFixedCenter src={"/images/video.mp4"} />
                <FadeOutFrame
                    text="Sjećate li se trenutka kada se Zemlja sručila u bezdan?
                    Smrad kaosa poput smrada leševa lelujao je ulicama ne
                    očekujući da ga netko osjeti. I onda smo mi postali mali
                    mravići koji hodaju po crti tik iznad tvojih trepavica
                    (postoji li uopće ime za taj dio tijela?). Što je najgore,
                    zaboravili smo pjevati. A kad mravi zaplaču, e to su
                    krokodilske suze. Pa se tako danima moglo čuti samo
                    zapomaganje, bez naznake lijepe melodije. A ja sam bila
                    mlada."
                    width={"40%"}
                    style={style}
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={80}
                    center="y"
                />
                <FadeInFadeOutFrame
                    text="I kad dođem doma sjest ću za stol s bratom, sestrom i djecom
                    iz susjedstva jer nam se roditelji nisu vratili."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={80}
                    tresholdOut={120}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zvoni telefon."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={120}
                    tresholdOut={160}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zvoni telefoni."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={160}
                    tresholdOut={200}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zvoni."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={200}
                    tresholdOut={240}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zove."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={240}
                    tresholdOut={280}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text=" Zvon."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={280}
                    tresholdOut={320}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zovu."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={320}
                    tresholdOut={360}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zvone vrata."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={400}
                    tresholdOut={440}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zvone vrata."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={440}
                    tresholdOut={480}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="  Otkuda izviru ta malena ubojstva? Zašto mi goblini skakuću
                    po kući?"
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={520}
                    tresholdOut={560}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Zvone vrata."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={560}
                    tresholdOut={600}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Ne mičem se. Ne smijem, jebote."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={600}
                    tresholdOut={640}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="To nije nitko naš. Ne više. Ne još. Rekla sam im: „Odite
                    stvarajte buku.“ I pitam se što su im rekli i pitam se di ti
                    je glava."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={640}
                    tresholdOut={680}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Di je tvoja glava da tu legne na taj moj jadni usplahireni
                    ušlagirani organ i sluša kako jedva živim?"
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={680}
                    tresholdOut={720}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Brat i sestra su istovremeno zašutjeli i ja s njima kada smo
                    shvatili da su zvali da nam jave da su naši roditelji bivši
                    ljudi. Nisu plakali. To je bilo ok od njih."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={720}
                    tresholdOut={740}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Iščekivanje: uskrsnuća mrtvih; prsnuća žilice u kutu lijevog oka, tamo kod suza; grešnog začeća;
                     bestjelesnog vlakovođe; tople mrtvačnice."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={740}
                    tresholdOut={780}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text="Kad bi mi sad netko rekao trepćem li brzo ili sporo i kolike
                    su mi zjenice, kad bi mi bar sad netko rekao sve što vidim.
                    Nisam sigurna bih li ga čula. Strah strah strah je u glavi
                    osamljen pa mu mašta mašta prijatelje."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={770}
                    tresholdOut={820}
                    style={style}
                    scrollY={scrollY}
                    width={"40%"}
                />
                <FadeInFadeOutFrame
                    text="Stara susjeda nam je donijela juhe. Puno je pričala, ali
                    zapamtila sam samo ovo: „Možda se pri kraju baš tako
                    osjećaš. Žao ti je, da, da, ti bi sve, sve si htio i još bi,
                    samo, nekako, spava ti se, malo sna, malo smrti ti ne bi
                    škodilo, šta sad.“ To što nema šanse da se sutra probudiš je
                    ideja toliko daleka da te apsolutno ne dira. Pa i kad kažeš
                    do viđenja, kad to zapravo i misliš? Rekli smo joj „do
                    viđenja“ sasvim nasmiješeni, no staru susjedu nismo više
                    nikada vidjeli."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={820}
                    tresholdOut={860}
                    style={style}
                    scrollY={scrollY}
                    width={"40%"}
                />
                <FadeInFadeOutFrame
                    text="Djeca su krenula relativno rano. Mislim, ranije nego što to
                    obično biva. Evo, to sam zapamtila. Onda, što još...? Bilo
                    je tu nekoliko čaša mlijeka na stolu i mogli smo čuti
                    krčkanje s krive radio-stanice. Od kud nam mlijeko? Mislim
                    da nije bilo mlijeka na stolu. Otišli su. A ja sam pogledala
                    crtiće bez njih."
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={900}
                    style={style}
                    scrollY={scrollY}
                    width={"40%"}
                />
            </div>
        </React.Fragment>
    );
}
