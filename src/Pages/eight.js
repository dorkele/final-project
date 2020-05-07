import React, { useEffect } from "react";
import "./eight/eight.css";
import FadeOutFrame from "../components/fadeOutFrame";
import FadeInFadeOutFrame from "../components/fadeInFadeOutFrame";
import FadeInFrame from "../components/fadeInFrame";
import EightImageLayer from "./eight/eight-image-layer";

export default function Eight({
    variantsVisibility,
    scrollY,
    getSteppers,
    variantsOpacity,
}) {
    useEffect(() => {
        getSteppers(false);
    }, []);

    if (scrollY > 570) {
        console.log("getSteppers: ", getSteppers);
        getSteppers(true);
    }

    const style = {
        backgroundColor: "none",
        position: "fixed",
        fontSize: 30,
        fontWeight: "bold",
    };

    return (
        <React.Fragment>
            <div className="text-wrapping-container">
                <EightImageLayer
                    variantsOpacity={variantsOpacity}
                    scrollY={scrollY}
                />
                <FadeOutFrame
                    style={style}
                    width={700}
                    scrollY={scrollY}
                    treshold={60}
                    variantsVisibility={variantsVisibility}
                    center="x"
                    top={200}
                    text="Godinama, godinama poslije, ne sjećate se više nikoga. Ni
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
                    visokog plemstva. (Izmišljotina.)"
                />
                <FadeInFadeOutFrame
                    top={300}
                    left={687}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={60}
                    tresholdOut={100}
                    text="Što ćete učiniti kada ga pronađete? Do toga još niste
                    izračunali. Znate brojati samo na prste, a nemate ih toliko."
                />
                <FadeInFadeOutFrame
                    top={500}
                    left={100}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={100}
                    tresholdOut={150}
                    text="Bit će spektakularno, spekulirate."
                />
                <FadeInFadeOutFrame
                    top={340}
                    left={800}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={150}
                    tresholdOut={200}
                    width={500}
                    text="Jednom mi je rekao da je umoran od svega što posjeduje. Da
                    mu se često bljuje pa mu je neugodno pred dečkima. „Jako si
                    vizualan“, rekla sam mu, što je značilo, što je moglo
                    značiti: ne idi. Moglo je to značiti. Nekoliko je sljedećih
                    dana smrdjelo na naranče. Tako da, znam, kad bi sad
                    zamirisale naranče sigurno bih se sjetila kako izgleda. Jer,
                    zaboravila sam, pa ovo je sve godinama poslije kada nitko
                    više ne sliči na svoju dušu. Više smo anomalije, preživjele
                    animalije. "
                />
                <FadeInFadeOutFrame
                    top={91}
                    left={720}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={200}
                    tresholdOut={250}
                    text="„Ma daj, molim te. On je mrtav.“, rekla mi je kada je
                    skužila da sam opet ovdje. „Ne budi glupa, on je mrtav, kao
                    i tvoji roditelji, kao i tvoja sestra, kao i tvoj brat. Oni
                    su umrli jer te više ne trebaju.“"
                />
                <FadeInFadeOutFrame
                    top={270}
                    left={590}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={300}
                    tresholdOut={350}
                    text="„Ali zašto onda ne plešu?“, znala je o čemu govorim, ali
                    pogledala je u pod, u strop, u pod, u strop, u pod, u strop
                    od zvijezda."
                />
                <FadeInFadeOutFrame
                    top={267}
                    left={540}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={400}
                    tresholdOut={450}
                    text="„Zato što muze nisu pijane.“, i izvadila je rakiju da me
                    ušutka."
                />
                <FadeInFrame
                    center="x"
                    top={100}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={500}
                    text="Kada bi ga bilo, pouzdani sveznajući pripovjedač u trećem
                    licu rekao bi: „On nije mrtav, on negdje voli nekog drugog.
                    Preskaće vilicom, škripi kapkom, škrguće očnjakom. On
                    negdje.“"
                />
            </div>
        </React.Fragment>
    );
}
