import React, { useEffect } from "react";
import "./first/first.css";
import FirstWindow from "./first/firstFirst";
import SecondWindow from "./first/firstSecond";
import ThirdWindow from "./first/first3";
import FourthWindow from "./first/first4";
import FifthWindow from "./first/first5";

export default function First({ variantsVisibility, scrollY, getSteppers }) {
    useEffect(() => {
        getSteppers(false);
    }, []);

    if (scrollY > 3870) {
        getSteppers(true);
    }
    console.log(scrollY);

    return (
        <React.Fragment>
            <div className="wrapping-container">
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
