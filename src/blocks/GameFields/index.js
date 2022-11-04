import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import FieldAngel from "./Field/FieldAngel"
import Field from './Field/Field';
import Realtyes from './../../data/Realtyes';
import players_data from './../../data/Players';
import './style.css';

//для поля
// id
// показ popovera
// информация с микросервиса



export default function GameFields(props) {
const [showingPopoverId, showPopover] = useState(undefined);
    //возможность отдалять и приближать игровое поле
    const [scale, setScale] = useState(1);

    useEffect(() => {
        document.addEventListener("wheel", (event) => {
            const delta = event.deltaY || event.detail;
            if (delta < 0) {
                setScale(prev => prev < 1 ? prev + 0.1 : prev);
            }
            if (delta > 0) {
                setScale(prev => prev > 0.4 ? prev - 0.1 : prev);
            }
        });
    }, []);

    // отслеживание позиций игроков
    const [players, setPlayers] = useState(players_data);
//  const [players, setPlayers] = useState(props.players);
    const [playersPosition, setPlayersPosition] = useState([]);
    useEffect(() => {
        const newPlayersPosition = [];
        
        for(let i = 0; i < 40; i++){
            newPlayersPosition[i] = [];
        }
        for (const player_ of players) {
            newPlayersPosition[player_.position].push(player_);
        }
        setPlayersPosition(newPlayersPosition);
    }, [players])

    const placeFieldIds = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39];
    const FieldWithImgIds = [2, 4, 5, 7, 12, 15, 17, 22, 25, 28, 33, 35, 36, 38];

    const upFieldsrow = [];
    const downFieldsrow = [];
    const leftFieldsrow = [];
    const rigthFieldsrow = [];
    for(let i = 0; i < 40; i++){
        let newField;
        let direction = "";

        if( i > 0 && i < 10){
            direction = "buttom";
        }else if( i > 10 && i < 20){
            direction = "left";
        }else if( i > 20 && i < 30){
            direction = "top";
        }else if( i > 30 && i < 40){
            direction = "right";
        }

        Realtyes[1].position = i;//Костыль
        const fieldData = {
            ...Realtyes[1],
            direction,
            players: playersPosition[i],
            isShowPopover: showingPopoverId === i,
            showPopover,
        }

        if(i%10 == 0){
            newField = <FieldAngel players={playersPosition[i]}/>;
        }else {
            newField = <Field key={`Field ${i}`} {...fieldData}/>;
        }

        if( i >= 0 && i <= 10){
            downFieldsrow.unshift(newField);// в обратном порядке
        }else if( i > 10 && i < 20){
            leftFieldsrow.unshift(newField); // в обратном порядке
        }else if( i >= 20 && i <= 30){
            upFieldsrow.push(newField);
        }else if( i > 30 && i < 40){
            rigthFieldsrow.push(newField);
        }else {
            console.log("Ошибка с полями: позиция элемента");
        }
    }

    return (
        <div className="game">
            <motion.div
                style={{ padding: "2000px" }}
                animate={{
                    scale,
                    x: -450,
                    y: -850,
                }}
                drag
                dragConstraints={{
                    top: -850 * scale,
                    left: -450 * scale,
                    right: 650 * scale,
                    bottom: 850 * scale,
                    // top: -1500 * scale,
                    // left: -1500 * scale,
                    // right: 1500 * scale,
                    // bottom: 1500 * scale,
                }}
            >
                <div className="row">
                    {upFieldsrow}
                </div>
                <div className="row">
                    <div className="column">
                        {leftFieldsrow}
                    </div>
                    <div className="big_place"></div>
                    <div className="column">
                        {rigthFieldsrow}
                    </div>
                </div>
                <div className="row">
                    {downFieldsrow}
                </div>
            </motion.div>
        </div>
    )
}