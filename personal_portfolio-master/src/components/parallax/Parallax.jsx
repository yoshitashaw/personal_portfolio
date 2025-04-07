import React, { useRef } from "react";
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"

const Parallax = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0,1], ["0%", "150%"]);
    const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);

    return(
        <div className="parallax" style={{background: "linear-gradient(180deg, #111132, #0c0c1d)"}}>
            <motion.h1 style={{y: yText}}> Hello World! </motion.h1>
            <motion.h1 style={{y: yText}}> This is Yoshita Shaw. </motion.h1>
            <motion.div className="mountains">  </motion.div>
            <motion.div style={{y: yBg}} className="planets">  </motion.div>
            <motion.div style={{x: yBg}} className="stars">  </motion.div>
        </div>
    )
}

export default Parallax;