import React, { useState } from "react";
import { Frame } from "framer";
import HoverContainer from "./third/hoverContainer";
import styles from "./third/third.module.css";

export default function Third({ scrollY, getSteppers, language }) {
    const [visible, setVisible] = useState(0);
    if (scrollY > 10) {
        getSteppers(true);
    }
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
        text1 = "Bili su na starom mjestu, u pješčaniku, ";
        text2 = "umirali su živahno ";
        text3 = ". Znala sam da će me oraspoložiti svojim: „ ";
        text4 = "Mnoge su nas voljele ";
        text5 =
            ", popravljale šminku i kratile hlačice da bi nam se svidjele.“ Potkralo se tu još nekoliko uobičajenih tema: srebrna strelica za pikado, ";
        text6 = "odnos kolonjske vode i apsolutnog besmisla, ";
        text7 = "ljubavna teletapija ";
        text8 = "iliti ";
        text9 = "prizivanje duhova ";
        text10 =
            "iliti osposobljavanje super-heroja za susret s apokalipsom, apsorpcija zagasito plavih hormona, ";
        text11 = "ženska intuicija kao moderna tehnologija ";
        text12 = ", zatim: možebitni nedostatak samopouzdanja, uhvaćenih svih ";
        text13 = "7 Dragon Balla ";
        text14 = ", politički nekorektna priznanja, a tu je, također, i taj ";
        text15 = "ozloglašeni pesimizam ";
        text16 = ". Ništa daleko od uobičajenog ";
        text17 = "pretresa podsvijesti ";
        text18 =
            ". Nisam mnogo govorila. Pogledali su me puni nade beznadnim svojim očima na odlasku. „I meni su ";
        text19 = "džepovi puni mjeseca ";
        text20 = ", prijatelji, i meni. “";
    } else {
        text1 = "They were at our old spot, in the sandbox, ";
        text2 = "they were dying merrily ";
        text3 = ". I knew they would cheer me up with theirs: „ ";
        text4 = "A lot of them loved us, ";
        text5 =
            "they fixed their make up and cut their shorts to please us.” Various other ordinary themes sneaked in: silver darts, ";
        text6 =
            " the relationship between eau de cologne and absolute senselessness, ";
        text7 = "love tele-apathy, ";
        text8 = "or ";
        text9 = "summoning of the ghosts ";
        text10 =
            " or training super-heros for the encounter with the apocalypse, absorption of dark blue hormones, ";
        text11 = "women intuition as modern technology ";
        text12 = ", also: possible lack of self-confidence, all ";
        text13 = "7 Dragon Balls ";
        text14 =
            "caught, politically incorrect confessions, and there it was, that ";
        text15 = "notorious pessimism ";
        text16 = ". Nothing far from the usual ";
        text17 = "raid of unconscioussness ";
        text18 =
            ".I didn't say much. When I was leaving, they looked at me hopefully with their hopeless eyes. „My pockets are also ";
        text18 = "filled with moon, my friends.” ";
    }

    return (
        <React.Fragment>
            <div className={styles.scroll_container}>
                <Frame
                    width={"100%"}
                    height={"100%"}
                    center
                    backgroundColor="none"
                    style={{ fontSize: 40, textAlign: "center" }}
                >
                    {text1}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=8whTAkkBv6U"
                        onMouseEnter={() => setVisible(1)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text2}
                    </a>
                    {text3}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://collection.eliterature.org/1/works/jackson__my_body_a_wunderkammer/index.html"
                        onMouseEnter={() => setVisible(2)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text4}
                    </a>
                    {text5}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Crying"
                        onMouseEnter={() => setVisible(3)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text6}
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.interviewmagazine.com/music/grimes-lana-del-rey-brit-marling-miss-anthropocene-interview"
                        onMouseEnter={() => setVisible(4)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text7}
                    </a>
                    {text8}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=NTr9f4ZGcwE"
                        onMouseEnter={() => setVisible(5)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text9}
                    </a>
                    {text10}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.miamiletic.com/after"
                        onMouseEnter={() => setVisible(6)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text11}
                    </a>
                    {text12}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.nytimes.com/2019/01/03/magazine/driving-living-reality.html"
                        onMouseEnter={() => setVisible(7)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text13}
                    </a>
                    {text14}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://zagrebfilm.hr/odrasti-u-malo-drvo/"
                        onMouseEnter={() => setVisible(8)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text15}
                    </a>
                    {text16}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.solitr.com/spider-solitaire-four-suits"
                        onMouseEnter={() => setVisible(9)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text17}
                    </a>
                    {text18}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=v7rf-MWSqc0"
                        onMouseEnter={() => setVisible(10)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        {text19}
                    </a>
                    {text20}
                </Frame>
            </div>
            <HoverContainer visible={visible} />
        </React.Fragment>
    );
}
