import React from "react";

export default function PlayerFigure(props) {

    return (
        <img 
            className="player_figure"
            src={`./img/${props.playerFigure}.png`}
        />
    )
}