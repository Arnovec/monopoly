import React from 'react';
import FieldPopover from '../FieldPopover';

export default function AngelContent(props) {

    return (
        <>
            <div>
                <img className='angel_img' src={`./img/${props.map.img}`}/>
            </div> 
        </>
    )
}