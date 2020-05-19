import React, { useState } from "react";
import { Frame } from "framer";
import HoverContainer from "./third/hoverContainer";
import styles from "./third/third.module.css";

export default function Third({ scrollY, getSteppers }) {
    const [visible, setVisible] = useState(0);
    if (scrollY > 10) {
        getSteppers(true);
    }
    return (
        <React.Fragment>
            <div className={styles.scroll_container}>
                <Frame
                    size={"70%"}
                    center
                    backgroundColor="none"
                    style={{ fontSize: 40, textAlign: "center" }}
                >
                    Bili su na starom mjestu, u pješčaniku,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=8whTAkkBv6U"
                        onMouseEnter={() => setVisible(1)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        umirali su živahno
                    </a>
                    . Znala sam da će me oraspoložiti svojim: „
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://collection.eliterature.org/1/works/jackson__my_body_a_wunderkammer/index.html"
                        onMouseEnter={() => setVisible(2)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        Mnoge su nas voljele
                    </a>
                    , popravljale šminku i kratile hlačice da bi nam se
                    svidjele.“ Potkralo se tu još nekoliko uobičajenih tema:
                    srebrna strelica za pikado,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Crying"
                        onMouseEnter={() => setVisible(3)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        odnos kolonjske vode i apsolutnog besmisla
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.interviewmagazine.com/music/grimes-lana-del-rey-brit-marling-miss-anthropocene-interview"
                        onMouseEnter={() => setVisible(4)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        ljubavna teletapija
                    </a>{" "}
                    iliti{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=NTr9f4ZGcwE"
                        onMouseEnter={() => setVisible(5)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        prizivanje duhova
                    </a>{" "}
                    iliti osposobljavanje super-heroja za susret s apokalipsom,
                    apsorpcija zagasito plavih hormona,{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.miamiletic.com/after"
                        onMouseEnter={() => setVisible(6)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        ženska intuicija kao moderna tehnologija
                    </a>
                    , zatim: možebitni nedostatak samopouzdanja, uhvaćenih svih
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.nytimes.com/2019/01/03/magazine/driving-living-reality.html"
                        onMouseEnter={() => setVisible(7)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        7 Dragon Balla
                    </a>
                    , politički nekorektna priznanja, a tu je, također, i taj
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://zagrebfilm.hr/odrasti-u-malo-drvo/"
                        onMouseEnter={() => setVisible(8)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        ozloglašeni pesimizam
                    </a>
                    . Ništa daleko od uobičajenog{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.solitr.com/spider-solitaire-four-suits"
                        onMouseEnter={() => setVisible(9)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        pretresa podsvijesti
                    </a>
                    . Nisam mnogo govorila. Pogledali su me puni nade beznadnim
                    svojim očima na odlasku. „I meni su
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=v7rf-MWSqc0"
                        onMouseEnter={() => setVisible(10)}
                        onMouseLeave={() => setVisible(0)}
                    >
                        džepovi puni mjeseca
                    </a>
                    , prijatelji, i meni.“
                </Frame>
            </div>
            <HoverContainer visible={visible} />
        </React.Fragment>
    );
}
