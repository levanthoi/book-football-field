import {
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
  StopOutlined,
  TrophyOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Button, Col, Image, Row, Space, Table, Tabs } from 'antd';
import useModal from 'hooks/useModal';
import AdminLayout from 'layouts/AdminLayout';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { formatNumber } from 'utils/utils';

const AddPitchModal = dynamic(() => import('component/ModalPage/AddPitchModal'), {
  ssr: false,
  loading: () => null,
});

function Pitchs() {
  // const { TabPane } = Tabs;
  const { isOpen, toggleOpen } = useModal();

  const data = [
    {
      key: '0',
      name: 'Sân bóng Đại học Thủy Lợi',
      typePitch: 'Sân 7',
      user: 'Nguyễn Văn A',
      time: '8:00 - 9:00 AM',
      deposit: '100000',
    },
    {
      key: '1',
      name: 'Sân bóng Đại học Bách Khoa Hà Nội - BKHN',
      typePitch: 'Sân 7',
      user: 'Nguyễn Văn A',
      time: '8:00 - 9:00 AM Thứ 7 ngày 30 tháng 12 năm 2022',
      deposit: '100000',
    },
  ];

  const columns1 = [
    {
      title: 'Sân bóng',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Loại sân',
      dataIndex: 'typePitch',
      key: 'typePitch',
    },
    {
      title: 'Người đặt',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'user',
    },
    {
      title: 'Đặt cọc',
      dataIndex: 'deposit',
      key: 'deposit',
      render: (text, record) => formatNumber(text),
    },
    {
      title: 'Tác vụ',
      dataIndex: '',
      key: '',
      render: (text, record) => (
        <Space wrap>
          <Button type="primary" danger>
            Từ chối
          </Button>
          <Button type="primary">Chấp nhận</Button>
        </Space>
      ),
    },
  ];

  const columns2 = [
    {
      dataIndex: null,
      title: 'STT',
      render: (text, record, index) => formatNumber(index),
    },
    {
      title: 'Loại sân',
      name: 'typePitch',
      dataIndex: 'typePitch',
    },
    {
      title: 'Thông tin sân',
      name: 'infoPitch',
      dataIndex: 'infoPitch',
      render: (text, record) => (
        <React.Fragment>
          <h5>{text.title}</h5>
          <p>Địa chỉ: {text.address}</p>
          <p>SĐT: {text?.phone}</p>
          <p>Email: {text?.email}</p>
        </React.Fragment>
      ),
    },
    {
      title: 'Ảnh đại diện',
      name: 'imagePitch',
      dataIndex: 'imagePitch',
      render: (text, record) => (
        <Image src={text} width={150} />
        // <div style={{ width: '120px', height: '110px' }}>
        //   <img src={text} alt="anh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        // </div>
      ),
    },
    {
      title: 'Tác vụ',
      dataIndex: '',
      key: '',
      render: (text, record) => (
        <div className="d-flex flex-column gap-2">
          <Button type="primary" icon={<TrophyOutlined />}>
            Đặt sân
          </Button>
          <Button icon={<EditOutlined />}>Sửa thông tin</Button>
          <Row gutter={16}>
            <Col span={12}>
              <Button type="primary" icon={<StopOutlined />} danger style={{ width: '100%' }}>
                Dừng
              </Button>
            </Col>
            <Col span={12}>
              <Button type="primary" icon={<DeleteOutlined />} danger style={{ width: '100%' }}>
                Xóa
              </Button>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  const data2 = [
    {
      key: '0',
      typePitch: 'Sân 7vs7',
      infoPitch: {
        title: 'Sân Đại học Thủy Lợi',
        address: '175 Tây Sơn, Đống Đa Hà Nội',
        phone: '039283821',
        email: 'thuyloi@tlu.edu.vn',
      },
      imagePitch:
        'https://chonthuonghieu.com/wp-content/uploads/listing-uploads/gallery/2021/03/san-bong-co-nhan-tao-dai-hoc-thuy-loi-540085.jpg',
    },
    {
      key: '1',
      typePitch: 'Sân 7vs7',
      infoPitch: {
        title: 'Sân Đại học Thủy Lợi',
        address: '175 Tây Sơn, Đống Đa Hà Nội',
        phone: '039283821',
        email: 'thuyloi@tlu.edu.vn',
      },
      imagePitch:
        'https://chonthuonghieu.com/wp-content/uploads/listing-uploads/gallery/2021/03/san-bong-co-nhan-tao-dai-hoc-thuy-loi-540085.jpg',
    },
  ];

  // items props Tabs Component
  const items = [
    {
      key: '1',
      label: (
        <span>
          <UnorderedListOutlined />
          Yêu cầu đặt sân
        </span>
      ),
      children: <Table columns={columns1} dataSource={data} />,
    },
    {
      key: '2',
      label: (
        <span>
          <UnorderedListOutlined />
          Danh sách sân
        </span>
      ),
      children: (
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button type="primary" icon={<PlusSquareOutlined />} onClick={toggleOpen}>
            Thêm sân mới
          </Button>
          <Table columns={columns2} dataSource={data2} />
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout title="Sân bóng" breadName="Sân bóng">
      {/* <Tabs defaultActiveKey="1">
        <TabPane tab="Yêu cầu đặt sân" key="1">
          <Table columns={columns1} dataSource={data} />
        </TabPane>
        <TabPane tab="Danh sách sân" key="2">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button type="primary" icon={<PlusSquareOutlined />} onClick={toggleOpen}>
              Thêm sân mới
            </Button>
            <Table columns={columns2} dataSource={data2} />
          </Space>
        </TabPane>
      </Tabs> */}
      <Tabs defaultActiveKey="1" items={items} />
      <AddPitchModal isOpen={isOpen} toggleOpen={toggleOpen} />
    </AdminLayout>
  );
}

export default Pitchs;
