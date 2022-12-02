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
import { Space, Modal, Typography } from 'antd';
import SadActions from './blocks/SadActions';
import map from './data/Map';

const { Text } = Typography;

// Запрос на старт игры, отправить на Player и карточки
// Запрос на 

export default function App() {

  const [players, setPlayers] = useState([]);
  const [realtyes, setRealtyes] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [resultDropDice, setResultDropDice] = useState([]);
  const [token, setToken] = useState(Cookies.get('token'));
  const [actions, setActions] = useState(["DropDice"]);
  const [blockedActions, setBlockedActions] = useState([]);
  const [isEndGame, setIsEndGame] = useState(false);
  const [gameHistory, setGameHistory] = useState();

  // Долг игрока credit
  // Список доступных действий и список заблокированных

  function messageCard(title, description) {
    Modal.info({
      title: 'Карта ' + title,
      content: (
        <div>
          <p>{description}</p>
        </div>
      )
    });
  }

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
        if (res.data.actionBody.Chance) {
          messageCard('Шанса', res.data.actionBody.Chance.description)
        } else if (res.data.actionBody.CommunityChest) {
          messageCard('Общественной казны', res.data.actionBody.CommunityChest.description)
        }
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setActions(res.data.actionBody.player.currentActions);
        setBlockedActions(res.data.actionBody.player.blockedActions);
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
        setActions(res.data.actionBody.nextPlayer.currentActions);
        setBlockedActions(res.data.actionBody.nextPlayer.blockedActions);
        setCurrentPlayer(players.find((el) => el.playerFigure == res.data.actionBody.nextPlayer.playerFigure));
        console.log(res);
        return res;
      case 'BuyRealty':
        console.log(actionData);
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
              "realtyCard": actionData?.realtyCard ? actionData.realtyCard : realtyes.find((el) => el.position == currentPlayer.position), // выкуп заложенного имущества : попадание на свободное поле
            }
          })
        setPlayers(players.map(player => {
          if (player.playerFigure == currentPlayer.playerFigure) {
            return res.data.actionBody.player
          } else {
            return player
          }
        }));
        setActions(res.data.actionBody.player.currentActions);
        setBlockedActions(res.data.actionBody.player.blockedActions);
        setRealtyes(res.data.actionBody.realtyList);
        setCurrentPlayer(res.data.actionBody.player);
        return res;
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
        setRealtyes(res.data.actionBody.realtyList);
        setActions(res.data.actionBody.player.currentActions);
        setBlockedActions(res.data.actionBody.player.blockedActions);
        setCurrentPlayer(res.data.actionBody.player);
        return res;
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
        setActions(res.data.actionBody.player.currentActions);
        setBlockedActions(res.data.actionBody.player.blockedActions);
        setCurrentPlayer(res.data.actionBody.player);
        console.log(res);
        return res;
      case "LeavePrisonByCard":
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
        setActions(res.data.actionBody.player.currentActions);
        setBlockedActions(res.data.actionBody.player.currentActions);
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
        setRealtyes(res.data.actionBody.realtyList);
        setCurrentPlayer(res.data.actionBody.player);
        setActions(res.data.actionBody.player.currentActions);
        setBlockedActions(res.data.actionBody.player.currentActions);
        return res;
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
        setRealtyes(res.data.actionBody.realtyList);
        setCurrentPlayer(res.data.actionBody.player);
        setActions(res.data.actionBody.player.currentActions);
        setBlockedActions(res.data.actionBody.player.currentActions);
        return res;
      case "MoneyOperation":
        const playersList = [currentPlayer];
        if (map[currentPlayer.position].type == "realty") {
          const ownerFigure = realtyes.find(realty_ => realty_.position == currentPlayer.position).owner;
          playersList.push(players.find(player_ => player_.playerFigure == ownerFigure));
        }
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
              "playerList": playersList,
              "money": -currentPlayer.credit,
            }
          });
        setPlayers(players.map(player => {
          const newPlayer = res.data.actionBody.playerList.find(el => el.playerFigure == player.playerFigure)
          if (newPlayer !== undefined) {
            return newPlayer
          } else {
            return player
          }
        }));
        setCurrentPlayer(res.data.actionBody.playerList[0]);
        setActions(res.data.actionBody.playerList[0].currentActions);
        setBlockedActions(res.data.actionBody.playerList[0].blockedActions);
        return res;
      case "Swap":
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player1": actionData.player1,
              "player2": actionData.player2,
              "offerOfPlayer1": actionData.offerOfPlayer1,
              "offerOfPlayer2": actionData.offerOfPlayer2,
              "money": actionData.money,
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
        setRealtyes(res.data.actionBody.realtyList);
        setCurrentPlayer(res.data.actionBody.player1);
        setActions(res.data.actionBody.player1.currentActions);
        setBlockedActions(res.data.actionBody.player1.currentActions);
        return res;
      case 'GiveUp': // сдаться
        res = await axios.put(`http://localhost:8081/api/v1/progress/action/${token}`,
          {
            "actionType": type,
            "actionBody": {
              "player": currentPlayer,
            }
          })
        setPlayers(res.data.actionBody.playerList);
        setRealtyes(res.data.actionBody.realtyList);
        setCurrentPlayer(res.data.actionBody.playerList.find((el) => el.playerFigure == res.data.actionBody.nextPlayer.playerFigure));
        if (res.data.actionBody.playerList.length === 1) end();
        console.log(res);
        return res;
    }
  }

  async function start(players) {
    let res = await axios.post(`http://localhost:8081/api/v1/progress/start`, players);
    let data = res.data;
    setToken(data.token);
    Cookies.set("token", data.token);
    setRealtyes(data.realtyList);
    setPlayers(data.players);
    setCurrentPlayer(data.players[0]);
  }

  async function continueGame() {
    let res = await axios.get(`http://localhost:8081/api/v1/progress/continue/${token}`);//куда?
    let data = res.data;
    setRealtyes(data.realtyList);
    setPlayers(data.players);
    setCurrentPlayer(data.players[0]);
    setActions(data.players[0].currentActions);
    setBlockedActions(data.players[0].blockedActions);
  }

  async function end() {
    let res = await axios.get(`http://localhost:8081/api/v1/progress/endgame/${token}`);
    console.log(res);
    setGameHistory(res.data);
    setIsEndGame(true);
    Cookies.remove('token');
  }

  return (
    <>
      <PlayersMenu
        action={action}
        players={players}
        currentPlayer={currentPlayer}
      />
      <GameFields action={action} realtyes={realtyes} players={players} currentPlayer={currentPlayer} />
      <StartGame action={start} token={token} continueGame={continueGame} />
      <Space className="actions_container" direction="vertical">
        <ActionsButtons action={action} blockedActions={blockedActions} actions={actions} />
        <Dices action={action} actions={actions}></Dices>
      </Space>
      <SadActions endGame={end} action={action} />
      <Modal closable={false} width={1000} title="История игры" open={isEndGame} footer={null}>
        <div className='history_container'>
          {gameHistory !== undefined ?
            gameHistory.map((elem, index) =>
              <div key={`game history ${index}`} className="history_row" direction="horizontal">
                <Text className='history_text'>{index + 1}</Text>
                <Text className='history_text'>{elem}</Text>
              </div>
            )
            :
            <></>
          }
        </div>
      </Modal>
    </>
  );
}
