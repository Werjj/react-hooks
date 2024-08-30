/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";
import { Button } from "antd";


const Index: React.FC<any> = () => {
    const [flag, setFlag] = useState(true);

    const usePow = (list: number[]) => {
        return useMemo(
            () =>
                list.map((item: number) => {
                    console.log(1);
                    return Math.pow(item, 2);
                }),
            // eslint-disable-next-line react-hooks/exhaustive-deps
            []
        );
    };

    const data = usePow([1, 2, 3]);

    return (
        <>
            <div>数字集合：{JSON.stringify(data)}</div>
            <Button type="primary" onClick={() => setFlag((v) => !v)}>
                状态切换{JSON.stringify(flag)}
            </Button>
        </>
    );
};

export default Index;