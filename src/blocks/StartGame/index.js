import { Button, Modal, Radio, Space } from "antd";
import React, { useEffect, useState } from "react";

export default function StartGame(props) {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const [sendPlayers, setSendPlayers] = useState([]);

    const [players, setPlayers] = useState([
        {
            name: "Car",
            isSelected: false,
        },
        {
            name: "Plane",
            isSelected: false,
        },
        {
            name: "Burger",
            isSelected: false,
        },
        {
            name: "Pizza",
            isSelected: false,
        },
        {
            name: "Skate",
            isSelected: false,
        },
        {
            name: "Dog",
            isSelected: false,
        },
        {
            name: "Coin",
            isSelected: false,
        },
        {
            name: "Cat",
            isSelected: false,
        },
        {
            name: "Diamond",
            isSelected: false,
        }
    ]);

    function selectPlayer(index) {
        const newPlayers = [];

        for (let i = 0; i < players.length; i++) {
            if (i == index) {
                const newPlayer_ = players[i];
                newPlayer_.isSelected = !newPlayer_.isSelected;
                newPlayers.push(newPlayer_);
                setSendPlayers([...sendPlayers, newPlayer_.name]);
            } else {
                newPlayers.push(players[i]);
            }
        }
        setPlayers(newPlayers);
    }

    async function start() {
        let tmp = [];
        players.forEach(el => {
            if (el.isSelected) {
                tmp.push(el.name);
            }
        });
        try{
            await props.action(tmp);
            setIsModalOpen(false);
        } catch (e) {
            alert("Неправильные данные")
        }
    }

    return (
        <>
            <Modal title="Выберете фигурки игроков" footer={null} open={isModalOpen} closable={false}>
                <Space style={{ width: "100%" }} direction="vertical">

                    {players.map((elem, index) =>
                        <Radio
                        key={`start ${elem.name}`}
                            checked={elem.isSelected}
                            onClick={(event) => {
                                selectPlayer(index)
                            }}
                        >
                            {elem.name}
                        </Radio>
                    )}
                    <Space style={{ width: "100%" }} direction="vertical" align="end">
                        <Space direction="horizontal">
                            <Button>Продолжить</Button>
                            <Button onClick={() => { 
                                start();
                            }}>Начать</Button>
                        </Space>
                    </Space>
                </Space>
            </Modal>
        </>
    )
}