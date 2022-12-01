import { Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import Realty from './Realty';
const { Text } = Typography;

export default function Player(props) {
    return (
        <div className='swap_realtys_row'>
            <Text style={{width: 90}}>{props.playerFigure}</Text>
            <div className='swap_realtys_row'>
            {props.realtyList.map(realty => {
                let isFind = props.choosenRealty.find(choosenRealty_ => choosenRealty_.position === realty.position);
                isFind = isFind === undefined ? false : true;
                
                return (
                    <Realty
                        onClick={() => { 
                            if(isFind){
                                props.setChoosenRealty(props.choosenRealty.filter(choosenRealty_ =>  choosenRealty_.position !== realty.position))
                            } else {
                                props.setChoosenRealty([...props.choosenRealty,realty]);
                            }
                        }}
                        isFind={isFind}
                        key={`swap ${realty.streeatName}`}
                        {...realty}
                    />
                );
            })}
            </div>
        </div>
    )
}