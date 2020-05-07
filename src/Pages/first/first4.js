import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function FourthWindow({ variantsVisibility, scrollY }) {
    const style = { fontSize: 40, textAlign: "center" };
    return (
        <React.Fragment>
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={1600}
                style={style}
                top={2100}
                width={"25%"}
                text="Koliko smo se puta u mojoj glavi, šta? Seksali jebali vodili
                ljubav, te spike. Ti si se malo okrenuo prema meni pa sam
                zaključila da me obožavaš."
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={1900}
                top={2300}
                center="x"
                src="/images/avril-anakin.png"
                alt="avril-anakin-sad"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2200}
                style={style}
                top={2600}
                width={"50%"}
                text="I tako, u skoro ljetno jutro, dok djevojčice pupaju (tiho, tiho,
                no ne i pretiho), oni ulaze u učionice i javljaju kako
                katastrofa čuči pod stolom. Najavljuju kolektivno umiranje. I
                nisu mogli biti precizniji od: „ovih dana“. Možda se prvo
                nervozno smijuckamo. Možda, ali nekako ne vjerujem, vidi se na
                njima da su malo prije povraćali. I da će opet."
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={2600}
                style={style}
                top={3100}
                width={"50%"}
                text="Bojiš se, znojiš se, a možda bi baš bilo dobro u ovom trenutku
                kihnuti. Ali ne možeš toliko dugo oči držati zatvorene. Ej znaš
                šta, ti jedan jadno poseban, daj da ti diram kosu. Ali učionica
                je prazna. Zjapi prazna. Zjapi. Oni ljudi su otišli. Dali su mi
                kamenčiće. Sve što su mi dali bili su kamenčići."
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                top={3300}
                left={1000}
                src="/images/stones.png"
                alt="stones"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={3100}
                style={style}
                top={3600}
                width={"25%"}
                text="Prvo što sam učinila kada sam shvatila da nam nema spasa. Bila
                sam u toj zjapljujuće praznoj učionici. Nisam otišla doma
                poljubiti roditelje. Ne odmah:"
            />
        </React.Fragment>
    );
}
