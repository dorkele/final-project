import React from "react";
import styles from "./seventh/seventh.module.css";
import FadeInFrame from "../components/fadeInFrame";
import Background from "../components/Background";

export default function Seventh({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
}) {
    if (scrollY > 1270) {
        getSteppers(true);
    }

    const styleBig = { fontSize: 60, textAlign: "center" };
    const styleSmall = { fontSize: 30, textAlign: "center" };

    let text1, text2, text3, text4, text5;

    if (language === "croatian") {
        text1 =
            "Napisala sam pjesmu. Neki dan. Napisala sam ju i šaptom otpjevala prije spavanja onim pahuljicama od maslačaka kada se pretvore u paučinu. Pjesma je išla ovako nekako:";
        text2 = "Prostrano";
        text3 = "Prostiranje";
        text4 = "Prostranstvima";
        text5 =
            "Mogla sam otpjevati samo posljednja tri slova, ali to nije bilo samo. A kada bi me njezin brat upitao što mi to znači, ja bih ga poljubila. Prostrano. Njezin brat mi priča priče o ubojstvima koja je vidio. Ali sneno i bajkovito. Te priče imaju okus kave koju nismo pili još od onda. „Jesi li ti koga?“, svaki ga dan pitam očarano. „Jesam, ali idemo po redu.“, lukavo odgovara jer bezbroj ubojstava je teško ispričati.";
    } else {
        text1 =
            "I wrote a song. The other day. I wrote it and sang it whispering to those dandelion snowflakes (after they turned into spiderwebs) before sleep . The song went something like this:";
        text2 = "Spaciously";
        text3 = "Spacing out";
        text4 = "into Spaces";
        text5 =
            "I could sing only the last three letters, but it wasn't only. And when her brother asked me what does it mean I would kiss him. Spaciously. Her brother tells stories about murders he saw. But like they were dreamy fairytales. The stories taste like coffee we didn't drink since then. „Did you kill someone?”, I ask him spellbound everyday. „I did, but let's go one at a time.”, he answers cunningly because countless murders is hard to tell.";
    }

    return (
        <React.Fragment>
            <Background />
            <div className={styles.container}>
                <FadeInFrame
                    style={styleSmall}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={40}
                    top={"40%"}
                    text={text1}
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={100}
                    top={"70%"}
                    text={text2}
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={400}
                    top={"100%"}
                    text={text3}
                />
                <FadeInFrame
                    style={styleBig}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={700}
                    top={"150%"}
                    text={text4}
                />
                <FadeInFrame
                    style={styleSmall}
                    center="x"
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    treshold={900}
                    top={"190%"}
                    text={text5}
                />
            </div>
        </React.Fragment>
    );
}
