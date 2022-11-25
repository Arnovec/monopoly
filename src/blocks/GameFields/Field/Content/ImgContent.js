import React from "react";
import FieldPopover from "../FieldPopover";

export default function ImgContent(props) {
    return (
        <>
            <div
                className="field_with_img"
            >
                <p className="name">{props.cardName}</p>
                <div className="field_img_container">
                    <img className="field_img" src={`./img/${props.img}`}/>
                </div>
                <p className="cost">{props.costCard}</p>
            </div>
        </>
    )
}