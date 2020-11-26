import React from "react";
import styles from "./fifth/fifth.module.css";
import FifthImageLayer from "./fifth/fifth-image-layer";
import FadeInFrame from "../components/fadeInFrame";

export default function Fifth({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
    isMobile,
}) {
    if (scrollY > 770) {
        getSteppers(true);
    }

    const style = isMobile
        ? { fontWeight: "normal", fontSize: "19px", color: "red" }
        : {
              fontSize: "25px",
              color: "red",
              fontWeight: "bold",
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
        text11;

    if (language === "croatian") {
        text1 = "Ali sve je tiho.";
        text2 =
            "Pa sam legla u krevet gdje su nekada svi oni spavali. I nekoliko dana ostala tamo budeći se među knjigama i leševima.";
        text3 =
            "Crvi koje pronađeš u džepu i nemaš ih gdje odložiti. Uvijek dogmižu natrag. Baš kao i sjećanja na lijepe dečke po čekaonicama.";
        text4 =
            "Posljednja pjesma koju sam čula bila je „Drunk girls know that love is an astronaut/It comes back but it's never the same.“";
        text5 =
            "A koliko smo sada daleko od svih onih ljudi koje smo poslali u svemirska bespuća, još onako odjevene. U čemu je gušt ako se nemaš gdje vratiti?";
        text6 =
            "Preživjet će lutalice, nomadi, vagabundi. Preživjet će muzejski primjerci mojih osjećaja.";
        text7 =
            "Sve sam to onda mislila. Pažljivo i sporo. Boljelo me sve od faljenja. Boljelo me sve od prestajanja. Nije postojalo vrijeme koje će zacijeliti rane. Samo vrane. Zašto sam postojala kada vi niste?";
        text8 = "Ipak: Sve se ovo izjalovilo kontroli.";
        text9 =
            "Ne znam koliko je sati, ali znam za šta je vrijeme. (Nisam više ovdje nego tu.) Iskopaj rupu i zakopaj leš kao u svim poštenim američkim filmovima. Nemoj dramatizirati, to su samo prazna tijela.";
        text10 =
            "Što je bilo sutradan? Svanulo je sunce, ne znam kako. Ujutro sam vidjela prelijepog čovjeka. Ostatak dana radila sam psihodelične kolaže od obiteljskih slika, večer sam provela skidajući ljepilo s ruku.";
        text11 = "Tu i tamo koja rana.";
    } else {
        text1 = "But everything is quiet.";
        text2 =
            "So I laid in the bed where all of them once slept. And for a few days I stayed there waking up between books and corpses.";
        text3 =
            "The worms you find in your pocket and you have nowhere to put them down, always crawl back. As well as memories of beautiful boys in waiting rooms.";
        text4 =
            "The last song I heard was „Drunk girls know that love is an astronaut/It comes back but it's never the same.”";
        text5 =
            "And how far are we now from all those people we sent into space, not to mention, dressed that way. Where is the point if you have nowhere to come back?";
        text6 =
            "Wanderers, nomads and vagabonds will survive. Museum pieces of my feelings will survive. ";
        text7 =
            "This is what I thought then. Carefully and slowly. Everything hurt from missing. Everything hurt from ceasing. There was no time to heal the wounds. Only crows. Why did I exist when you didn't.";
        text8 = "Nevertheless: everything was out of control.";
        text9 =
            "I don't know what time it is, but I know what it is for. (I am not here anymore, but I am, though.) Dig a hole and bury a corpse just like they do in all solid american movies. Don't be dramatic, it's just empty bodies.";
        text10 =
            "What happened tomorrow? The sun came up, I don't know how. In the morning I saw a beautiful man. The rest of the day I spent making psychadelic collages from family pictures. I spent my evening removing the glue from my hands.";
        text11 = "A wound here and there.";
    }

    return (
        <React.Fragment>
            <div className={styles.container_wrap}>
                <FifthImageLayer
                    variantsVisibility={variantsVisibility}
                    scrollY={scrollY}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"25%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={50}
                    text={text1}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"35%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={100}
                    text={text2}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"45%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={150}
                    text={text3}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"55%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={200}
                    text={text4}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"68%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={250}
                    text={text5}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"80%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={300}
                    text={text6}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"95%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={350}
                    text={text7}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"105%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={400}
                    text={text8}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"120%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={450}
                    text={text9}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"135%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={500}
                    text={text10}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
                <FadeInFrame
                    variantsVisibility={variantsVisibility}
                    top={"150%"}
                    style={style}
                    scrollY={scrollY}
                    treshold={550}
                    text={text11}
                    center="x"
                    width={isMobile ? "100%" : null}
                    isMobile={isMobile}
                />
            </div>
        </React.Fragment>
    );
}
