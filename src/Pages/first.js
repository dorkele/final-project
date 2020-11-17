import React from "react";
import styles from "./first/first.module.css";
import FirstWindow from "./first/firstFirst";
import SecondWindow from "./first/firstSecond";
import ThirdWindow from "./first/first3";
import FourthWindow from "./first/first4";
import FifthWindow from "./first/first5";

export default function First({
    variantsVisibility,
    scrollY,
    getSteppers,
    language,
}) {
    if (scrollY > 3970) {
        getSteppers(true);
    }

    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <FirstWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                />
                <SecondWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                />
                <ThirdWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                />
                <FourthWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                />
                <FifthWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                />
            </div>
        </React.Fragment>
    );
}
