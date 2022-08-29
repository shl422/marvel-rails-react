import { Layout } from "antd";
import React from "react";
import Header from "./Header";
import Characters from "./Characters";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Marvel Characters</h1>
        <Characters />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>H.K. ©2022.</Footer>
  </Layout>
);