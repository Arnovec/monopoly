import React from "react"
import Player from "./Player"
const players = [
    {
        playerFigure: "Igor",
        money: 500,
        prisonOutCard: 0,
    },
    {
        playerFigure: "Mysha",
        money: 500,
        prisonOutCard: 0,
    },
    {
        playerFigure: "Sveta",
        money: 500,
        prisonOutCard: 0,
    },
    {
        playerFigure: "Kirill",
        money: 500,
        prisonOutCard: 0,
    },
]

export default function PlayersMenu() {

    return (
        <div className="players_menu">
            {players.map(elem => <Player {...elem} />)}
        </div>
    )
}