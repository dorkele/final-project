import React, { useState } from "react";
import { Frame } from "framer";
import HoverContainer from "./third-hover-layer";
import "./third.css";

export default function Third({ variantsVisibility, scrollY }) {
    const [visible, setVisible] = useState(0);

    return (
        <React.Fragment>
            <Frame
                size={"70%"}
                center
                backgroundColor="none"
                style={{ fontSize: 40, textAlign: "center" }}
            >
                Bili su na starom mjestu, u pješčaniku,{" "}
                <a
                    href="/"
                    onMouseEnter={() => setVisible(1)}
                    onMouseLeave={() => setVisible(0)}
                >
                    umirali su živahno
                </a>
                . Znala sam da će me oraspoložiti svojim: „
                <a
                    href="/"
                    onMouseEnter={() => setVisible(2)}
                    onMouseLeave={() => setVisible(0)}
                >
                    Mnoge su nas voljele
                </a>
                , popravljale šminku i kratile hlačice da bi nam se svidjele.“
                Potkralo se tu još nekoliko uobičajenih tema: srebrna strelica
                za pikado,{" "}
                <a
                    href="/"
                    onMouseEnter={() => setVisible(3)}
                    onMouseLeave={() => setVisible(0)}
                >
                    odnos kolonjske vode i apsolutnog besmisla
                </a>
                ,{" "}
                <a
                    href="/"
                    onMouseEnter={() => setVisible(4)}
                    onMouseLeave={() => setVisible(0)}
                >
                    ljubavna teletapija
                </a>{" "}
                iliti{" "}
                <a
                    href="/"
                    onMouseEnter={() => setVisible(5)}
                    onMouseLeave={() => setVisible(0)}
                >
                    prizivanje duhova
                </a>{" "}
                iliti osposobljavanje super-heroja za susret s apokalipsom,
                apsorpcija zagasito plavih hormona,{" "}
                <a
                    href="/"
                    onMouseEnter={() => setVisible(6)}
                    onMouseLeave={() => setVisible(0)}
                >
                    ženska intuicija kao moderna tehnologija
                </a>
                , zatim: možebitni nedostatak samopouzdanja, uhvaćenih svih
                <a
                    href="/"
                    onMouseEnter={() => setVisible(7)}
                    onMouseLeave={() => setVisible(0)}
                >
                    7 Dragon Balla
                </a>
                , politički nekorektna priznanja, a tu je, također, i taj
                <a
                    href="/"
                    onMouseEnter={() => setVisible(8)}
                    onMouseLeave={() => setVisible(0)}
                >
                    ozloglašeni pesimizam
                </a>
                . Ništa daleko od uobičajenog{" "}
                <a
                    href="/"
                    onMouseEnter={() => setVisible(9)}
                    onMouseLeave={() => setVisible(0)}
                >
                    pretresa podsvijesti
                </a>
                . Nisam mnogo govorila. Pogledali su me puni nade beznadnim
                svojim očima na odlasku. „I meni su
                <a
                    href="/"
                    onMouseEnter={() => setVisible(10)}
                    onMouseLeave={() => setVisible(0)}
                >
                    džepovi puni mjeseca
                </a>
                , prijatelji, i meni.“
            </Frame>
            <HoverContainer visible={visible} />
        </React.Fragment>
    );
}
