import React from "react";
import PopoverButtons from "./PopoverButtons";

export default function FieldPopover(props) {
    console.log("popover props",props)

    return (
        <div className={`popover`}>
            <h3 className="popover_title">{props.card.cardName} {props.card.position}</h3>
            <p className="popover_rent">Рента с участка {props.card.priceMap[0]}</p>
            <p className="popover_rent">С 1 домом: {props.card.priceMap[1]}</p>
            <p className="popover_rent">С 2 домами: {props.card.priceMap[2]}</p>
            <p className="popover_rent">С 3 домами: {props.card.priceMap[3]}</p>
            <p className="popover_rent">С 4 домами: {props.card.priceMap[4]}</p>
            <p className="popover_rent">С ОТЕЛЕМ: {props.card.priceMap[5]}</p>
            <PopoverButtons {...props}/>
        </div>
    )
}