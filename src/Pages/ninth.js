import React from "react";
import { Frame, Page } from "framer";

export default function Ninth({ getSteppers, language }) {
    const styleColorless = {
        backgroundColor: "none",
        fontSize: 30,
        width: "100%",
        height: "100%",
    };

    let text1, text2, text3, text4;

    if (language === "croatian") {
        text1 =
            "Ali monolog pijane žene koja mi je sve u rodu (koji slijedi, ali mi prethodi) bio je spreman: „Ići ćemo zajedno kroz polja. Bespolno. Nemoj se uopće bojati. Nećeš se bojati. Tada ćeš mi vjerovati. U ustima neće biti mrlja krvi kao sada. Više nećeš jesti jezike. Umirat će samo najjači. Mi ćemo ostati netaknuti. Svrbit će nas sunce. I uzgojit ćemo duge zlatne dlake na glavama. Ni sami nećemo znati tko je tko koliko ćemo se petljati. O kose, ne o jezike. Bol će se zvati nešto drugo, jer prelijepa je riječ da je zaboravimo. Sjećaš li se kako smo nekada imali sve vrijeme za gubljenje i onda smo ga izgubile? Ovo je godinama poslije i ja sam ta koja ti govori da nikada nećeš vidjeti ljubav svog života jer si oduvijek bila kukavica. Od svih ljudi sam to ja. Dali su ti kamenčiće, sve što su ti dali bili su kamenčići.“";
        text2 = "Kako ona to zna, molim te?";
        text3 =
            "Mogu je čuti da priča, ali riječi nam ne znače ništa slično. Kaže vidjeti, a misli: voljeti. Kaže sjećaš li se, a misli: sve smo izmislile. Sve smo izmislile u onom trenutku kada su naši prijatelji previše počeli pričati ne o nama i ne nama i legle smo na pod i rekle sve što imamo su kamenčići, a svi su drugi mrtvi, a mi smo još uvijek prekrasne. Ali svi koje volimo su mrtvi, to je prvo pravilo, svi koje volimo su mrtvi.";
        text4 = "I onda: „zamisli“.";
    } else {
        text1 =
            "But a following(but also preceding me) monologue from a drunk woman who is related to me in every way was ready: „We are gonna go through the fields together. Asexually. Don't you be afraid. You won't be afraid. Then you will believe me. In our mouths there won't be no blood stains. You won't eat tongues anymore. Only the fittest will be dying. We will be left untouched. The sun will be itching. And we will cultivate long golden hairs on our heads. We ourselves won't know who is who from all of that entanglement. In our hairs, not our tongues. Pain will be the name of something else because it's too beautiful a word to forget it. Do you remember how, once, we had all the time to loose and then we lost it? This is years after and I am the one who is telling you that you will never see the love of your life because you were a coward since the beginning. Out of all the people, I am the one. They gave you little stones, all they gave you were little stones.”";
        text2 = "Oh, please, how can she know all that?";
        text3 =
            "I can hear her talking but our words have different meanings. She says „see”, and thinks: „love”. She says „do you remember”, but thinks: „We made it all up.” We made it all up in the moment when our friends started to talk too much not about us and not to us and then we laid on the ground and we said all that we have are little stones, and everybody else is dead, and we are still gorgeous. But everyone we love is dead, the first rule, everyone we love is dead.";
        text4 = "And then: „imagine”.";
    }

    return (
        <React.Fragment>
            <Page
                alignment="center"
                size="100%"
                defaultEffect={"coverflow"}
                onChangePage={(current, previous) => {
                    if (current === 3) {
                        getSteppers(true);
                    } else {
                        getSteppers(false);
                    }
                }}
            >
                <Frame style={styleColorless} top={100}>
                    <Frame center width={"50%"} background={"none"}>
                        {text1}
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "#8c52ff",
                        color: "#ff5757",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                >
                    {text2}
                </Frame>
                <Frame style={styleColorless} center>
                    <Frame center width={"50%"} background={"none"}>
                        {text3}
                    </Frame>
                </Frame>
                <Frame
                    style={{
                        backgroundColor: "#ff5757",
                        color: "#8c52ff",
                        fontSize: 100,
                        width: "100%",
                        height: "100%",
                    }}
                    center
                >
                    {text4}
                </Frame>
            </Page>
        </React.Fragment>
    );
}
