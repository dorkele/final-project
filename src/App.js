import React, { useState } from "react";
import "./App.css";
import Steppers from "./steppers";

export default function App() {
    const [steppers, setSteppers] = useState(false);
    function change() {
        if (steppers === true) {
            setSteppers(false);
        } else if (steppers === false) {
            setSteppers(true);
        }
    }

    return (
        <React.Fragment>
            <button onClick={change}>Click</button>

            {steppers && <Steppers />}
        </React.Fragment>
    );
}
