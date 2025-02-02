/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext } from "react";
import { Checkbox, Button, Input } from "antd";

const ThemeContext: any = React.createContext(null);

//主题颜色
const theme = {
    dark: {
        color: "#5B8FF9",
        background: "#5B8FF9",
        border: "1px solid #5B8FF9",
        type: "dark",
        buttomType: "primary",
    },
    light: {
        color: "#E86452",
        background: "#E86452",
        border: "1px solid #E86452",
        type: "light",
        buttomType: "default",
    },
};

const ChildFC: React.FC<any> = () => {
    const themContext = useContext(ThemeContext);
    const { border, setTheme, color, buttomType }: any = themContext
    return (
        <div style={{ border, color, padding: 20 }}>
            <div>
                <span> 选择主题： </span>
                <CheckboxViewFC
                    label="主题1"
                    name="dark"
                    onChange={() => setTheme(theme.dark)}
                />
                <CheckboxViewFC
                    label="主题2"
                    name="light"
                    onChange={() => setTheme(theme.light)}
                />
            </div>
            <div style={{ color, marginTop: 8 }}>
                一起玩转Hooks吧！
            </div>
            <div style={{ marginTop: 8 }}>
                <Input
                    placeholder="请输入你的名字"
                    style={{ color, border, marginBottom: 10 }}
                />
                <Button type={buttomType}>提交</Button>
            </div>
        </div>
    );
}

const CheckboxViewFC: React.FC<any> = ({ label, name, onChange }) => {
    const themContext = useContext(ThemeContext);
    const { color, type }: any = themContext;
    return (
        <div
            style={{
                display: "inline-block",
                marginLeft: 10,
            }}
        >
            <Checkbox checked={type === name} style={{ color }} onChange={onChange}>
                {label}
            </Checkbox>
        </div>
    );
}


const Index: React.FC<any> = () => {
    const [themeContextValue, setThemeContext] = useState(theme.dark);

    return (
        <ThemeContext.Provider
            value={{ ...themeContextValue, setTheme: setThemeContext }}
        >
            <ChildFC />
        </ThemeContext.Provider>
    );
};

export default Index;
