import React, { useState } from "react"
import Player from "./Player"
import './style.css';
import SwapMenu from "./SwapMenu";

export default function PlayersMenu(props) {
    const [chosenPlayer, setChosenPlayer] = useState(undefined);

    return (
        <>
            <div className="players_menu">
                {props.players.map(elem => {
                    const isCurrentPlayer = elem === props.currentPlayer;
                    return (
                        <Player
                            onClick={() => {
                                if (props.currentPlayer !== elem) {
                                    setChosenPlayer(elem);
                                }
                            }}
                            isCurrentPlayer={isCurrentPlayer}
                            key={`Player ${elem.playerFigure}`}
                            {...elem}
                        />
                    );
                })}
            </div>
            {chosenPlayer !== undefined && props.currentPlayer !== undefined ?
                <SwapMenu
                    chosenPlayer={chosenPlayer}
                    currentPlayer={props.currentPlayer}
                    setChosenPlayer={setChosenPlayer}
                />
                :
                <></>
            }
        </>
    )
}