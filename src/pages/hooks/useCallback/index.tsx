/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, memo } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(true);

    const add = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <>
            <TestButton onClick={() => setCount((v) => v + 1)}>普通点击</TestButton>
            <TestButton onClick={add}>useCallback点击</TestButton>
            <div>数字：{count}</div>
            <Button type="primary" onClick={() => setFlag((v) => !v)}>
                切换{JSON.stringify(flag)}
            </Button>
        </>
    );
};

const TestButton: React.FC<any> = memo((props) => {
    console.log(props.children);
    return (
        <Button type="primary" onClick={props.onClick}
            style={props.children === "useCallback点击" ? { marginLeft: 10 } : undefined}
        >
            {props.children}
        </Button>
    )
})

export default Index;
