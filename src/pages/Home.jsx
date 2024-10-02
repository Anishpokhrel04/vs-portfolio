import React, { useState } from "react";
import { Layout } from "antd";
import Navbar from "../layout/Navbar";
import SmallSidebar from "../layout/SmallSidebar";
import SideBar from "../layout/SideBar";
import { Outlet } from "react-router-dom";
import Footers from "../layout/Footer";

const { Header, Footer, Content } = Layout;

const AppLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev); // Toggle sidebar visibility
  };

  return (
    <Layout className="h-screen">
      <Header className="bg-bg-color h-10 fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </Header>

      <Layout style={{ flexDirection: "row", paddingTop: "40px" }}>
        <aside>
          <SmallSidebar onToggleSidebar={toggleSidebar} />
        </aside>
        <Layout style={{ flex: 1, flexDirection: "row", overflow: "hidden" }}>
          {isSidebarVisible && (
            <aside className="sidebar-transition">
              <SideBar />
            </aside>
          )}
          <Layout
            style={{
              flex: 1,
              overflowY: "auto",
              height: "calc(100vh - 40px)", // Account for header height
            }}
          >
            <Content
              className="bg-bg-sidebar p-8"
              style={{ overflowY: "auto" }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
      <Footer className="bg-bg-color p-0 m-0">
        <Footers />
      </Footer>
    </Layout>
  );
};

export default AppLayout;
