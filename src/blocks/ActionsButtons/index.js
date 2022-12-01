import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import Dices from "./Dices";
import './style.css';


const allActions = [
    {
        name: "EndTurn",
        translate: "Завершить ход",
        type: "primary",
        danger: true,
    },
    {
        name: "MoneyOperation",
        translate: "Оплатить",
        type: "primary",
        danger: false,
    },
    {
        name:  "LeavePrisonByCard",
        translate: "Покинуть тюрьму за карточку",
        type: "default",
        danger: false,
    },
    {
        name: "LeavePrisonByMoney",
        translate: "Покинуть тюрьму за деньги",
        type: "default",
        danger: false,
    },
    {
        name: "BuyRealty",
        translate: "Купить имущество",
        type: "primary",
        danger: false,
    },  
]
//blockedActions
export default function ActionsButtons(props) {
    const [actions, setActions] = useState([]);
    const [blockedActions, setBlockedActions] = useState([]);
    console.log(props.actions)

    useEffect(() => {
        setActions(allActions.filter((elem1) => {
            const isFind = props.actions.find(elem2 => elem2 === elem1.name);
            if (isFind !== undefined) {
                return elem1;
            }
        }));
        setBlockedActions(allActions.filter((elem1) => {
            const isFind = props.blockedActions.find(elem2 => elem2 === elem1.name);
            if (isFind !== undefined) {
                return elem1;
            }
        }));
    }, [props.actions])

    return (
        <Space direction="vertical">
            {actions.map(elem  =>
                <Button
                    className="action_button"
                    type={elem.type}
                    danger={elem.danger}
                    key={elem.name}
                    onClick={() => {
                        props.action(elem.name);
                    }}
                >
                    {elem.translate}
                </Button>
            )}
            {blockedActions.map(elem  =>
                <Button
                    className="action_button"
                    type={elem.type}
                    danger={elem.danger}
                    key={elem.name}
                    disabled
                >
                    {elem.translate}
                </Button>
            )}
            
        </Space>
    );
}