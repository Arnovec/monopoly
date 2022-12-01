import { Button, Popover, Space } from "antd";
import React, { useEffect, useState } from "react";
import './style.css';

export default function SadActions(props) {
    return (
        <Space className="sad_actions_container">
            <Popover placement={"top"} content={
                <Space>
                    <Button
                        type="primary"
                        danger
                        size="large"
                        shape="round" 
                        onClick={()=>{
                            props.action("GiveUp")
                        }}
                    >Сдаться</Button>
                    <Button
                        type="primary"
                        danger
                        size="large"
                        shape="round" 
                        onClick={()=>{
                            props.action("EndGame") //не действие, отдельная функция
                        }}
                    >Конец игры</Button>
                </Space>
            } trigger={`click`}>
                <Button
                    type="primary"
                    danger
                    size="large"
                    shape="circle"
                >😔</Button>
            </Popover>
        </Space>
    )
}