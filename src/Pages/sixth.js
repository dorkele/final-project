import React from "react";
import { Frame } from "framer";
import SixthImageLayer from "./sixth/sixth-image-layer";

export default function Sixth({ getSteppers, scrollY, language, isMobile }) {
    if (scrollY > 2130) {
        getSteppers(true);
    }

    const style = { backgroundColor: "none", fontSize: 25 };
    let text1, text2, text3, text4, text5, text6, text7;
    if (language === "croatian") {
        text1 =
            "I onda nakon toliko puno vremena (već sam pomislila na umiranje), pojavila se.  Morala je obaviti neke stvari. Sva u bijelom, u bijelom autu. Upitala sam je: „Zašto nismo umrle i mi?“";
        text2 = "„Muze ne puze.“, odgovorila je. Jasno.";
        text3 =
            "„Vodim te na zobene maćuhice.“, rekla je. Nasmiješila sam se nakon dugo.";
        text4 =
            "Ona stane kod nekog groba i malo kleči. Inače vozi brzo. Više se ne zaustavljamo. Ja povraćam i gledam ljude kroz prozor. Ja gledam ljude kroz prozor i povraćam. Ne komentiramo brdo nesparenih očiju. Ne pitam ju gdje idemo. Ne pitam ju gdje je bila do sada. Ne pitam ju zašto mi se onaj dan ni ikad više nije javila. Ne volim ju više kao onda. Ni faljenje ne popušta. Tu je, ali mi nedostaje kao i kada je nije bilo. Možda sam samo spora.";
        text5 =
            "Stižemo u kolibu njenog oca. On ne podiže glavu da me pozdravi. Nekad sam imala osjećaj da me voli više od nje. Uživala sam u tome čime se ne ponosim.";
        text6 =
            "„Idemo leć na pod.“, to je bila naša stvar. Na drvenom platou iza kolibe. Sada na masnoj zemljici. Htjela sam ju pitati na čijem smo ono grobu bile. Ona je zaustila prva: „Tvoje posljednje seksualno iskustvo?“. Nije razumjela da nisam vidjela živo biće, koliko dugo? Samo se nasmijala.";
        text7 =
            "A ja sam sanjala te noći njenog brata i onog tebe u zagrljaju u kojem ste plakali, dugo, sočno i bezumno. Sanjala sam i svog brata koji se smijao, ali nijemo. Nije izgledao kao on, ali ono, kakvi su već snovi, funkcioniralo je. Probudila sam se natečenih očiju s tupom željom da se tip s kraja razreda okrene prema meni. Na brata sam zaboravila. Vene su mi nabrekle i sjetila sam se bezdanog ponora u kojem se nalazimo. Ako uspijem zaboraviti na tako nešto, znači da je noć prošla uspješno.";
    } else {
        text1 =
            "And then, after so much time (I already thought of dying myself), she appeard. She had some errands to run. All in white, in a white car. I asked her: „Why are we not dead?”";
        text2 = "„The muses don't surrender.”, she answered. Of course.";
        text3 =
            "„I am taking you for pansie oatmeal.”, she said. I smiled after a long time.";
        text4 =
            "She stops by a grave and kneels for a while. Otherwise, she drives fast. We don't stop anymore. I am throwing up and watching people through the window. I am watching people through the window and throwing up. We don't comment on piles of unpaired eyes. I don't ask her where we are going. I don't ask her where was she until now. I don't ask her why she didn't pick up the phone that day or any other day. I don't love her as I did then. Missing doesn't stop now that she is here. Maybe I'm just slow.";
        text5 =
            "We arrive to her father's cottage. He doesn't lift his head to say hi. Sometimes I had a feeling he liked me more than he liked her. I enjoyed that which I am not proud of.";
        text6 =
            "„Let's lay on the floor.”, that was our thing. On the wooden platou behind the cottage, now on the greasy earth. I wanted to ask whose grave we visited. She started to speak first: „Your last sexual encounter?” She didn't understand I haven't seen a living creature for how long? She just laughed.";
        text7 =
            "And I dreamed that night of her brother and you in a hug. You cried for a long time, juicyly and mindlessly. I dreamed about my brother as well, he was laughing but mute. He didn't look like him, but you know how dreams are, it worked. I woke up with eyes swollen and a dull desire for the guy in the back of the classroom to turn towards me. My veins were bulging and I remembered the bottomless void we are in. If I manage to forget about something like that, it means the night was successful.";
    }

    return (
        <React.Fragment>
            <Frame
                width={"100%"}
                height={isMobile ? "580%" : "400%"}
                background={"none"}
            >
                <Frame background={"none"} x={-scrollY} position={"fixed"}>
                    <SixthImageLayer />
                    <Frame
                        style={style}
                        top={380}
                        width={600}
                        height={200}
                        left={50}
                    >
                        {text1}
                    </Frame>
                    <Frame
                        style={style}
                        top={100}
                        left={520}
                        width={500}
                        height={200}
                    >
                        {text2}
                    </Frame>
                    <Frame
                        style={style}
                        top={300}
                        left={1000}
                        width={500}
                        height={200}
                    >
                        {text3}
                    </Frame>
                    <Frame
                        style={style}
                        top={300}
                        left={1600}
                        width={500}
                        height={200}
                    >
                        {text4}
                    </Frame>
                    <Frame
                        style={style}
                        top={100}
                        left={2200}
                        width={500}
                        height={200}
                    >
                        {text5}
                    </Frame>
                    <Frame
                        style={style}
                        top={300}
                        left={2800}
                        width={500}
                        height={200}
                    >
                        {text6}
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "none",
                        whiteSpace: "nowrap",
                        position: "fixed",
                        fontSize: 23,
                    }}
                    bottom={"15%"}
                    width={"230%"}
                    height={25}
                    initial={{ left: 0 }}
                    animate={{ left: -scrollY }}
                >
                    {text7}
                </Frame>
            </Frame>
        </React.Fragment>
    );
}
