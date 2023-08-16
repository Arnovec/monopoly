import { Button } from 'antd';
import React, { useEffect, useState } from 'react';

export default function Dices(props){
    const rotation = [
    { x: 0, y: 0 }, // 0
    { x: 0, y: 270 }, // 1
    { x: 0, y: 180 }, // 2    
    { x: 0, y: 90 }, // 3        
    { x: 270, y: 0 }, // 4
    { x: 90, y: 0 }, // 5
    { x: 90, y: 0 }, // 6    
    ];


    let count = 0;

    const [rx1, setRX1] = useState(0);
    const [ry1, setRY1] = useState(0);
    const [rx2, setRX2] = useState(0);
    const [ry2, setRY2] = useState(0);

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    useEffect(
        () => {
            setRX1(rotation[n1].x);
            setRY1(rotation[n1].y);
            setRX2(rotation[n2].x);
            setRY2(rotation[n2].y);
        }
    , [n1,n2]);
    
    return(
        <div className="stage">
            {props.actions.includes('DropDice') ? 
            <Button
            className="action_button"
            type="primary"
            danger={false}
            key="DropDice"
            onClick={async () => {
                count = 0;

                let timer1 = setInterval(() => {
                    setN1(getRandom(0,6));
                    setN2(getRandom(0,6));
                    count++;
                }, 200);

                let res = await props.action("DropDice");
                let timer2 = setInterval(() => {
                    if (count >= 5) {
                        clearInterval(timer1);
                        clearInterval(timer2);
                        setN1(res.data.actionBody.player.lastRoll[0]-1);
                        setN2(res.data.actionBody.player.lastRoll[1]-1);
                        return;
                    }
                }, 200)
                
            }}
        >
            Бросить кубики
        </Button>    
        : <></>} 
            <div className='actionButton'></div>
            <div className="group g2">
                <div className="dice d3" style={{ transform: `rotateX(${rx1}deg) rotateY(${ry1}deg)` }}>
                    <div className="face num-1"><img src='./img/1.jpg'></img></div>
                    <div className="face num-2"><img src='./img/2.jpg'></img></div>
                    <div className="face num-3"><img src='./img/3.jpg'></img></div>
                    <div className="face num-4"><img src='./img/4.jpg'></img></div>
                    <div className="face num-5"><img src='./img/5.jpg'></img></div>             
                    <div className="face num-6"><img src='./img/6.jpg'></img></div>
                </div>
                <div className="dice d4" style={{ transform: `rotateX(${rx2}deg) rotateY(${ry2}deg)` }}>
                    <div className="face num-1"><img src='./img/1.jpg'></img></div>
                    <div className="face num-2"><img src='./img/2.jpg'></img></div>
                    <div className="face num-3"><img src='./img/3.jpg'></img></div>
                    <div className="face num-4"><img src='./img/4.jpg'></img></div>
                    <div className="face num-5"><img src='./img/5.jpg'></img></div>             
                    <div className="face num-6"><img src='./img/6.jpg'></img></div>
                </div>   
            </div>
        </div>
    )
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}