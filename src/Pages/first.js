import React from "react";
import styles from "./first/first.module.css";
import FirstWindow from "./first/firstFirst";
import SecondWindow from "./first/firstSecond";
import ThirdWindow from "./first/first3";
import FourthWindow from "./first/first4";
import FifthWindow from "./first/first5";

export default function First({ variantsVisibility, scrollY, getSteppers }) {
    if (scrollY > 3970) {
        getSteppers(true);
    }

    return (
        <React.Fragment>
            <div className={styles.wrapping_container}>
                <FirstWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
                <SecondWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
                <ThirdWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
                <FourthWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
                <FifthWindow
                    scrollY={scrollY}
                    variantsVisibility={variantsVisibility}
                />
            </div>
        </React.Fragment>
    );
}
