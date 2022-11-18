import { Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import Realty from './Realty';
const { Text } = Typography;

export default function Player(props) {
    return (
        <Space direction="horizontal">
            <Text>{props.playerFigure}</Text>
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
        </Space>
    )
}