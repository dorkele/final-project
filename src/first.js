import React from "react";
import "./first.css";
import MyComp1 from "./first-mycomp1";
import MyComp2 from "./first-mycomp2";
import MyComp3 from "./first-mycomp3";
import MyComp4 from "./first-mycomp4";
export default function First() {
    return (
        <React.Fragment>
            <div className="wrapping-container">
                <MyComp1 />
                <MyComp2 />
                <MyComp3 />
                <MyComp1 />
                <MyComp2 />
                <MyComp4 />
            </div>
        </React.Fragment>
    );
}
