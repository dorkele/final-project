import React from "react";
import styles from "./fourth/fourth.module.css";
import VideoFixedCenter from "./fourth/videoCenter";
import FadeOutFrame from "../components/fadeOutFrame";
import FadeInFadeOutFrame from "../components/fadeInFadeOutFrame";

export default function Fourth({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
}) {
    if (scrollY > 970) {
        getSteppers(true);
    }

    const style = {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    };
    let text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        text7,
        text8,
        text9,
        text10,
        text11,
        text12,
        text13,
        text14,
        text15,
        text16,
        text17,
        text18,
        text19,
        text20;

    if (language === "croatian") {
        text1 =
            "Sjećate li se trenutka kada se Zemlja sručila u bezdan? Smrad kaosa poput smrada leševa lelujao je ulicama ne očekujući da ga netko osjeti. I onda smo mi postali mali mravići koji hodaju po crti tik iznad tvojih trepavica (postoji li uopće ime za taj dio tijela?). Što je najgore, zaboravili smo pjevati. A kad mravi zaplaču, e to su krokodilske suze. Pa se tako danima moglo čuti samo zapomaganje, bez naznake lijepe melodije. A ja sam bila mlada.";
        text2 =
            "I kad dođem doma sjest ću za stol s bratom, sestrom i djecom iz susjedstva jer nam se roditelji nisu vratili.";
        text3 = "Zvoni telefon.";
        text4 = "Zvoni telefoni.";
        text5 = "Zvoni.";
        text6 = "Zove.";
        text7 = " Zvon.";
        text8 = "Zovu.";
        text9 = "Zvone vrata.";
        text10 = "Zvone vrata.";
        text11 =
            "Otkuda izviru ta malena ubojstva? Zašto mi goblini skakuću po kući?";
        text12 = "Zvone vrata.";
        text13 = "Ne mičem se. Ne smijem, jebote.";
        text14 =
            "To nije nitko naš. Ne više. Ne još. Rekla sam im: „Odite stvarajte buku.“ I pitam se što su im rekli i pitam se di ti je glava.";
        text15 =
            "Di je tvoja glava da tu legne na taj moj jadni usplahireni ušlagirani organ i sluša kako jedva živim?";
        text16 =
            "Brat i sestra su istovremeno zašutjeli i ja s njima kada smo shvatili da su zvali da nam jave da su naši roditelji bivši ljudi. Nisu plakali. To je bilo ok od njih.";
        text17 =
            "Iščekivanje: uskrsnuća mrtvih; prsnuća žilice u kutu lijevog oka, tamo kod suza; grešnog začeća; bestjelesnog vlakovođe; tople mrtvačnice.";
        text18 =
            "Kad bi mi sad netko rekao trepćem li brzo ili sporo i kolike su mi zjenice, kad bi mi bar sad netko rekao sve što vidim. Nisam sigurna bih li ga čula. Strah strah strah je u glavi osamljen pa mu mašta mašta prijatelje.";
        text19 =
            "Stara susjeda nam je donijela juhe. Puno je pričala, ali zapamtila sam samo ovo: „Možda se pri kraju baš tako osjećaš. Žao ti je, da, da, ti bi sve, sve si htio i još bi, samo, nekako, spava ti se, malo sna, malo smrti ti ne bi škodilo, šta sad.“ To što nema šanse da se sutra probudiš je ideja toliko daleka da te apsolutno ne dira. Pa i kad kažeš do viđenja, kad to zapravo i misliš? Rekli smo joj „do viđenja“ sasvim nasmiješeni, no staru susjedu nismo više nikada vidjeli.";
        text20 =
            "Djeca su krenula relativno rano. Mislim, ranije nego što to obično biva. Evo, to sam zapamtila. Onda, što još...? Bilo je tu nekoliko čaša mlijeka na stolu i mogli smo čuti krčkanje s krive radio-stanice. Od kud nam mlijeko? Mislim da nije bilo mlijeka na stolu. Otišli su. A ja sam pogledala crtiće bez njih.";
    } else {
        text1 =
            "Do you remember the moment the earth collapsed into the void? The stink of chaos like the stink of corpses floated through the streets not expecting anyone to notice it. And then we became little ants walking on the line just above your eylashes (is there a name for that body part?). The worst thing was that we forgot to sing. And when ants start crying, those are crocodile tears. So, for days, only thing that could be heard was wailing, with no sign of nice melodies. And I was young.";
        text2 =
            "When I come home I am going to sit around the table with my brother, my sister and the neighbourhood kids because are parents didn't come back.";
        text3 = "The phone is ringing.";
        text4 = "The phones are ringing. ";
        text5 = "Ringing.";
        text6 = "Calling. ";
        text7 = "Ring.";
        text8 = "Calling.";
        text9 = "The doors are ringing. ";
        text10 = "The doors are ringing. ";
        text11 =
            "Where are those little murders coming from? Why are goblins jumping around my house? ";
        text12 = "The doors are ringing.";
        text13 = "I'm not moving. I fucking shouldn't.";
        text14 =
            "It's no one ours. Not anymore. Not yet. I told them: „Go, make noise.” And I wonder what they told them and I wonder where is your head.";
        text15 =
            "Where is your head because I need it to lay on my pathetic flustered stoned organ and listen to how barely alive I am.";
        text16 =
            "My brother and sister fell silent simoultaneously along with me when we realized they called to tell us that our parents are ex people. They didn't cry. That was very cool of them.";
        text17 =
            "Expecting: the resurrection of the dead; bursting of the little veins in the corner of the left eye, there where the tears are; sinful conception; bodyless train driver; warm mortuary.";
        text18 =
            "If only someone would tell me if I am blinking slowly or quickly and how big are my pupils, if only someone would tell me what it is I see. I am not sure if I would hear them. Fear, fear, fear is lonely in my head, so the imagination imagines its friends.";
        text19 =
            "The old lady next door brought us soup. She talked a lot, but I remember only this: „Maybe just before the end you feel exactly like that. You are sorry, yes, yes, you want everything, you wanted everything and you still want it, it's just, somehow, you are sleepy, a little bit of dream, a little bit of death won't do you no harm, will it.” The idea of not having a chance to wake up tomorrow is so distant that it doesn't bother you. And when you say see you later, when do you actually mean it? Smiling, we told her: „see you later”, but we never saw the old lady again.";
        text20 =
            "The kids were on their way relatively early. I mean, earlier than usual. Yes, I remember that. Then, what else...? There was a few glasses of milk on the table and I could hear the crunching from the wrong radio station. Where did we get the milk? I think there was no milk on the table. They left. And I watched the cartoons without them.";
    }

    return (
        <React.Fragment>
            <div className={styles.wrapper_container}>
                <VideoFixedCenter src={"/images/video.mp4"} />
                <FadeOutFrame
                    text={text1}
                    width={"40%"}
                    style={style}
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={80}
                    center="y"
                />
                <FadeInFadeOutFrame
                    text={text2}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={80}
                    tresholdOut={120}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text3}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={120}
                    tresholdOut={160}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text4}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={160}
                    tresholdOut={200}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text5}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={200}
                    tresholdOut={240}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text6}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={240}
                    tresholdOut={280}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text7}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={280}
                    tresholdOut={320}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text8}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={320}
                    tresholdOut={360}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text9}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={400}
                    tresholdOut={440}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text10}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={440}
                    tresholdOut={480}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text11}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={520}
                    tresholdOut={560}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text12}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={560}
                    tresholdOut={600}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text13}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={600}
                    tresholdOut={640}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text14}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={640}
                    tresholdOut={680}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text15}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={680}
                    tresholdOut={720}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text16}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={720}
                    tresholdOut={740}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text17}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={740}
                    tresholdOut={780}
                    style={style}
                    scrollY={scrollY}
                />
                <FadeInFadeOutFrame
                    text={text18}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={770}
                    tresholdOut={820}
                    style={style}
                    scrollY={scrollY}
                    width={"40%"}
                />
                <FadeInFadeOutFrame
                    text={text19}
                    center="y"
                    variantsVisibility={variantsVisibility}
                    treshold={820}
                    tresholdOut={860}
                    style={style}
                    scrollY={scrollY}
                    width={"40%"}
                />
                <FadeInFadeOutFrame
                    text={text20}
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
