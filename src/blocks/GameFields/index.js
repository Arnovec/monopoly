import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Field from './Field/Field';
import Realtyes from './../../data/Realtyes';
import players_data from './../../data/Players';
import './style.css';

//для поля
// id
// показ popovera
// информация с микросервиса



export default function GameFields(props) {
    // const [showingPopoverId, showPopover] = useState(undefined);
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
    const [playersPosition, setPlayersPosition] = useState([]);
    useEffect(() => {
        const newPlayersPosition = [];

        for (let i = 0; i < 40; i++) {
            newPlayersPosition[i] = [];
        }
        for (const player_ of props.players) {
            newPlayersPosition[player_.position].push(player_);
        }
        setPlayersPosition(newPlayersPosition);
    }, [props.players])

    const upFieldsrow = [];
    const downFieldsrow = [];
    const leftFieldsrow = [];
    const rigthFieldsrow = [];

    function renderRealtyes() {
        for (let i = 0; i < 40; i++) {
            let direction = "";
    
            if (i >= 0 && i <= 10) {
                direction = "bottom";
            } else if (i > 10 && i < 20) {
                direction = "left";
            } else if (i >= 20 && i <= 30) {
                direction = "top";
            } else if (i > 30 && i < 40) {
                direction = "right";
            }

            let fieldData = {};
            let real = props.realtyes.find(realty => realty.position == i);
            if (real) {
                fieldData = {
                    ...real,
                    direction,
                    players: playersPosition[i],
                }
            } else {
                Realtyes[1].position = i;//Костыль
                fieldData = {
                    ...Realtyes[1],
                    direction,
                    players: playersPosition[i],
                }
            }
    
            
            let newField = <Field key={`Field ${i}`} {...fieldData} realtyAction={props.realtyAction} currentPlayer={props.currentPlayer}/>;
    
            if (i >= 0 && i <= 10) {
                downFieldsrow.unshift(newField);// в обратном порядке
            } else if (i > 10 && i < 20) {
                leftFieldsrow.unshift(newField); // в обратном порядке
            } else if (i >= 20 && i <= 30) {
                upFieldsrow.push(newField);
            } else if (i > 30 && i < 40) {
                rigthFieldsrow.push(newField);
            } else {
                console.log("Ошибка с полями: позиция элемента");
            }
        }
    }

    if(props.realtyes.length != 0) {
        renderRealtyes();
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
                    <div className="big_place">
                    </div>
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