import { Button } from "antd";
import React from "react";

export default function PopoverButtons(props) {

    // props.position == props.currentPlayer.position 
    // && !props.currentPlayer.realtyList.find(el => el.cardName == props.cardName)
    // ?   <button
    //         onClick={ ()=> {
    //         props.realtyAction(
    //             "BuyRealty",
    //             props
    //         )
    //     }}>купить</button>

    return (
        <div className={`popover_buttons`}>
            {props.card.countHouse == -1 ?
                <Button
                    type="primary"
                    className={`popover__button`}
                    onClick={() => {
                        props.action(
                            "BuyRealty",
                            {
                                realtyCard: props.card
                            }
                        )
                    }}
                >Выкупить</Button>
                :
                <>
                    {
                        props.card.type === "realty" &&
                            props.card.countHouse < 5 &&
                            props.currentPlayer.monopoly.find(elem => elem === props.card.color) !== undefined ?
                            <Button
                                type="primary"
                                className={`popover__button`}
                                onClick={() => {
                                    props.action(
                                        "BuyHouse",
                                        {
                                            realtyCard: props.card
                                        }
                                    )
                                }}
                            >+Дом</Button>
                            :
                            <></>
                    }

                    {
                        props.card.type !== "realty" ||
                            props.card.countHouse == 0 ?
                            <Button
                                danger
                                type="primary"
                                className={`popover__button`}
                                onClick={() => {
                                    props.action(
                                        "SellRealty",
                                        {
                                            realtyCard: props.card
                                        }
                                    )
                                }}
                            >Заложить</Button>
                            :
                            <Button
                                danger
                                type="primary"
                                className={`popover__button`}
                                onClick={() => {
                                    props.action(
                                        "SellHouse",
                                        {
                                            realtyCard: props.card
                                        }
                                    )
                                }}
                            >-Дом</Button>
                    }
                </>
            }
        </div>
    )
}