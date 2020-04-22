import React from "react";
import { useViewportScroll, Scroll, Frame } from "framer";

export default function Fourth() {
    const { scrollY } = useViewportScroll();
    console.log("scrollY: ", scrollY);
    return (
        <React.Fragment>
            <Scroll size={"100%"}>
                <Frame size={"200%"}>Fourth</Frame>
                <div>
                    <p>
                        Sjećate li se trenutka kada se Zemlja sručila u bezdan?
                        Smrad kaosa poput smrada leševa lelujao je ulicama ne
                        očekujući da ga netko osjeti. I onda smo mi postali mali
                        mravići koji hodaju po crti tik iznad tvojih trepavica
                        (postoji li uopće ime za taj dio tijela?). Što je
                        najgore, zaboravili smo pjevati. A kad mravi zaplaču, e
                        to su krokodilske suze. Pa se tako danima moglo čuti
                        samo zapomaganje, bez naznake lijepe melodije. A ja sam
                        bila mlada.
                    </p>
                    <p>
                        I kad dođem doma sjest ću za stol s bratom, sestrom i
                        djecom iz susjedstva jer nam se roditelji nisu vratili.
                    </p>
                    <p>Zvoni telefon.</p>
                    <p>Zvoni telefoni.</p>
                    <p>Zvoni.</p>
                    <p>Zove.</p>
                    <p>Zvon.</p>
                    <p>Zovu.</p>
                    <p>Zvone vrata.</p>
                    <p>Zvone vrata.</p>
                    <p>
                        Otkuda izviru ta malena ubojstva? Zašto mi goblini
                        skakuću po kući?
                    </p>
                    <p>Zvone vrata.</p>
                    <p>Ne mičem se. Ne smijem, jebote.</p>
                    <p>
                        To nije nitko naš. Ne više. Ne još. Rekla sam im: „Odite
                        stvarajte buku.“ I pitam se što su im rekli i pitam se
                        di ti je glava.
                    </p>
                    <p>
                        Di je tvoja glava da tu legne na taj moj jadni
                        usplahireni ušlagirani organ i sluša kako jedva živim?
                    </p>
                    <p>
                        Brat i sestra su istovremeno zašutjeli i ja s njima kada
                        smo shvatili da su zvali da nam jave da su naši
                        roditelji bivši ljudi. Nisu plakali. To je bilo ok od
                        njih.
                    </p>
                    <p>
                        Iščekivanje:  
                        <ul>
                            <li>- uskrsnuća mrtvih </li>
                            <li>
                                - prsnuća žilice u kutu lijevog oka, tamo kod
                                suza
                            </li>
                            <li> - grešnog začeća</li>
                            <li>- bestjelesnog vlakovođe</li>
                            <li> - tople mrtvačnice.</li>
                        </ul>
                    </p>
                    <p>
                        Kad bi mi sad netko rekao trepćem li brzo ili sporo i
                        kolike su mi zjenice, kad bi mi bar sad netko rekao sve
                        što vidim. Nisam sigurna bih li ga čula. Strah strah
                        strah je u glavi osamljen pa mu mašta mašta prijatelje.
                    </p>
                    <p>
                        Stara susjeda nam je donijela juhe. Puno je pričala, ali
                        zapamtila sam samo ovo: „Možda se pri kraju baš tako
                        osjećaš. Žao ti je, da, da, ti bi sve, sve si htio i još
                        bi, samo, nekako, spava ti se, malo sna, malo smrti ti
                        ne bi škodilo, šta sad.“ To što nema šanse da se sutra
                        probudiš je ideja toliko daleka da te apsolutno ne dira.
                        Pa i kad kažeš do viđenja, kad to zapravo i misliš?
                        Rekli smo joj „do viđenja“ sasvim nasmiješeni, no staru
                        susjedu nismo više nikada vidjeli.  {" "}
                    </p>
                    <p>
                        Djeca su krenula relativno rano. Mislim, ranije nego što
                        to obično biva. Evo, to sam zapamtila. Onda, što još...?
                        Bilo je tu nekoliko čaša mlijeka na stolu i mogli smo
                        čuti krčkanje s krive radio-stanice. Od kud nam mlijeko?
                        Mislim da nije bilo mlijeka na stolu. Otišli su. A ja
                        sam pogledala crtiće bez njih.
                    </p>
                </div>
            </Scroll>
        </React.Fragment>
    );
}
