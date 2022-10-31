import React from "react";
import PlayerFigure from './PlayerFigure';

export default function PlayersContainer(props) {
    //расположение нескольких фишек на одном поле
    if(props.players !== undefined){
        let length = 40;
        let radius = length / (2 * Math.sin(Math.PI / props.players.length));
        console.log()
        for (let i = 0; i < props.players.length; ++i) {
            props.players[i].top = (length * props.players.length / 5 + 15) + radius * Math.cos(Math.PI / props.players.length * (8 + 2 * i))+90;
            props.players[i].left = (length * props.players.length / 5 + 15) + radius * Math.sin(Math.PI / props.players.length * (8 + 2 * i));
        }
    }

    return (
        <div>
            {props.players !== undefined ?
                props.players.map(elem =>
                    <PlayerFigure key={elem.playerFigure} {...elem} />
                )
                :
                <></>}
        </div>
    )
}