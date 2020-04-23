// import React, { useEffect, useState } from "react";
// import { motion, useViewportScroll, useAnimation } from "framer";

// export default function PicComponent() {
//     let [animationStart, setAnimationStart] = useState(false);
//     let { scrollY, scrollYProgress } = useViewportScroll();
//     const divControls = useAnimation();
//     divControls.start({
//         x: "100%",
//         backgroundColor: "#f00",
//         transition: { duration: 3 },
//     });
//     const sequence = async () => {
//         await animationStart;
//         return await divControls.start({ opacity: 1 });
//     };
//     useEffect(() => {
//         function handleScroll() {
//             if (window.scrollY > 440) {
//                 console.log("window.scrollY: ", window.scrollY);
//                 console.log("scrolly2: ", scrollY);
//                 console.log("scrollYProgress: ", scrollYProgress);
//                 setAnimationStart(true);
//             }
//         }

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     });
//     return (
//         <React.Fragment>
//             <motion.div animate={{ rotate: animationStart ? 180 : 0 }}>
//                 <img src="/eye1.jpg" alt="eye-cut-out" />
//             </motion.div>
//             <motion.div animate={sequence}></motion.div>
//         </React.Fragment>
//     );
// }
// import React, { useEffect, useRef, useState } from "react";
// import {
//     useViewportScroll,
//     Frame,
//     useAnimation,
//     useSpring,
//     motion,
// } from "framer";
// import PicComponent from "./piccomponent";
// import "./first.css";

// export default function First() {
//     const ref = useRef();
//     const controls = useAnimation();
//     let { scrollY } = useViewportScroll();

//     let [shouldShowAnimations, setShouldShowAnimations] = useState(false);

//     useEffect(() => {
//         function handleScroll() {
//             if (window.scrollY > 5) {
//                 console.log("scrollY");

//                 setShouldShowAnimations(true);
//             }
//         }

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     });

//     return (
//         <React.Fragment>
//             <div className="veliki-div">hm</div>
//             {/* <div>

//             </div>
//
//             <Frame animate={{ opacity: 0 }} transition={{ duration: 5 }}>
//
//             </Frame>
//             <Frame animate={controls}>
//                 Očnjaci, podočnjaci, kapci. Očnjaci, podočnjaci, kapci tvoji ne
//                 govore tko su bili tvoji preci ni u kojim su nijemim filmovima
//                 glumili. Sve što mi imaju za reći su neugodne frekvencije.
//             </Frame>
//             <p>
//                 Koliko smo se puta u mojoj glavi, šta? Seksali jebali vodili
//                 ljubav, te spike. Ti si se malo okrenuo prema meni pa sam
//                 zaključila da me obožavaš.
//             </p>
//             <p>
//                 I tako, u skoro ljetno jutro, dok djevojčice pupaju (tiho, tiho,
//                 no ne i pretiho), oni ulaze u učionice i javljaju kako
//                 katastrofa čuči pod stolom. Najavljuju kolektivno umiranje. I
//                 nisu mogli biti precizniji od: „ovih dana“. Možda se prvo
//                 nervozno smijuckamo. Možda, ali nekako ne vjerujem, vidi se na
//                 njima da su malo prije povraćali. I da će opet.
//             </p>
//             <motion.div>
//                 Bojiš se, znojiš se, a možda bi baš bilo dobro u ovom trenutku
//                 kihnuti. Ali ne možeš toliko dugo oči držati zatvorene. Ej znaš
//                 šta, ti jedan jadno poseban, daj da ti diram kosu. Ali učionica
//                 je prazna. Zjapi prazna. Zjapi. Oni ljudi su otišli. Dali su mi
//                 kamenčiće. Sve što su mi dali bili su kamenčići.
//             </motion.div>
//             <p>
//                 Prvo što sam učinila kada sam shvatila da nam nema spasa. Bila
//                 sam u toj zjapljujuće praznoj učionici. Nisam otišla doma
//                 poljubiti roditelje. Ne odmah.
//             </p>
//             <motion.div>
//                 Bila sam tamo, zamotana u slojeve i slojeve svoje kože.
//             </motion.div> */}
//             <PicComponent />
//         </React.Fragment>
//     );
// }
