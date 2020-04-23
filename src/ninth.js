import React, { useEffect } from "react";
import { Frame } from "framer";

export default function Ninth({ variantsVisibility, scrollY }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <div className="wrapping-container">
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        fontSize: 30,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 60 ? "hidden" : "visible"}
                >
                    Ali monolog pijane žene koja mi je sve u rodu (koji slijedi,
                    ali mi prethodi) bio je spreman: „Ići ćemo zajedno kroz
                    polja. Bespolno. Nemoj se uopće bojati. Nećeš se bojati.
                    Tada ćeš mi vjerovati. U ustima neće biti mrlja krvi kao
                    sada. Više nećeš jesti jezike. Umirat će samo najjači. Mi
                    ćemo ostati netaknuti. Svrbit će nas sunce. I uzgojit ćemo
                    duge zlatne dlake na glavama. Ni sami nećemo znati tko je
                    tko koliko ćemo se petljati. O kose, ne o jezike. Bol će se
                    zvati nešto drugo, jer prelijepa je riječ da je zaboravimo.
                    Sjećaš li se kako smo nekada imali sve vrijeme za gubljenje
                    i onda smo ga izgubile? Ovo je godinama poslije i ja sam ta
                    koja ti govori da nikada nećeš vidjeti ljubav svog života
                    jer si oduvijek bila kukavica. Od svih ljudi sam to ja. Dali
                    su ti kamenčiće, sve što su ti dali bili su kamenčići.“
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 60 ? "visible" : "hidden"}
                    className={scrollY >= 100 ? "hidden" : "black"}
                >
                    Kako ona to zna, molim te?
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        fontSize: 30,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                    className={scrollY >= 140 ? "hidden" : "black"}
                >
                    Mogu je čuti da priča, ali riječi nam ne znače ništa slično.
                    Kaže vidjeti, a misli: voljeti. Kaže sjećaš li se, a misli:
                    sve smo izmislile. Sve smo izmislile u onom trenutku kada su
                    naši prijatelji previše počeli pričati ne o nama i ne nama i
                    legle smo na pod i rekle sve što imamo su kamenčići, a svi
                    su drugi mrtvi, a mi smo još uvijek prekrasne. Ali svi koje
                    volimo su mrtvi, to je prvo pravilo, svi koje volimo su
                    mrtvi.
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        position: "fixed",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 140 ? "visible" : "hidden"}
                    className={scrollY >= 200 ? "hidden" : "black"}
                >
                    I onda: „zamisli“.
                </Frame>
            </div>
        </React.Fragment>
    );
}
