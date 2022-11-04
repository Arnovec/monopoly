import React, { useEffect, useState } from "react";
import FieldPopover from "./FieldPopover";
import ImgContent from "./ImgContent";
import PlayersContainer from "./PlayersContainer";
import StreetContent from "./StreetContent";
const sieds = ["left", "right"]
const placeFieldIds = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39];
const FieldWithImgIds = [2, 4, 5, 7, 12, 15, 17, 22, 25, 28, 33, 35, 36, 38];

export default function Field(props) {
    let content = <></>
    if(placeFieldIds.includes(props.position)){
        content = <StreetContent  name={`${props.streeatName} ${props.position}`} cost={props.costCard} />;
    } else if(FieldWithImgIds.includes(props.position)){
        content = <ImgContent  name={`${props.streeatName} ${props.position}`} cost={props.costCard} />;
    } else {
        console.log("Ошибка с полями: тип элемента");
    }

    return (
        <div
            className={`field ${sieds.includes(props.direction) ? 'field_side' : ''}`}
            onClick={() => {
                props.showPopover(props.position);
            }}
            style={{
                zIndex: props.isShowPopover ? 100 : 10
            }}
        >
            <div className={`${sieds.includes(props.direction) ? props.direction : ''} field_content`}>
                {content}
            </div>
            <PlayersContainer {...props} />
            {props.isShowPopover ? <FieldPopover {...props} /> : <></>}
        </div>
    )
}