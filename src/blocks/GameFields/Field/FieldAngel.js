import React from 'react';
import PlayersContainer from './PlayersContainer';

export default function Field(props){

    
    return(
        <div className="field field_angel">
            <PlayersContainer {...props}/>
        </div>
    )
}