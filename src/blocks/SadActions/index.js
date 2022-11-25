import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import './style.css';

export default function SadActions(){
    return(
        <Space className="sad_actions_container">
            <Button
                type="primary"
                danger
                size="large"
                shape="circle"
            >?</Button>
        </Space>
    )
}