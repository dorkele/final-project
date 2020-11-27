import React from "react";
import styles from "./instructions.module.css";

const croatianTitle = `KAKO ČITATI`;
const croatianText = `Ovo je priča o dvije pijane djevojke koje romatiziraju apokalipsu, 
a vi navigirate kroz hypertext kaotičnog uma jedna od njih.
Za maksimalno iskustvo, onakvo kakvim sam ga ja zamislila, priču pročitajte na nekom od većih ekrana, 
sporo, služeći se strelicama gore-dolje na tastaturi, klikanjem na linkove, lebdenjem preko riječi, 
vraćanjem onome što nije u prvom planu. Ikona zatvorenog oka sa suzom otvara meni kojim se krećete među stranicama.
Mobilna verzija podržava samo tekst u prijevodu i zakinut će vas za neke slojeve značenja.
Ovaj tekst je nastao dovoljno davno da ga se pomalo sramim. Za sada se uspješno pokušavam 
oduprijeti porivu da u njega ubrizgam smisao, ali obećajem da je ovo rad u nastajanju, 
pogotovo zato što je kroz kod i internet kontekst dobio nove probleme za promišljanje i 
još uvijek nisam spremna pustiti ga u svijet kao nešto završeno. Zato, za sada, nudi mogućnost 
nelinearnog čitanja i preskakanja, no ako ste u potrazi za tragovima smisla najviše ćete ga naći ako idete po redu. 
Ovo je moj prvi pokušaj iskorištavanja internet okoline i programskih jezika za pričanje priče
 i kao takav je istraživanje i učenje samo po sebi.
`;
const englishTitle = `HOW TO READ`;
const englishText = `This is a story about two drunk girls romanticizing apocalypse and you are navigating 
hypertext of the mind of one of them.
For best experience, the way I imagined it, it is recommended to read the story on one of the bigger screens, 
slowly, using the up and down arrows on the keyboard, by clicking on links, hovering over the words 
and returning to what is not there on the first glance. The icon with closed eye and a tear opens up 
a menu with which you can jump through pages.
Mobile version supports only translated text and will take away a few layers of meaning from you.
This text was created so long ago that I am a little bit embarrassed by it. 
I am successfully resisting the urge to inject meaning into it for now but I promise it is 
a work in progress, especially because it got new problems to rethink with coding and internet 
context and I am still not ready to release it into the world as something complete. 
Therefore, for now, it offers the possibility of non-linear reading and skipping but if 
you are in search of traces of sense, you will find most of it if you read in order.
This is my first try to use the internet environment and programming languages to 
tell a story, and as such it is a research and learning process in itself.
`;

export default function Instructions({ language, setInstructions }) {
    console.log(language);
    return (
        <div className={styles.overlay}>
            <div className={`${styles.container} ${styles.scrollbar}`}>
                <div
                    className={styles.iks}
                    onClick={() => setInstructions(false)}
                >
                    X
                </div>
                <div className={styles.title}>
                    {language === "croatian" ? croatianTitle : englishTitle}
                </div>
                <div className={styles.text}>
                    {language === "croatian" ? croatianText : englishText}
                </div>
            </div>
        </div>
    );
}
