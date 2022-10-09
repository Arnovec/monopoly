import React, { useEffect } from 'react';
import GameFields from "./blocks/GameFields";
import startGameReq from './scrypts/startGameReq';

export default function App() {
  useEffect(() => {startGameReq()}, []);
  return (
    <GameFields/>
  );
}