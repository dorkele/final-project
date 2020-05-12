import React from "react";
import FadeInFrame from "../../components/fadeInFrame";

export default function ThirdWindow({ variantsVisibility, scrollY }) {
    const style = { zIndex: 1, fontSize: 40, textAlign: "center" };
    const bigStyle = { zIndex: 1, fontSize: 100, textAlign: "center" };

    return (
        <React.Fragment>
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={style}
                treshold={600}
                top={"150%"}
                center="y"
                width={"25%"}
                text="Sjediš negdje u dnu razreda, a ja duboko u sebi čujem
                preskakanje tvoje vilice, škripanje tvog kapka, rimu škrgutanja
                očnjaka i podočnjaka."
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={style}
                treshold={700}
                top={"190%"}
                text="Očnjaci, podočnjaci, kapci."
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1000}
                top={"205%"}
                text="Očnjaci,"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1050}
                top={"210%"}
                text="podočnjaci,"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={bigStyle}
                treshold={1100}
                top={"215%"}
                text="kapci,"
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                style={{
                    zIndex: 1,
                    fontSize: 40,
                    textAlign: "center",
                    color: "white",
                }}
                treshold={1150}
                top={"260%"}
                width={"25%"}
                text="tvoji ne govore tko su bili tvoji preci ni u kojim su nijemim
                filmovima glumili. Sve što mi imaju za reći su neugodne
                frekvencije."
            />
            <FadeInFrame
                variantsVisibility={variantsVisibility}
                scrollY={scrollY}
                treshold={1150}
                top={"230%"}
                src="/images/ocnjak-cat.png"
                alt="cat-fang"
                width={"100%"}
                height={"100%"}
                style={{ display: "flex", justifyContent: "center" }}
            />
        </React.Fragment>
    );
}