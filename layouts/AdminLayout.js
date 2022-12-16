import React from 'react';
import { Layout, Menu } from 'antd';
import Head from 'next/head';

const { Header, Sider, Footer, Content } = Layout;

function AdminLayout({ title, children }) {
  const listMenu = ['dashboard', 'table', 'admin'];
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Sider>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            theme="dark"
            style={{
              height: '100%',
            }}
            items={listMenu}
          />
        </Sider>
        <Layout>
          <Header>
            <h1>Header</h1>
          </Header>
          <Content>{children}</Content>
          <Footer>
            <h1>Footer</h1>
          </Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}

export default AdminLayout;
