import { Layout, Row, Col, Button, Table, Badge } from 'antd';
import { ChartCustom } from 'component/Chart';
import AdminLayout from 'layouts/AdminLayout';

function Owners() {
  const weights = [1000, 1230, 1495, 1594, 1678, 1799, 1923, 2012, 2222, 2375, 3500, 4000];
  const labels = [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ];

  const dataChart = {
    labels,
    datasets: [
      {
        backgroundColor: '#85C240',
        label: 'Số lượng chủ sân',
        data: weights,
        fill: true,
        borderWidth: 2,
        borderColor: '#198754',
        lineTension: 0.2,
        pointBackgroundColor: '#198754',
        pointRadius: 3,
      },
    ],
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'idNumber',
      key: 'idNumber',
      width: 50,
    },
    {
      title: 'Tên tài khoản',
      dataIndex: 'username',
      key: 'username',
      width: 250,
      render: (text) => <a href="/">{text}</a>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'timeCreate',
      key: 'timeCreate',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text) => (
        <Badge status={text ? 'success' : 'default'} text={text ? 'Online' : 'Offline'} />
      ),
    },
    {
      title: '',
      dataIndex: 'options',
      key: 'options',
      render: () => (
        <div>
          <Button
            style={{
              margin: '0 5px',
              background: '#ff4d4f',
              color: '#fff',
              borderColor: '#ff4d4f',
            }}
          >
            Xóa
          </Button>
          <Button style={{ margin: '0 5px' }}>Sửa</Button>
        </div>
      ),
    },
  ];

  const dataOwners = [
    {
      idNumber: '1',
      username: 'nam08102003',
      phone: '0372891735',
      address: 'Nguyễn Trãi Thanh Xuân',
      timeCreate: '22-1-2022',
      status: true,
    },
    {
      idNumber: '2',
      username: 'nam08102003',
      phone: '0372891735',
      address: 'Nguyễn Trãi Thanh Xuân',
      timeCreate: '22-1-2022',
      status: true,
    },
    {
      idNumber: '3',
      username: 'nam08102003',
      phone: '0372891735',
      address: 'Nguyễn Trãi Thanh Xuân',
      timeCreate: '22-1-2022',
      status: false,
    },
    {
      idNumber: '4',
      username: 'nam08102003',
      phone: '0372891735',
      address: 'Nguyễn Trãi Thanh Xuân',
      timeCreate: '22-1-2022',
      status: true,
    },
    {
      idNumber: '5',
      username: 'nam08102003',
      phone: '0372891735',
      address: 'Nguyễn Trãi Thanh Xuân',
      timeCreate: '22-1-2022',
      status: false,
    },
  ];
  return (
    <AdminLayout title="Chủ sân" breadName="Chủ sân">
      <Layout style={{ paddingInline: '20px' }}>
        <Row>
          <Col span={24}>
            <div className="box-item">
              <h4>Số lượng chủ sân</h4>
              <ChartCustom dataChart={dataChart} type="bar" />
            </div>
          </Col>
        </Row>
        <Row className="box-item" style={{ marginTop: '20px' }}>
          <Col span={12}>
            <h4>Danh sách chủ sân: 5 chủ sân</h4>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button type="primary">Thêm chủ sân</Button>
          </Col>
          <Col span={24}>
            <Table columns={columns} dataSource={dataOwners} style={{ width: '100%' }} />
          </Col>
        </Row>
      </Layout>
    </AdminLayout>
  );
}

export default Owners;
