import React, { useEffect } from "react";
import { Frame } from "framer";
import "./fifth.css";

export default function Fifth({ variantsVisibility, scrollY }) {
    console.log(scrollY, variantsVisibility);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <div className="wrapping-container">
                <Frame
                    center
                    top={250}
                    variants={variantsVisibility}
                    initial={{ opacity: 0 }}
                    animate={scrollY >= 50 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                >
                    Ali sve je tiho.
                </Frame>
                <Frame
                    center
                    top={350}
                    width={500}
                    variants={variantsVisibility}
                    animate={scrollY >= 100 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Pa sam legla u krevet gdje su nekada svi oni spavali. I
                    nekoliko dana ostala tamo budeći se među knjigama i
                    leševima.
                </Frame>
                <Frame
                    center
                    width={500}
                    top={450}
                    variants={variantsVisibility}
                    animate={scrollY >= 150 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Crvi koje pronađeš u džepu i nemaš ih gdje odložiti. Uvijek
                    dogmižu natrag. Baš kao i sjećanja na lijepe dečke po
                    čekaonicama.
                </Frame>
                <Frame
                    center
                    width={500}
                    top={550}
                    variants={variantsVisibility}
                    animate={scrollY >= 200 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Posljednja pjesma koju sam čula bila je „Drunk girls know
                    that love is an astronaut/It comes back but it's never the
                    same.“
                </Frame>
                <Frame
                    center
                    width={500}
                    top={650}
                    variants={variantsVisibility}
                    animate={scrollY >= 250 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    A koliko smo sada daleko od svih onih ljudi koje smo poslali
                    u svemirska bespuća, još onako odjevene. U čemu je gušt ako
                    se nemaš gdje vratiti?
                </Frame>
                <Frame
                    center
                    width={500}
                    top={750}
                    variants={variantsVisibility}
                    animate={scrollY >= 300 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Preživjet će lutalice, nomadi, vagabundi. Preživjet će
                    muzejski primjerci mojih osjećaja.
                </Frame>
                <Frame
                    center
                    width={500}
                    top={850}
                    variants={variantsVisibility}
                    animate={scrollY >= 350 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",
                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Sve sam to onda mislila. Pažljivo i sporo. Boljelo me sve od
                    faljenja. Boljelo me sve od prestajanja. Nije postojalo
                    vrijeme koje će zacijeliti rane. Samo vrane. Zašto sam
                    postojala kada vi niste?
                </Frame>
                <Frame
                    center
                    width={500}
                    top={950}
                    variants={variantsVisibility}
                    animate={scrollY >= 400 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",
                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Ipak: Sve se ovo izjalovilo kontroli.
                </Frame>
                <Frame
                    center
                    width={500}
                    top={1050}
                    variants={variantsVisibility}
                    animate={scrollY >= 450 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Ne znam koliko je sati, ali znam za šta je vrijeme. (Nisam
                    više ovdje nego tu.) Iskopaj rupu i zakopaj leš kao u svim
                    poštenim američkim filmovima. Nemoj dramatizirati, to su
                    samo prazna tijela.
                </Frame>
                <Frame
                    center
                    width={500}
                    top={1150}
                    variants={variantsVisibility}
                    animate={scrollY >= 500 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",

                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Što je bilo sutradan? Svanulo je sunce, ne znam kako. Ujutro
                    sam vidjela prelijepog čovjeka. Ostatak dana radila sam
                    psihodelične kolaže od obiteljskih slika, večer sam provela
                    skidajući ljepilo s ruku.
                </Frame>
                <Frame
                    center
                    width={500}
                    top={1250}
                    variants={variantsVisibility}
                    animate={scrollY >= 550 ? "visible" : "hidden"}
                    style={{
                        fontSize: "18px",
                        backgroundColor: "none",
                    }}
                    initial={{ opacity: 0 }}
                >
                    Tu i tamo koja rana.
                </Frame>
            </div>
        </React.Fragment>
    );
}
