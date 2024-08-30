import React from "react";
import {
    BorderlessTableOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Content, Sider } = Layout;


const basicItems: MenuProps["items"] = [
    {
        key: `sub1`,
        icon: React.createElement(BorderlessTableOutlined),
        label: `React组件的通信和强化方式`,
        children: [{
            key: '1',
            label: `父传子`,
        }, {
            key: '2',
            label: `子传父`,
        },
        {
            key: '3',
            label: `context方式`,
        },
        {
            key: '4',
            label: `extends继承模式`,
        },
        {
            key: '5',
            label: `高阶组件HOC模式`,
        }]
    },
    {
        key: `sub2`,
        icon: React.createElement(BorderlessTableOutlined),
        label: `React V16 Hooks`,
        children: [{
            key: '6',
            label: `useState`,
        }, {
            key: '7',
            label: `useEffect`,
        },
        {
            key: '8',
            label: `useContext`,
        },
        {
            key: '9',
            label: `useReducer`,
        },
        {
            key: '10',
            label: `useMemo`,
        },
        {
            key: '11',
            label: `useCallback`,
        },
        {
            key: '12',
            label: `useRef`,
        }]
    }
]

const BasicLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    const location = useLocation();
    const activeKey = location.pathname.split('/').pop() as string;

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    };

    return (<>
        <Content style={{ padding: "0 48px" }}>
            <Layout
                style={{
                    padding: "24px 0",
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Sider style={{ background: colorBgContainer }} width={280}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[activeKey]}
                        selectedKeys={[activeKey]}
                        defaultOpenKeys={["sub1", "sub2"]}
                        style={{ height: "100%" }}
                        items={basicItems}
                        onClick={handleMenuClick}

                    />
                </Sider>
                <Content style={{ padding: "0 24px", minHeight: 580 }}>
                    {/* 二级路由出口 */}
                    <Outlet />
                </Content>
            </Layout>
        </Content>
    </>)
};

export default BasicLayout;