import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import Dices from "./Dices";
import './style.css';
import './dice.css';

const allActions = [
    {
        name: "EndTurn",
        translate: "Завершить ход",
        type: "primary",
        danger: true
    },
    {
        name:  "LeavePrisonByCard",
        translate: "Покинуть тюрьму за карточку",
        type: "default",
        danger: false
    },
    {
        name: "LeavePrisonByMoney",
        translate: "Покинуть тюрьму за деньги",
        type: "default",
        danger: false
    },
]

export default function ActionsButtons(props) {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        setActions(allActions.filter((elem1) => {
            const isFind = props.actions.find(elem2 => elem2 === elem1.name);
            if (isFind !== undefined) {
                return elem1;
            }
        }));
    }, [props.actions])

    return (
        <Space className="actions_container" direction="vertical">
            {actions.map(elem  =>
                <Button
                    className="action_button"
                    type={elem.type}
                    danger={elem.danger}
                    key={elem.name}
                >
                    {elem.translate}
                </Button>
            )}
            <Dices action={props.action}></Dices>
        </Space>
    );
}