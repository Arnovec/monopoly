import React, { useEffect, useState } from 'react';
import GameFields from "./blocks/GameFields";
import PlayersMenu from './blocks/PlayersMenu';
import realtyes_data from './data/Realtyes';
import players_data from "./data/Players";
import checkSession from './scrypts/checkSession';
import StartGame from './blocks/StartGame';
import ActionsButtons from './blocks/ActionsButtons';
import Cookies from 'js-cookie'
import axios from 'axios';


// Запрос на старт игры, отправить на Player и карточки
// Запрос на 

export default function App() {

  const [players, setPlayers] = useState(players_data);
  const [realtyes, setRealtyes] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [resultDropDice, setResultDropDice] = useState([]);
  const [token, setToken] = useState(Cookies.get('token'));
  const [actions, setActions] = useState(["DropDice", "EndTurn", "LeavePrisonByCard", "LeavePrisonByMoney"])

  async function action(type) {
    switch(type){
      case 'DropDice':
        let res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`, 
        {
          "actionType": type,
          "actionBody": {
            "player": currentPlayer
          }
        })

        setPlayers(players.map(player => {
          if(player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        
        setActions(res.data.actionBody.resultActions);
        console.log(res.data.actionBody.resultActions);
        setCurrentPlayer(res.data.actionBody.player);
        return res;
    }
  }

  async function start(players) {
    let res = await axios.post(`http://localhost:8081/api/v1/progress/start/${players.length}`, players);
    let data = res.data;
    setToken(data.token);
    setRealtyes([...data.realtyList]);
    setPlayers(data.players);
    setCurrentPlayer(data.players[0]);
  }

  return (
    <>
      <PlayersMenu
        players={players}
        currentPlayer={currentPlayer}
      />
      <GameFields currentPlayer={currentPlayer} action={action} realtyes={realtyes} players={players} />
      <StartGame action={start} />
      <ActionsButtons action={action} actions={actions} />
    </>
  );
}
