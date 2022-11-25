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
                <Button type="primary" className={`popover__button`}>Выкупить</Button>
                :
                <>
                    <Button type="primary" className={`popover__button`}>+Дом</Button>
                    {props.card.countHouse == 0 ?
                        <Button danger type="primary" className={`popover__button`}>Заложить</Button>
                        :
                        <Button danger type="primary" className={`popover__button`}>-Дом</Button>
                    }
                </>
            }
        </div>
    )
}