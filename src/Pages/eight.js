import React from "react";
import styles from "./eight/eight.module.css";
import FadeOutFrame from "../components/fadeOutFrame";
import FadeInFadeOutFrame from "../components/fadeInFadeOutFrame";
import FadeInFrame from "../components/fadeInFrame";
import EightImageLayer from "./eight/eight-image-layer";

export default function Eight({
    variantsVisibility,
    scrollY,
    getSteppers,
    variantsOpacity,
    language,
}) {
    if (scrollY > 570) {
        getSteppers(true);
    }

    const style = {
        backgroundColor: "none",
        position: "fixed",
        fontSize: 30,
        fontWeight: "bold",
    };

    let text1, text2, text3, text4, text5, text6, text7, text8;

    if (language === "croatian") {
        text1 =
            "Godinama, godinama poslije, ne sjećate se više nikoga. Ni glupe kolibe, ni glupog djeteta i njegova oca. Godinama poslije razvili ste bolest koja ne pamti pijane muze koje od ležanja na podu stvaraju aktivnu radnju koja nagoviješta budućnost koja... Godinama poslije svi su oni jako lijepi, i dok se miču oko vas sve je šareno, a njihovi perpetuirani oblici mašu vam kroz prozore jurećih automobila. Tu i tamo bljesak postojanja. Sjećanje lagano zatreperi, svi se oni oko vas umire, a poslije (ili prije) čujete ih kako uzbuđeno šapuću iza vrata. Prođe još nekoliko godina i vi ozdravite, ali se pretvarate. Pretvarat ćete se još neko vrijeme. Sad kad ste se probudili, opet probudili, možda stvarno probudili, vrijeme je da pronađete očnjake, podočnjake, kapke s početka priče. Ne ispod jastuka, on nije ispod jastuka. On negdje voli nekoga tko niste vi. Sada shvaćate da postojite samo zato jer on negdje voli nekoga. Jedina stvar koju ste zaboravili zaboraviti bilo je preskakanje njegove vilice, škripanje njegovog kapka, škrgutanje njegovog očnjaka. Melodija. Melodija. Božanstvena melodija visokog plemstva. (Izmišljotina.)";
        text2 =
            "Što ćete učiniti kada ga pronađete? Do toga još niste izračunali. Znate brojati samo na prste, a nemate ih toliko.";
        text3 = "Bit će spektakularno, spekulirate.";
        text4 =
            "Jednom mi je rekao da je umoran od svega što posjeduje. Da mu se često bljuje pa mu je neugodno pred dečkima. „Jako si vizualan“, rekla sam mu, što je značilo, što je moglo značiti: ne idi. Moglo je to značiti. Nekoliko je sljedećih dana smrdjelo na naranče. Tako da, znam, kad bi sad zamirisale naranče sigurno bih se sjetila kako izgleda. Jer, zaboravila sam, pa ovo je sve godinama poslije kada nitko više ne sliči na svoju dušu. Više smo anomalije, preživjele animalije. ";
        text5 =
            "„Ma daj, molim te. On je mrtav.“, rekla mi je kada je skužila da sam opet ovdje. „Ne budi glupa, on je mrtav, kao i tvoji roditelji, kao i tvoja sestra, kao i tvoj brat. Oni su umrli jer te više ne trebaju.“";
        text6 =
            "„Ali zašto onda ne plešu?“, znala je o čemu govorim, ali pogledala je u pod, u strop, u pod, u strop, u pod, u strop od zvijezda.";
        text7 =
            "„Zato što muze nisu pijane.“, i izvadila je rakiju da me ušutka.";
        text8 =
            "Kada bi ga bilo, pouzdani sveznajući pripovjedač u trećem licu rekao bi: „On nije mrtav, on negdje voli nekog drugog. Preskaće vilicom, škripi kapkom, škrguće očnjakom. On negdje.“";
    } else {
        text1 =
            "Years and years later, you don't remember anyone. Not the stupid cottage, not even the stupid baby or his father. Years later you developed a sickness that doesn't remember drunk muses who create an activity from laying on the ground that hints toward the future that... Years later all of them are beautiful, and while they move around you everything is colorful, and their perpetuated shapes are waving to you from the windows of racing cars. Here and there a flash of existence. The memory slightly trembles, all of them are still around you, and after (or before) you hear them whispering excitedly behind the door. A few years more passes and you are cured, but you pretend. You will pretend a bit more. Now that you are awake, awake again, maybe truly awake, it is time to find dogteeth, dark circles, eyelids from the beginning of this story. Not underneath the pillow, he is not underneath your pillow. He is somewhere loving someone who is not you. He is somewhere loving someone. The only thing you forgot to forget was the crunching of his jaw, creaking of his eyelids, the grinding rhyme of his dogteeth. A melody. A melody. A divine melody of high nobility. (A fabrication.)";
        text2 =
            "What will you do when you find him? You didn't count up that far. You know to count on your fingers, and you don't have that many.";
        text3 = "It will be spectacular, you speculate.";
        text4 =
            "He told me once that he is tired of everything he owns. That he often needs to throw up so he is embaressed in front of the boys. „You are very visual”, I told him, and it meant, it could have meant: don't go. It could've meant that. A few days later everything smelled like oranges. So, I know that, if I could smell the oranges now, I would be able to remember how he looks. Because, I forgot, all of this is years after when nobody looks like their souls anymore. We are more like anomalies, surviving animals.";
        text5 =
            "„Oh, please. He is dead.”, she said when she noticed I am here again. „Don't be stupid, he is dead, like your parents, like your sister, like your brother. They died because they don't need you anymore.”";
        text6 =
            "„But why don't they dance then?”, she knew what I was talking about, but she looked at the floor, at the ceiling, floor, ceiling, floor, ceiling made of stars.";
        text7 =
            "„Because the muses are not drunk.”, and she pulled out rakija to shut me up.";
        text8 =
            "If he would exist, a reliable all-knowing narrator in 3rd person singular, would say: „He is not dead, he somewhere loves someone else.  Crunching his jaw, creaking his eyelids, grinding his dogteeth. He somwhere.”";
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <EightImageLayer
                    variantsOpacity={variantsOpacity}
                    scrollY={scrollY}
                />
                <FadeOutFrame
                    style={style}
                    width={"53%"}
                    scrollY={scrollY}
                    treshold={60}
                    variantsVisibility={variantsVisibility}
                    left={"47%"}
                    top={"35%"}
                    text={text1}
                />
                <FadeInFadeOutFrame
                    top={"40%"}
                    left={"47%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={60}
                    tresholdOut={100}
                    text={text2}
                />
                <FadeInFadeOutFrame
                    top={"70%"}
                    left={"10%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={100}
                    tresholdOut={150}
                    text={text3}
                />
                <FadeInFadeOutFrame
                    top={"25%"}
                    left={"60%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={150}
                    tresholdOut={200}
                    width={"40%"}
                    text={text4}
                />
                <FadeInFadeOutFrame
                    top={"22%"}
                    left={"45%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={200}
                    tresholdOut={250}
                    text={text5}
                />
                <FadeInFadeOutFrame
                    top={"20%"}
                    left={"37%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={300}
                    tresholdOut={350}
                    text={text6}
                />
                <FadeInFadeOutFrame
                    top={"25%"}
                    left={"53%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={400}
                    tresholdOut={450}
                    text={text7}
                />
                <FadeInFrame
                    center="x"
                    top={"10%"}
                    variantsVisibility={variantsVisibility}
                    style={style}
                    scrollY={scrollY}
                    treshold={500}
                    text={text8}
                />
            </div>
        </React.Fragment>
    );
}
