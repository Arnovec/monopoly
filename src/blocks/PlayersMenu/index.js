import React from "react"
import Player from "./Player"

export default function PlayersMenu(props) {
    console.log(props.players);

    return (
        <div className="players_menu">
            {props.players.map(elem => <Player key={`Player ${elem.playerFigure}`} {...elem} />)}
        </div>
    )
}