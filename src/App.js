import React, { useEffect, useState } from 'react';
import GameFields from "./blocks/GameFields";
import PlayersMenu from './blocks/PlayersMenu';
import realtyes_data from './data/Realtyes';
import players_data from "./data/Players";
import checkSession from './scrypts/checkSession';
import Cookies from 'js-cookie'
import axios from 'axios';

// Запрос на старт игры, отправить на Player и карточки
// Запрос на 

export default function App() {
// Новая игра через массив пустой игроков
// Есть екшн который мы прокидываем дальше, 
// Экшн с свитчом действий, чекает результат
// Сделать компоненты с кубиками

  const [players, setPlayers] = useState([]);
  const [realtyes, setRealtyes] = useState([]);
  const [resultDropDice, setResultDropDice] = useState([]);
  const [turn, setTurn] = useState();
  const [token, setToken] = useState(Cookies.get('token'));

  // useEffect(() => {
  //   setStatus(checkSession());
  // }, []);

  const startGameReq = async (count, figures) => {

    
    // const result = await axios.post(`http://localhost:8081/api/v1/progress/start/${count}`, {figures});
    // console.log(result);
    setPlayers(players_data);
    setRealtyes(realtyes_data);
    setTurn(players_data[0]);
    setToken(123);
    Cookies.set('token', 123);
  }

  async function action(type) {
    switch(type){
      case 'DropDice':
        let result = await axios.put(`http://localhost:8081/api/v1/progress/action`, {actionType: "DropDice"});
        setResultDropDice(result.data);
        return resultDropDice;
    }
  }

  console.log(players)

  return (
    <>
      <PlayersMenu players={players}/>
      <GameFields action={action} realtyes={realtyes} players={players}/>
      {players.length == 0 ? <button onClick={() => {
        startGameReq(0, "Test");
      }}>Начать игру</button> : <></>}
    </>
  );
}