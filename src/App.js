import React, { useEffect, useState } from 'react';
import GameFields from "./blocks/GameFields";
import PlayersMenu from './blocks/PlayersMenu';
import realtyes_data from './data/Realtyes';
import players_data from "./data/Players";
import checkSession from './scrypts/checkSession';

// Запрос на старт игры, отправить на Player и карточки
// Запрос на 

export default function App() {


  const [players, setPlayers] = useState(players_data);
  const [realtyes, setRealtyes] = useState(realtyes_data);
  const [status, setStatus] = useState();

  useEffect(() => {
    setStatus(checkSession());
  }, []);

  useEffect(() => {
    const startGameReq = async (count, figures) => {
      // const result = await axios.post(`http://localhost:8081/api/v1/progress/start/${count}`, {figures});
      // console.log(result);
      // setPlayers(result.data['players']);
      // setRealtyes(result.data['realtyes']);
    }
    startGameReq(3, ["Burger", "Plane", "Car"])
  }, []);

  console.log(players)

  return (
    <>
      <PlayersMenu players={players}/>
      <GameFields realtyes={realtyes} players={players}/>
    </>
  );
}