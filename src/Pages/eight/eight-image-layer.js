import React from "react";
import { Frame } from "framer";
import "./eight.css";
import OpacityFadeOut from "../../components/opacityFadeOut";
import OpacityFadeInFadeOut from "../../components/opacityFadeInFadeOut";
import OpacityFadeIn from "../../components/opacityFadeIn";

export default function EightImageLayer({ scrollY, variantsOpacity }) {
    const style = { zIndex: -1, position: "fixed" };
    return (
        <React.Fragment>
            <OpacityFadeOut
                variantsOpacity={variantsOpacity}
                top={100}
                style={style}
                width={"10%"}
                src="/images/anger.jpg"
                alt="anger-quote"
                scrollY={scrollY}
                treshold={60}
            />
            <OpacityFadeInFadeOut
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                treshold={60}
                tresholdOut={100}
                style={style}
                top={110}
                left={500}
                src="/images/body.jpg"
                alt="body-quote"
            />
            <OpacityFadeInFadeOut
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                treshold={100}
                tresholdOut={150}
                style={style}
                top={350}
                left={300}
                src="/images/personality.jpg"
                alt="personality-quote"
            />
            <OpacityFadeInFadeOut
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                treshold={150}
                tresholdOut={200}
                style={style}
                top={400}
                left={50}
                src="/images/pink-meme.jpg"
                alt="pink-meme"
            />
            <OpacityFadeInFadeOut
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                treshold={200}
                tresholdOut={250}
                style={style}
                top={100}
                left={100}
                src="/images/rebel.jpg"
                alt="rebel-quote"
            />
            <OpacityFadeInFadeOut
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                treshold={300}
                tresholdOut={350}
                style={style}
                top={500}
                left={700}
                src="/images/scream.jpg"
                alt="scream-quote"
            />
            <OpacityFadeInFadeOut
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                treshold={400}
                tresholdOut={450}
                style={style}
                top={50}
                left={700}
                src="/images/suffering.jpg"
                alt="suffering-quote"
            />
            <OpacityFadeIn
                variantsOpacity={variantsOpacity}
                scrollY={scrollY}
                treshold={500}
                style={style}
                top={250}
                left={950}
                src="/images/tired.jpg"
                alt="tired-quote"
            />
        </React.Fragment>
    );
}
