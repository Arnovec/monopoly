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
import './dice.css';
import Dices from './blocks/ActionsButtons/Dices';
import { Space } from 'antd';
import SadActions from './blocks/SadActions';

// Запрос на старт игры, отправить на Player и карточки
// Запрос на 

export default function App() {

  const [players, setPlayers] = useState(players_data);
  const [realtyes, setRealtyes] = useState(realtyes_data);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [resultDropDice, setResultDropDice] = useState([]);
  const [token, setToken] = useState(Cookies.get('token'));
  const [actions, setActions] = useState(["DropDice", "BuyRealty"])

  async function action(type, actionData) {
    let res;
    switch (type) {
      case 'DropDice':
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer
            }
          })
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setActions(res.data.actionBody.resultActions[0]);
        setCurrentPlayer(res.data.actionBody.player);
        console.log(res);
        return res;
      case "EndTurn":
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer
            }
          })
        setActions(res.data.actionBody.resultActions[0]);
        setCurrentPlayer(players.find(player_ => player_.playerFigure === res.data.actionBody.nextPlayer.playerFigure));
        console.log(res);
        return res;
      case 'BuyRealty':
        console.log(actionData?.realtyCard ? "data!" : "current!");
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
              "realtyCard": actionData?.realtyCard ? actionData.realtyCard : realtyes[currentPlayer.position], // выкуп заложенного имущества : попадание на свободное поле
            }
          })
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setCurrentPlayer(res.data.actionBody.player);
        console.log(res);
      case "BuyHouse":
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
              "realtyCard": actionData.realtyCard,
            }
          });
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setCurrentPlayer(res.data.actionBody.player);
      case "LeavePrisonByMoney":
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer
            }
          })
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setActions(res.data.actionBody.resultActions[0]);
        setCurrentPlayer(res.data.actionBody.player);
        console.log(res);
        return res;
      case "SellHouse":
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
              "realtyCard": actionData.realtyCard,
            }
          });
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setCurrentPlayer(res.data.actionBody.player);
      case 'SellRealty':
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
              "realtyCard": actionData.realtyCard
            }
          })
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setCurrentPlayer(res.data.actionBody.player);
        console.log(res);
      case "Swap":
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player1": actionData.player1,
              "player2": actionData.player2,
              "offerOfPlayer1": actionData.offerOfPlayer1,
              "offerOfPlayer2": actionData.offerOfPlayer2,
              "money": actionData.maoney,
            }
          });
        setPlayers(players.map(player => {
          if (player.playerFigure == res.data.actionBody.player1.playerFigure) {
            return res.data.actionBody.player1;
          } else if (player.playerFigure == res.data.actionBody.player2.playerFigure) {
            return res.data.actionBody.player2;
          } else {
            return player
          }
        }));
        setCurrentPlayer(res.data.actionBody.player1);
      case 'GiveUp': // сдаться
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
            }
          })
        setPlayers(players.map(player => {
          if (player.playerFigure != currentPlayer.playerFigure) {
            return player
          }
        }));
        console.log(res);
    }
  }

  async function start(players) {
    let res = await axios.post(`http://localhost:8081/api/v1/progress/start`, players);
    let data = res.data;
    setToken(data.token);
    setRealtyes([...data.realtyList]);
    setPlayers(data.players);
    setCurrentPlayer(data.players[0]);
  }

  return (
    <>
      <PlayersMenu
        action={action}
        players={players}
        currentPlayer={currentPlayer}
      />
      <GameFields action={action} realtyes={realtyes} players={players} currentPlayer={currentPlayer} />
      <StartGame action={start} />
      <Space className="actions_container" direction="vertical">
        <ActionsButtons action={action} actions={actions} />
        <Dices action={action} actions={actions}></Dices>
      </Space>
      <SadActions />
    </>
  );
}
