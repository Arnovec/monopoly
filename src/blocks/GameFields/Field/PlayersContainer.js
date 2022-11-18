import React from "react";
import PlayerFigure from './PlayerFigure';

export default function PlayersContainer(props) {
    const playersRows = [];
    let row = [];
    if (props.players !== undefined) {
        for (let i = 0; i < props.players.length; i++) {
            row.push(<PlayerFigure key={props.players[i].playerFigure} {...props.players[i]} />);
            if (i % 3 == 2) {
                playersRows.push(
                    <div className="player_figure_row">
                        {row}
                    </div>
                );
                row = [];
            }
        }
        if (props.players.length % 3 != 0) {
            playersRows.push(
                <div className="player_figure_row">
                    {row}
                </div>
            );
        }
    }

    return (
        <div className="player_figure_container">
            <div
                style={{
                    width: "100%"
                }}
            >
                {playersRows}
            </div>
        </div>
    )
}