import React, { useEffect, useState } from "react";
import FieldPopover from "./FieldPopover";
import PlayersContainer from "./PlayersContainer";
import ImgContent from "./Content/ImgContent";
import StreetContent from "./Content/StreetContent";
import AngelContent from "./Content/AngelContent";
import { Popover } from "antd";
const sieds = ["left", "right"];
const placeFieldIds = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39];
const FieldWithImgIds = [2, 4, 5, 7, 12, 15, 17, 22, 25, 28, 33, 35, 36, 38];

export default function Field(props) {
    let content = <></>
    let fieldClassName = "field";
    if (sieds.includes(props.direction)) {
        fieldClassName += " field_side";
    }
    if (props.card.type == "realty") {
        content = <StreetContent {...props.card} />;
    } else if (props.card.type == "img") {
        content = <ImgContent {...props.card} />;
    } else if (props.card.type == "angel") {
        content = <AngelContent {...props.card} />
        fieldClassName += " field_angel";
    } else {
        console.log("Ошибка с полями: тип элемента");
    }

    return (
        <Popover placement={props.direction} content={<FieldPopover {...props} />} trigger={props.isPopover ? `click` : "none"}>
            <div
                className={fieldClassName}
            >
                <div className={`${sieds.includes(props.direction) ? props.direction : ''} field_content`}>
                    {content}
                </div>
                <PlayersContainer {...props} />
            </div>
        </Popover>
    )
}