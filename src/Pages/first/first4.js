import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function FourthWindow({ variantsVisibility, scrollY }) {
    const style = { fontSize: 40, textAlign: "center" };
    return (
        <React.Fragment>
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={1580}
                style={style}
                top={"330%"}
                width={"25%"}
                text="Koliko smo se puta u mojoj glavi, šta? Seksali jebali vodili
                ljubav, te spike. Ti si se malo okrenuo prema meni pa sam
                zaključila da me obožavaš."
                center="x"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2200}
                style={style}
                top={"390%"}
                width={"50%"}
                text="I tako, u skoro ljetno jutro, dok djevojčice pupaju (tiho, tiho,
                no ne i pretiho), oni ulaze u učionice i javljaju kako
                katastrofa čuči pod stolom. Najavljuju kolektivno umiranje. I
                nisu mogli biti precizniji od: „ovih dana“. Možda se prvo
                nervozno smijuckamo. Možda, ali nekako ne vjerujem, vidi se na
                njima da su malo prije povraćali. I da će opet."
                center="x"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2600}
                style={style}
                top={"450%"}
                width={"50%"}
                text="Bojiš se, znojiš se, a možda bi baš bilo dobro u ovom trenutku
                kihnuti. Ali ne možeš toliko dugo oči držati zatvorene. Ej znaš
                šta, ti jedan jadno poseban, daj da ti diram kosu. Ali učionica
                je prazna. Zjapi prazna. Zjapi. Oni ljudi su otišli. Dali su mi
                kamenčiće. Sve što su mi dali bili su kamenčići."
                center="x"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                top={"480%"}
                left={"60%"}
                src="/images/stones.png"
                alt="stones"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                style={style}
                top={"510%"}
                width={"25%"}
                text="Prvo što sam učinila kada sam shvatila da nam nema spasa. Bila
                sam u toj zjapljujuće praznoj učionici. Nisam otišla doma
                poljubiti roditelje. Ne odmah:"
                center="x"
            />
        </React.Fragment>
    );
}
