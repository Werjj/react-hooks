/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import { Button } from "antd";

const HOC = (Component: any) => (props: any) => {
    return (
        <Component
            name={"一起玩转Hooks吧"}
            {...props}
        ></Component>
    );
};

const Index: React.FC<any> = (props) => {
    const [flag, setFlag] = useState<boolean>(false);

    return (
        <div>
            <Button type="primary" onClick={() => setFlag(true)}>
                获取props
            </Button>
            {flag && <div>{JSON.stringify(props)}</div>}
        </div>
    );
};

export default HOC(Index);