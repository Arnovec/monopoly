import { Popover } from "antd";
import React from "react";
import PlayersContainer from "./PlayersContainer";

export default function FieldPopover(props) {


    return (
        <div className={`popover popover_${props.direction}`}>
            <h3 className="popover_title">{props.streeatName} {props.position}</h3>
            <p className="popover_rent">Рента с участка {props.priceMap[0]}</p>
            <p className="popover_rent">С 1 домом: {props.priceMap[1]}</p>
            <p className="popover_rent">С 2 домами: {props.priceMap[2]}</p>
            <p className="popover_rent">С 3 домами: {props.priceMap[3]}</p>
            <p className="popover_rent">С 4 домами: {props.priceMap[4]}</p>
            <p className="popover_rent">С ОТЕЛЕМ: {props.priceMap[5]}</p>
            <button
                // onClick={ ()=> {
                //     props.action(
                //         "BuyRealty",
                //         {player: props.player, realty: props.realty}
                //     )
                // }}
            >купить</button>
        </div>
    )
}