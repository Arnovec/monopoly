import React from "react";
import { motion } from "framer-motion";

export default function PlayerFigure(props) {


    return (
        <motion.div 
            className="player_figure"
            style={{
                top:`${props.top}px`,
                left:`${props.left}px`,
                width: "30px",
                height: "30px",
                backgroundColor: "green",
                zIndex: 10000
            }}
            // animate={{
            //     x: props.top,
            //     y: props.left,
            // }}
            // drag
            // dragConstraints={{
            //     top: 0,
            //     left: 0,
            //     right: 200,
            //     bottom: 300,
            // }}
        >
            {/* {props.playerFigure} */}
        </motion.div>
    )
}