import { Modal, Space, Button, InputNumber, Select, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import Player from './Player';
const { Option } = Select;
const { Text } = Typography;

export default function SwapMenu(props) {
    const [currentPlayerChoosenRealty, setCurrentPlayerChoosenRealty] = useState([]);
    const [chosenPlayerChoosenRealty, setChosenPlayerChoosenRealty] = useState([]);
    const [money, setMoney] = useState(0);
    const [swapDirection, setSwapDirection] = useState(1)

    const selectBefore = (
        <Select
            onChange={(newVal) => {
                setSwapDirection(newVal);
            }}
            value={swapDirection}
            style={{ width: 100 }}
        >
            <Option value={1}>{props.currentPlayer.playerFigure}</Option>
            <Option value={-1}>{props.chosenPlayer.playerFigure}</Option>
        </Select>
    );

    return (
        <Modal
            title="Обмен"
            footer={null}
            open={true}
            onCancel={() => {
                props.setChosenPlayer(undefined);
            }}
            closable={true}
        >
            <Space style={{ width: "100%" }} direction="vertical">
                <Player
                    {...props.currentPlayer}
                    choosenRealty={currentPlayerChoosenRealty}
                    setChoosenRealty={setCurrentPlayerChoosenRealty}
                />
                <Player
                    {...props.chosenPlayer}
                    choosenRealty={chosenPlayerChoosenRealty}
                    setChoosenRealty={setChosenPlayerChoosenRealty}
                />
                <Text>Передать деньги</Text>
                <InputNumber
                    value={money}
                    min={0}
                    onChange={
                        (newVal) => {
                            setMoney(newVal);
                        }
                    }
                    controls={false}
                    addonBefore={selectBefore}
                    addonAfter={"$"}
                    style={{ width: 220 }}

                />
                <Space style={{ width: "100%" }} direction="vertical" align="end">
                    <Space direction="horizontal">
                        <Button
                            onClick={() => {
                                props.action(
                                    "Swap",
                                    {
                                        player1: props.currentPlayer,
                                        player2: props.chosenPlayer,
                                        offerOfPlayer1: currentPlayerChoosenRealty,
                                        offerOfPlayer2: chosenPlayerChoosenRealty,
                                        money: money * swapDirection,
                                    }
                                )
                            }}
                        >Обменять</Button>
                    </Space>
                </Space>
            </Space>
        </Modal>
    )
}