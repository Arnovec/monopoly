import React from "react";

export default function PlayerFigure(props) {
    const houses = [];
    if(props.countHouse > 0){
        if(props.countHouse < 5){
            for(let i = 0; i < props.countHouse; i++){
                houses.push(<img className="house" src={`./img/house.png`}/>);
            }
        } else {
            houses.push(<img className="hotel" src={`./img/hotel.png`}/>);
        }
    }

    return (
        <div className="house_container">
            {houses}
        </div>
    )
}