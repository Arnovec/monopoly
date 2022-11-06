import React from "react"
import Player from "./Player"
import "./style.css"

export default function PlayersMenu(props) {
    return (
        <div className="players_menu">
            {props.players.map(elem => <Player key={`Player ${elem.playerFigure}`} {...elem} />)}
        </div>
    )
}