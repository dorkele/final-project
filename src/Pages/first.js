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
    isMobile,
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
                    isMobile={isMobile}
                />
                <SecondWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                    isMobile={isMobile}
                />
                <ThirdWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                    isMobile={isMobile}
                />
                <FourthWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                    isMobile={isMobile}
                />
                <FifthWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                    language={language}
                    isMobile={isMobile}
                />
            </div>
        </React.Fragment>
    );
}
