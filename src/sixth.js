import React, { useEffect } from "react";
import { Frame } from "framer";
import "./sixth.css";

export default function Sixth({ variantsVisibility, scrollX, getSteppers }) {
    //const { scrollX } = useViewportScroll();

    useEffect(() => {
        window.scrollTo(0, 0);
        getSteppers(false);
    }, []);
    if (scrollX > 2170) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }
    return (
        <React.Fragment>
            <div className="wrap-container">
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={400}
                    width={600}
                    height={200}
                    left={50}
                >
                    I onda nakon toliko puno vremena (već sam pomislila na
                    umiranje), pojavila se.  Morala je obaviti neke stvari. Sva
                    u bijelom, u bijelom autu. Upitala sam je: „Zašto nismo
                    umrle i mi?“
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={100}
                    left={520}
                    width={500}
                    height={200}
                >
                    „Muze ne puze.“, odgovorila je. Jasno.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={300}
                    left={1000}
                    width={500}
                    height={200}
                >
                    „Vodim te na zobene maćuhice.“, rekla je. Nasmiješila sam se
                    nakon dugo.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={300}
                    left={1600}
                    width={500}
                    height={200}
                >
                    Ona stane kod nekog groba i malo kleči. Inače vozi brzo.
                    Više se ne zaustavljamo. Ja povraćam i gledam ljude kroz
                    prozor. Ja gledam ljude kroz prozor i povraćam. Ne
                    komentiramo brdo nesparenih očiju. Ne pitam ju gdje idemo.
                    Ne pitam ju gdje je bila do sada. Ne pitam ju zašto mi se
                    onaj dan ni ikad više nije javila. Ne volim ju više kao
                    onda. Ni faljenje ne popušta. Tu je, ali mi nedostaje kao i
                    kada je nije bilo. Možda sam samo spora.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={100}
                    left={2200}
                    width={500}
                    height={200}
                >
                    Stižemo u kolibu njenog oca. On ne podiže glavu da me
                    pozdravi. Nekad sam imala osjećaj da me voli više od nje.
                    Uživala sam u tome čime se ne ponosim. 
                </Frame>
                <Frame
                    style={{ backgroundColor: "none" }}
                    top={400}
                    left={2800}
                    width={500}
                    height={200}
                >
                    „Idemo leć na pod.“, to je bila naša stvar. Na drvenom
                    platou iza kolibe. Sada na masnoj zemljici. Htjela sam ju
                    pitati na čijem smo ono grobu bile. Ona je zaustila prva:
                    „Tvoje posljednje seksualno iskustvo?“. Nije razumjela da
                    nisam vidjela živo biće, koliko dugo? Samo se nasmijala.
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        //overflow: "hidden",
                        whiteSpace: "nowrap",

                        position: "fixed",
                    }}
                    bottom={50}
                    //left={0}
                    width={"250%"}
                    height={25}
                    initial={{ left: 0 }}
                    animate={{ left: -scrollX }}
                >
                    A ja sam sanjala te noći njenog brata i onog tebe u
                    zagrljaju u kojem ste plakali, dugo, sočno i bezumno.
                    Sanjala sam i svog brata koji se smijao, ali nijemo. Nije
                    izgledao kao on, ali ono, kakvi su već snovi, funkcioniralo
                    je. Probudila sam se natečenih očiju s tupom željom da se
                    tip s kraja razreda okrene prema meni. Na brata sam
                    zaboravila. Vene su mi nabrekle i sjetila sam se bezdanog
                    ponora u kojem se nalazimo. Ako uspijem zaboraviti na tako
                    nešto, znači da je noć prošla uspješno.
                </Frame>
            </div>
        </React.Fragment>
    );
}
