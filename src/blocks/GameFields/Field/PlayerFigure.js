import React from "react";

export default function PlayerFigure(props) {


    return (
        <img 
            className="player_figure"
            style={{
                // top:`${props.top}px`,
                // left:`${props.left}px`,
            }}
            src={`./img/${props.playerFigure}.png`}
        />
    )
}