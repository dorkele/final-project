import React from "react";
import styles from "./fifth/fifth.module.css";
import FifthImageLayer from "./fifth/fifth-image-layer";
import FadeInFrame from "../components/fadeInFrame";

export default function Fifth({ variantsVisibility, scrollY, getSteppers }) {
    if (scrollY > 770) {
        getSteppers(true);
    }

    const style = {
        fontSize: "25px",
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
    };

    return (
        <React.Fragment>
            <div className={styles.container_wrap}>
                <FifthImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"25%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={50}
                    text="Ali sve je tiho."
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"35%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={100}
                    text="Pa sam legla u krevet gdje su nekada svi oni spavali. I
                    nekoliko dana ostala tamo budeći se među knjigama i
                    leševima."
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"45%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={150}
                    text="Crvi koje pronađeš u džepu i nemaš ih gdje odložiti. Uvijek
                    dogmižu natrag. Baš kao i sjećanja na lijepe dečke po
                    čekaonicama."
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"55%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={200}
                    text="Posljednja pjesma koju sam čula bila je „Drunk girls know
                    that love is an astronaut/It comes back but it's never the
                    same.“"
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"68%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={250}
                    text="A koliko smo sada daleko od svih onih ljudi koje smo poslali
                    u svemirska bespuća, još onako odjevene. U čemu je gušt ako
                    se nemaš gdje vratiti?"
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"80%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={300}
                    text="Preživjet će lutalice, nomadi, vagabundi. Preživjet će
                    muzejski primjerci mojih osjećaja."
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"95%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={350}
                    text="Sve sam to onda mislila. Pažljivo i sporo. Boljelo me sve od
                    faljenja. Boljelo me sve od prestajanja. Nije postojalo
                    vrijeme koje će zacijeliti rane. Samo vrane. Zašto sam
                    postojala kada vi niste?"
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"105%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={400}
                    text="Ipak: Sve se ovo izjalovilo kontroli."
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"120%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={450}
                    text="Ne znam koliko je sati, ali znam za šta je vrijeme. (Nisam
                    više ovdje nego tu.) Iskopaj rupu i zakopaj leš kao u svim
                    poštenim američkim filmovima. Nemoj dramatizirati, to su
                    samo prazna tijela."
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"135%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={500}
                    text="Što je bilo sutradan? Svanulo je sunce, ne znam kako. Ujutro
                    sam vidjela prelijepog čovjeka. Ostatak dana radila sam
                    psihodelične kolaže od obiteljskih slika, večer sam provela
                    skidajući ljepilo s ruku."
                    center="x"
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"150%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={550}
                    text="Tu i tamo koja rana."
                    center="x"
                />
            </div>
        </React.Fragment>
    );
}
