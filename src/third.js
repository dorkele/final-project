import React from "react";
import { Frame } from "framer";

export default function Third({ variantsVisibility, scrollY }) {
    return (
        <React.Fragment>
            <Frame size={"50%"} center backgroundColor="none">
                Bili su na starom mjestu, u pješčaniku, umirali su živahno.
                Znala sam da će me oraspoložiti svojim: „Mnoge su nas voljele,
                popravljale šminku i kratile hlačice da bi nam se svidjele.“
                Potkralo se tu još nekoliko uobičajenih tema: srebrna strelica
                za pikado, odnos kolonjske vode i apsolutnog besmisla, ljubavna
                teletapija iliti prizivanje duhova iliti osposobljavanje
                super-heroja za susret s apokalipsom, apsorpcija zagasito plavih
                hormona, ženska intuicija kao moderna tehnologija, zatim:
                možebitni nedostatak samopouzdanja, uhvaćenih svih 7 Dragon
                Balla, politički nekorektna priznanja, a tu je, također, i taj
                ozloglašeni pesimizam. Ništa daleko od uobičajenog pretresa
                podsvijesti. Nisam mnogo govorila. Pogledali su me puni nade
                beznadnim svojim očima na odlasku. „I meni su džepovi puni
                mjeseca, prijatelji, i meni.“
            </Frame>
        </React.Fragment>
    );
}
