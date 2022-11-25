import React from "react";
import PopoverButtons from "./PopoverButtons";

export default function FieldPopover(props) {
    console.log("popover props", props)
    let priceColumn = [];

    for (const key in props.card.priceMap) {
        let text = "";
        if (key == -1) {
            
            continue;
        }
        if (props.card.type === "realty") {
            if (key == 0) {
                text = `Рента с участка ${props.card.priceMap[key]}`;
            } else if (key == 5) {
                text = `C ОТЕЛЕМ: ${props.card.priceMap[key]}`;
            } else {
                text = `С ${key} `;
                text += key == 1 ? "домом" : "домами";
                text += `: ${props.card.priceMap[key]}`;
            }
        } else {
            if (key == 1) {
                text = `Рента с участка ${props.card.priceMap[key]}`;
            } else {
                text = `С ${key} карточками: ${props.card.priceMap[key]}`;
            }
        }
        priceColumn.push(
            <p
                key={`${props.card.position} card price ${key}`}
                className={`popover_rent${props.card.countHouse == key ? " popover_rent__current" : ""}`}
            >{text}
            </p>
        )
    }

    return (
        <div className={`popover`}>
            <h2 className="popover_title">{props.card.cardName}</h2>
            {props.card.owner !== "" ?
                <p className="popover_owner">Владелец: {props.card.owner}</p>
                :
                <></>
            }
            {priceColumn}
            {props.currentPlayer.playerFigure == props.card.owner ?
                <PopoverButtons {...props} />
                :
                <></>
            }
        </div>
    )
}