import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import useAuthenticationContext from "./Context/authenticationContext";
import Signup from "./Signup";
import Login from "./Login";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { token, loginReq, loginToken } = useAuthenticationContext();
  return (
    <Layout style={{ height: "auto", width: "100vw" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        ></Menu>
        
        <Link className="bg-orange-500 px-3 py-1  text-white" to="/">
            Home
          </Link>
        
        <br></br>
          <Link className="bg-orange-500 px-3 py-1  text-white" to="/add">
            Add Products
          </Link>
        <br></br>
      
          <Link className="bg-orange-500 px-3 py-1  text-white" to="/signup">
            Signup{" "}
          </Link>
        
        <br></br>
      
          <Link className="bg-orange-500 px-3 py-1  text-white" to="/login">
            Login{" "}
          </Link>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
           
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {loginToken ? <Outlet /> : <Login />}

          {loginReq ? <Login></Login> : <div></div>}

          {token || loginToken ? <div></div> : <Signup></Signup>}

          {token && <Outlet />}
        
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
