import { Typography } from 'antd';
import React from 'react';
const {Text} = Typography;

export default function Realty(props) {
    return (
        <div onClick={props.onClick} className={`swap_realty ${props.isFind? "swap_realty_choosen" : ""}`} direction="vertical">
            <div className='swap_realty_color' style={{"backgroundColor" : props.color}}>
                
            </div>
            <Text className={`swap_realty_text`}>
                {props.cardName}
            </Text>
        </div>
    )
}