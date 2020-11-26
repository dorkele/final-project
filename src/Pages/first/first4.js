import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function FourthWindow({
    variantsVisibility,
    scrollY,
    language,
    isMobile,
}) {
    const style = { fontSize: 40, textAlign: "center" };
    let text1, text2, text3, text4;
    if (language === "croatian") {
        text1 =
            "Koliko smo se puta u mojoj glavi, šta? Seksali jebali vodili ljubav, te spike. Ti si se malo okrenuo prema meni pa sam zaključila da me obožavaš.";
        text2 =
            "I tako, u skoro ljetno jutro, dok djevojčice pupaju (tiho, tiho, no ne i pretiho), oni ulaze u učionice i javljaju kako katastrofa čuči pod stolom. Najavljuju kolektivno umiranje. I nisu mogli biti precizniji od: „ovih dana“. Možda se prvo nervozno smijuckamo. Možda, ali nekako ne vjerujem, vidi se na njima da su malo prije povraćali. I da će opet.";
        text3 =
            "Bojiš se, znojiš se, a možda bi baš bilo dobro u ovom trenutku kihnuti. Ali ne možeš toliko dugo oči držati zatvorene. Ej znaš šta, ti jedan jadno poseban, daj da ti diram kosu. Ali učionica je prazna. Zjapi prazna. Zjapi. Oni ljudi su otišli. Dali su mi kamenčiće. Sve što su mi dali bili su kamenčići.";
        text4 =
            "Prvo što sam učinila kada sam shvatila da nam nema spasa. Bila sam u toj zjapljujuće praznoj učionici. Nisam otišla doma poljubiti roditelje. Ne odmah:";
    } else {
        text1 =
            "How many times did we, in my head, what? Had sex, fucked, made love, that shit. You turned slightly towards me so I decided you adored me.";
        text2 =
            "And so, in the almost summer morning, while the girls are blossoming (quietly, quietly, but not in silence), they enter the classrooms and announce the catastrophe under our tables. The collective dying. And they couldn't be more precise than: „these days”. At first we, maybe, nervously giggle. Maybe, but I don't think so. It is clearly visible that they were vomitting seconds ago and plan to do it again.";
        text3 =
            "Fear, sweat, but maybe it would be good to sneeze in a moment like this. But you can't have your eyes closed for that long. You know what? You pathetically special one, let me touch your hair. But the classroom is empty. Gapes empty. Gapes. Those people are gone. They gave me little stones. All they gave me were little stones.";
        text4 =
            "The first thing I did when I realized we are doomed. I was in that gaping empty classroom. I didn't go home to kiss my parents. Not immediatelly:";
    }

    return (
        <React.Fragment>
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={1580}
                style={style}
                top={"330%"}
                width={isMobile ? "100%" : "25%"}
                text={text1}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2200}
                style={style}
                top={isMobile ? "383%" : "390%"}
                width={isMobile ? "100%" : "50%"}
                text={text2}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2600}
                style={style}
                top={"450%"}
                width={isMobile ? "100%" : "50%"}
                text={text3}
                center="x"
                isMobile={isMobile}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                top={"480%"}
                left={isMobile ? "5%" : "60%"}
                src="/images/stones.png"
                alt="stones"
                isMobile={isMobile}
                imgStyle={isMobile ? { width: "80%" } : 0}
                width={isMobile ? "100%" : null}
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                style={style}
                top={isMobile ? "530%" : "510%"}
                width={isMobile ? "100%" : "25%"}
                text={text4}
                center="x"
                isMobile={isMobile}
            />
        </React.Fragment>
    );
}
