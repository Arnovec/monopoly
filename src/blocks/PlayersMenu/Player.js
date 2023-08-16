import React from "react"

export default function Player(props) {

    return (
        <div onClick={props.onClick} className={`players_menu_card ${props.isCurrentPlayer ? "players_menu_card_choosen" : ""}`}>
            <p className="players_menu_figure">{props.playerFigure}</p>
            <div>
                <div className="players_menu_money">
                    <img src="./img/money_bag.png" />
                    <p>{props.money}</p>
                </div>
                <div className="players_menu_prison_card">
                    <img src="./img/escape.png" />
                    <p>{props.prisonOutCard}</p>
                </div>
            </div>
        </div>
    )
}