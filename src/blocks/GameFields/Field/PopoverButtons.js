import { Button } from "antd";
import React from "react";

export default function PopoverButtons(props) {


    return (
        <div className={`popover_buttons`}>
            {props.card.owner ?
                props.currentPlayer.playerFigure == props.card.owner ?
                    props.card.countHouse == -1 ?
                        <Button className={`popover__button`}>Выкупить</Button>
                        :
                        <>
                            <Button className={`popover__button`}>+Дом</Button>
                            {props.card.countHouse == 0 ?
                                <Button className={`popover__button`}>Заложить</Button>
                                :
                                <Button className={`popover__button`}>-Дом</Button>
                            }
                        </>
                    :
                    <></>
                :
                props.currentPlayer.position == props.card.position ?
                    <Button className={`popover__button`}>Купить</Button>
                    :
                    <></>
            }
        </div>
    )
}