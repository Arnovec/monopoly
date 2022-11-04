import React from "react";

export default function ImgContent(props) {
    return(
        <>
            <div className="field_with_img">
                <p className="name">{props.name}</p>
                <div className="field_img_container">
                    <img className="field_img" />
                </div>
                <p className="cost">{props.cost}</p>
            </div>
        </>
    )
}