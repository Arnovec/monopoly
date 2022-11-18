import { Modal, Space, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import Player from './Player';

export default function SwapMenu(props) {
    const [currentPlayerChoosenRealty, setCurrentPlayerChoosenRealty] = useState([]);
    const [chosenPlayerChoosenRealty, setChosenPlayerChoosenRealty] = useState([]);

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
                <Space style={{ width: "100%" }} direction="vertical" align="end">
                    <Space direction="horizontal">
                        <Button>Обменять</Button>
                    </Space>
                </Space>
            </Space>
        </Modal>
    )
}