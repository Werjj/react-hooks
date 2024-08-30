import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';


const { Header, Footer } = Layout;

const navItems: MenuProps["items"] = [
  {
    key: "basic",
    label: "基础篇",
  },
  {
    key: "code",
    label: "源码篇",
  },
  {
    key: "practice",
    label: "实战篇",
  },
];



const AppLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeKey = location.pathname.split('/')[1];

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div
          className="demo-logo"
          style={{ color: "#ffffff", fontSize: 20, marginRight: "40px" }}
        >
          玩转React Hooks
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={navItems}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleMenuClick}
          selectedKeys={[activeKey]}
          defaultSelectedKeys={[activeKey]}
        />
      </Header>
      <div style={{ margin: "16px 0" }}></div>
      {/* 二级路由出口 */}
      <Outlet />
      <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default AppLayout;
