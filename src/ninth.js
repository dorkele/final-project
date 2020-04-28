import React, { useEffect } from "react";
import { Frame, Page } from "framer";

export default function Ninth({ getSteppers }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        getSteppers(false);
    }, []);

    return (
        <React.Fragment>
            <Page
                alignment="center"
                size="100%"
                defaultEffect={"coverflow"}
                onChangePage={(current, previous) => {
                    console.log(current, previous);
                    if (current === 3) {
                        getSteppers(true);
                    }
                }}
            >
                <Frame
                    style={{
                        backgroundColor: "none",

                        fontSize: 30,
                        width: "100%",
                        height: "100%",
                    }}
                    top={100}
                >
                    <Frame center width={"50%"} background={"none"}>
                        Ali monolog pijane žene koja mi je sve u rodu (koji
                        slijedi, ali mi prethodi) bio je spreman: „Ići ćemo
                        zajedno kroz polja. Bespolno. Nemoj se uopće bojati.
                        Nećeš se bojati. Tada ćeš mi vjerovati. U ustima neće
                        biti mrlja krvi kao sada. Više nećeš jesti jezike.
                        Umirat će samo najjači. Mi ćemo ostati netaknuti. Svrbit
                        će nas sunce. I uzgojit ćemo duge zlatne dlake na
                        glavama. Ni sami nećemo znati tko je tko koliko ćemo se
                        petljati. O kose, ne o jezike. Bol će se zvati nešto
                        drugo, jer prelijepa je riječ da je zaboravimo. Sjećaš
                        li se kako smo nekada imali sve vrijeme za gubljenje i
                        onda smo ga izgubile? Ovo je godinama poslije i ja sam
                        ta koja ti govori da nikada nećeš vidjeti ljubav svog
                        života jer si oduvijek bila kukavica. Od svih ljudi sam
                        to ja. Dali su ti kamenčiće, sve što su ti dali bili su
                        kamenčići.“
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "#8c52ff",
                        color: "#ff5757",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                >
                    Kako ona to zna, molim te?
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",

                        fontSize: 30,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                >
                    <Frame center width={"50%"} background={"none"}>
                        Mogu je čuti da priča, ali riječi nam ne znače ništa
                        slično. Kaže vidjeti, a misli: voljeti. Kaže sjećaš li
                        se, a misli: sve smo izmislile. Sve smo izmislile u onom
                        trenutku kada su naši prijatelji previše počeli pričati
                        ne o nama i ne nama i legle smo na pod i rekle sve što
                        imamo su kamenčići, a svi su drugi mrtvi, a mi smo još
                        uvijek prekrasne. Ali svi koje volimo su mrtvi, to je
                        prvo pravilo, svi koje volimo su mrtvi.
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "#ff5757",
                        color: "#8c52ff",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                >
                    I onda: „zamisli“.
                </Frame>
            </Page>
        </React.Fragment>
    );
}
