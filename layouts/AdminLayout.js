import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeFilled,
  SignalFilled,
  TrophyFilled,
  SwitcherFilled,
  SlidersFilled,
} from '@ant-design/icons';
import Head from 'next/head';
import { useRouter } from 'next/router';

const { Header, Sider, Footer, Content } = Layout;

const { SubMenu, Item } = Menu;

function AdminLayout({ title, children }) {
  const router = useRouter();
  const adminMenu = [
    {
      id: 1,
      label: 'Bảng điều khiển',
      children: null,
      key: 'dashboard',
      type: '',
      icon: <HomeFilled />,
    },
    {
      id: 2,
      label: 'Thương mại',
      key: 'ecommerce',
      children: null,
      type: '',
      icon: <SignalFilled />,
    },
    {
      id: 3,
      label: 'Sân bóng',
      key: 'pitchs',
      children: null,
      type: '',
      icon: <TrophyFilled />,
    },
    {
      id: 4,
      label: 'Tin tức',
      key: 'blogs',
      children: null,
      type: '',
      icon: <SwitcherFilled />,
    },
    {
      id: 5,
      label: 'Quản lý tài khoản',
      key: '',
      children: [
        { label: 'Người dùng', key: 'users' },
        { label: 'Nhân viên', key: 'employees' },
        { label: 'Chủ sân', key: 'owners' },
      ],
      type: 'group',
      icon: '',
    },
    {
      id: 6,
      label: 'Quảng cáo',
      key: 'advertisment',
      children: null,
      type: '',
      icon: <SlidersFilled />,
    },
    {
      id: 7,
      label: 'Đăng nhập',
      key: 'login',
      children: null,
      type: '',
      icon: '',
    },
    {
      id: 8,
      label: 'Đăng xuất',
      key: 'logout',
      children: null,
      type: '',
      icon: '',
    },
  ];
  const handleClick = (e) => {
    const urlSlug = e.key;
    if (urlSlug === 'logout') {
      console.log('Logout Success');
    } else {
      router.push(`layoutadmin/${urlSlug}`);
    }
  };
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Sider
          style={{
            height: '100%',
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            theme="light"
            style={{
              height: '100%',
            }}
            items={adminMenu}
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
