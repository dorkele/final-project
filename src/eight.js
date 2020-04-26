import React, { useEffect } from "react";
import { Frame } from "framer";
import "./eight.css";

export default function Eight({ variantsVisibility, scrollY, getSteppers }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    if (scrollY > 570) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }
    return (
        <React.Fragment>
            <div className="text-wrapping-container">
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 60 ? "hidden" : "visible"}
                    width={500}
                >
                    Godinama, godinama poslije, ne sjećate se više nikoga. Ni
                    glupe kolibe, ni glupog djeteta i njegova oca. Godinama
                    poslije razvili ste bolest koja ne pamti pijane muze koje od
                    ležanja na podu stvaraju aktivnu radnju koja nagoviješta
                    budućnost koja... Godinama poslije svi su oni jako lijepi, i
                    dok se miču oko vas sve je šareno, a njihovi perpetuirani
                    oblici mašu vam kroz prozore jurećih automobila. Tu i tamo
                    bljesak postojanja. Sjećanje lagano zatreperi, svi se oni
                    oko vas umire, a poslije (ili prije) čujete ih kako uzbuđeno
                    šapuću iza vrata. Prođe još nekoliko godina i vi ozdravite,
                    ali se pretvarate. Pretvarat ćete se još neko vrijeme. Sad
                    kad ste se probudili, opet probudili, možda stvarno
                    probudili, vrijeme je da pronađete očnjake, podočnjake,
                    kapke s početka priče. Ne ispod jastuka, on nije ispod
                    jastuka. On negdje voli nekoga tko niste vi. Sada shvaćate
                    da postojite samo zato jer on negdje voli nekoga. Jedina
                    stvar koju ste zaboravili zaboraviti bilo je preskakanje
                    njegove vilice, škripanje njegovog kapka, škrgutanje
                    njegovog očnjaka. Melodija. Melodija. Božanstvena melodija
                    visokog plemstva. (Izmišljotina.)
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    top={300}
                    left={687}
                    variants={variantsVisibility}
                    animate={scrollY >= 50 ? "visible" : "hidden"}
                    className={scrollY >= 100 ? "hidden" : "black"}
                >
                    Što ćete učiniti kada ga pronađete? Do toga još niste
                    izračunali. Znate brojati samo na prste, a nemate ih toliko.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    top={500}
                    left={100}
                    variants={variantsVisibility}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                    className={scrollY >= 150 ? "hidden" : "black"}
                >
                    Bit će spektakularno, spekulirate.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    top={340}
                    left={800}
                    variants={variantsVisibility}
                    animate={scrollY >= 150 ? "visible" : "hidden"}
                    className={scrollY >= 200 ? "hidden" : "black"}
                >
                    Jednom mi je rekao da je umoran od svega što posjeduje. Da
                    mu se često bljuje pa mu je neugodno pred dečkima. „Jako si
                    vizualan“, rekla sam mu, što je značilo, što je moglo
                    značiti: ne idi. Moglo je to značiti. Nekoliko je sljedećih
                    dana smrdjelo na naranče. Tako da, znam, kad bi sad
                    zamirisale naranče sigurno bih se sjetila kako izgleda. Jer,
                    zaboravila sam, pa ovo je sve godinama poslije kada nitko
                    više ne sliči na svoju dušu. Više smo anomalije, preživjele
                    animalije. 
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    top={11}
                    left={720}
                    variants={variantsVisibility}
                    animate={scrollY >= 200 ? "visible" : "hidden"}
                    className={scrollY >= 250 ? "hidden" : "black"}
                >
                    „Ma daj, molim te. On je mrtav.“, rekla mi je kada je
                    skužila da sam opet ovdje. „Ne budi glupa, on je mrtav, kao
                    i tvoji roditelji, kao i tvoja sestra, kao i tvoj brat. Oni
                    su umrli jer te više ne trebaju.“
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    top={270}
                    left={590}
                    variants={variantsVisibility}
                    animate={scrollY >= 300 ? "visible" : "hidden"}
                    className={scrollY >= 350 ? "hidden" : "black"}
                >
                    „Ali zašto onda ne plešu?“, znala je o čemu govorim, ali
                    pogledala je u pod, u strop, u pod, u strop, u pod, u strop
                    od zvijezda.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    top={267}
                    left={540}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? "visible" : "hidden"}
                    className={scrollY >= 450 ? "hidden" : "black"}
                >
                    „Zato što muze nisu pijane.“, i izvadila je rakiju da me
                    ušutka.
                </Frame>
                <Frame
                    style={{ backgroundColor: "none", position: "fixed" }}
                    center
                    variants={variantsVisibility}
                    animate={scrollY >= 500 ? "visible" : "hidden"}
                >
                    Kada bi ga bilo, pouzdani sveznajući pripovjedač u trećem
                    licu rekao bi: „On nije mrtav, on negdje voli nekog drugog.
                    Preskaće vilicom, škripi kapkom, škrguće očnjakom. On
                    negdje.“
                </Frame>
            </div>
        </React.Fragment>
    );
}
