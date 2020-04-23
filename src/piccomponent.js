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
//
//             <PicComponent />
//         </React.Fragment>
//     );
// }
