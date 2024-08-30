/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "antd";

const Index: React.FC<any> = () => {
    const [state, setState] = useState({ number: 0 });
    // eslint-disable-next-line prefer-const
    let [count, setCount] = useState(0);

    return (
        <>
            <div>数字形式：{count}</div>
            <Button
                type="primary"
                onClick={() => {
                    count++;
                    setCount(count);
                }}
            >
                点击+1
            </Button>
            <div>对象形式：{state.number}</div>
            <Button
                type="primary"
                onClick={() => {
                    state.number++;
                    setState(state);
                }}
            >
                错误点击+1
            </Button>
            <Button
                type="primary"
                onClick={() => {
                    setState({ ...state, number: state.number + 1 });
                }}
            >
                正确点击+1
            </Button>
        </>
    );
};

export default Index;