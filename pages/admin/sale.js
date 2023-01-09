import { DollarOutlined } from '@ant-design/icons';
import { Layout, Row, Col, Card, Button, List, Table } from 'antd';
import { ChartCustom } from 'component/Chart';
import AdminLayout from 'layouts/AdminLayout';

function Sale() {
  const weightLine = [
    1000000, 1230000, 1495000, 1594000, 1678000, 1799000, 1923000, 2012000, 2222000, 2375000,
    3500000, 4000000,
  ];

  const labelsLine = [
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

  const dataLine = {
    labels: labelsLine,
    datasets: [
      {
        backgroundColor: '#85C240',
        label: 'Doanh thu các tháng năm 2022',
        data: weightLine,
        borderWidth: 2,
        borderColor: '#198754',
        lineTension: 0.2,
        pointBackgroundColor: '#198754',
        pointRadius: 3,
      },
    ],
  };

  const listSales = [
    {
      id: 1,
      title: 'Tài khoản nam08102003 đặt sân thành công',
      value: 200000,
      isAdd: true,
      time: '22-12-2022',
    },
    {
      id: 2,
      title: 'Tài khoản nam08102003 đặt sân thành công',
      value: 200000,
      isAdd: false,
      time: '22-12-2022',
    },
    {
      id: 3,
      title: 'Tài khoản nam08102003 đặt sân thành công',
      value: 200000,
      isAdd: true,
      time: '22-12-2022',
    },
    {
      id: 4,
      title: 'Tài khoản nam08102003 đặt sân thành công',
      value: 200000,
      isAdd: false,
      time: '22-12-2022',
    },
  ];

  const colunms = [
    {
      title: 'Tên người đặt',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (text) => <a href="/admin/dashboard">{text}</a>,
    },
    {
      title: 'Sân đã đặt',
      dataIndex: 'pitch',
      width: 230,
      key: 'pitch',
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '',
      dataIndex: 'options',
      key: 'options',
      render: () => (
        <div>
          <Button type="primary" style={{ margin: '0 5px' }}>
            Xem
          </Button>
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
          <Button style={{ background: '#85C240', margin: '0 5px', color: '#fff' }}>Xuất</Button>
        </div>
      ),
    },
  ];

  const dataBills = [
    {
      name: 'nam08102003',
      pitch: 'Sân bóng thượng đình',
      price: '200000',
    },
    {
      name: 'nam08102003',
      pitch: 'Sân bóng thượng đình',
      price: '200000',
    },
    {
      name: 'nam08102003',
      pitch: 'Sân bóng thượng đình',
      price: '200000',
    },
    {
      name: 'nam08102003',
      pitch: 'Sân bóng thượng đình',
      price: '200000',
    },
    {
      name: 'nam08102003',
      pitch: 'Sân bóng thượng đình',
      price: '200000',
    },
  ];

  const columnsSale = [
    {
      title: 'Tên sân',
      dataIndex: 'title',
      key: 'title',
      width: 350,
      render: (text) => <a href="/admin/dashboard">{text}</a>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Số lượt đặt sân',
      dataIndex: 'countOffer',
      key: 'countOffer',
    },
    {
      title: 'Tổng doanh thu',
      dataIndex: 'sales',
      key: 'sales',
    },
    {
      title: '',
      dataIndex: 'options',
      key: 'options',
      render: () => (
        <div>
          <Button type="primary" style={{ margin: '0 5px' }}>
            Xem
          </Button>
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

  const dataSales = [
    {
      title: 'Sân bóng Thượng Đình',
      address: 'Thượng Đình Thanh Xuân',
      countOffer: '50',
      sales: '30500000',
    },
    {
      title: 'Sân bóng Thượng Đình',
      address: 'Thượng Đình Thanh Xuân',
      countOffer: '50',
      sales: '30500000',
    },
    {
      title: 'Sân bóng Thượng Đình',
      address: 'Thượng Đình Thanh Xuân',
      countOffer: '50',
      sales: '30500000',
    },
    {
      title: 'Sân bóng Thượng Đình',
      address: 'Thượng Đình Thanh Xuân',
      countOffer: '50',
      sales: '30500000',
    },
    {
      title: 'Sân bóng Thượng Đình',
      address: 'Thượng Đình Thanh Xuân',
      countOffer: '50',
      sales: '30500000',
    },
    {
      title: 'Sân bóng Thượng Đình',
      address: 'Thượng Đình Thanh Xuân',
      countOffer: '50',
      sales: '30500000',
    },
  ];

  return (
    <AdminLayout title="Doanh thu" breadName="Doanh thu">
      <Layout style={{ paddingInline: '20px' }}>
        <Row gutter={16}>
          <Col span={6}>
            <Card className="card-item">
              <div className="card-body">
                <div className="content-card">
                  <h4>Doanh thu hôm nay</h4>
                  <h5>
                    2000k
                    <span>+30%</span>
                  </h5>
                </div>
                <div className="icon-card">
                  <DollarOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="card-item">
              <div className="card-body">
                <div className="content-card">
                  <h4>Doanh thu hôm qua</h4>
                  <h5>
                    2000k
                    <span>+30%</span>
                  </h5>
                </div>
                <div className="icon-card">
                  <DollarOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="card-item">
              <div className="card-body">
                <div className="content-card">
                  <h4>Doanh thu tháng</h4>
                  <h5>
                    2000k
                    <span>+30%</span>
                  </h5>
                </div>
                <div className="icon-card">
                  <DollarOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card className="card-item">
              <div className="card-body">
                <div className="content-card">
                  <h4>Doanh thu năm</h4>
                  <h5>
                    2000k
                    <span>+30%</span>
                  </h5>
                </div>
                <div className="icon-card">
                  <DollarOutlined />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={16}>
            <div className="box-item">
              <ChartCustom dataChart={dataLine} type="line" />
            </div>
          </Col>
          <Col span={8}>
            <div className="box-item">
              <Row gutter={16} align="middle">
                <Col span={12}>
                  <h4 style={{ fontSize: '1.2rem' }}>Lịch sử doanh thu</h4>
                </Col>
                <Col span={7} offset={5}>
                  <Button type="primary">Xem tất cả</Button>
                </Col>
              </Row>
              <Row style={{ marginTop: '10px' }}>
                <List
                  itemLayout="horizontal"
                  dataSource={listSales}
                  renderItem={(item) => {
                    return (
                      <List.Item key={item.id}>
                        <Row gutter={16}>
                          <Col span={16}>
                            <h5 style={{ fontSize: '1rem' }}>{item.title}</h5>
                            <p style={{ color: '#909192' }}>{item.time}</p>
                          </Col>
                          <Col span={3} offset={3}>
                            <p
                              style={{
                                color: `${item?.isAdd ? '#85C240' : '#f5222d'}`,
                                fontWeight: 'bold',
                              }}
                            >
                              {item?.isAdd ? `+${item.value}` : `-${item.value}`}
                            </p>
                          </Col>
                        </Row>
                      </List.Item>
                    );
                  }}
                />
              </Row>
            </div>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={16}>
            <div className="box-item">
              <Row gutter={16} align="middle">
                <Col span={12}>
                  <h4 style={{ fontSize: '1.2rem' }}>Danh sách hóa đơn</h4>
                </Col>
                <Col span={5} offset={7}>
                  <Button type="primary">Xem tất cả</Button>
                </Col>
              </Row>
              <Row>
                <Table columns={colunms} dataSource={dataBills} size="small" />
              </Row>
            </div>
          </Col>
          <Col span={8}>
            <div className="box-item">
              <Row gutter={16} align="middle">
                <Col span={12}>
                  <h4 style={{ fontSize: '1.2rem' }}>Giao dịch của bạn</h4>
                </Col>
                <Col span={7} offset={5}>
                  <Button type="primary">Xem tất cả</Button>
                </Col>
              </Row>
              <Row style={{ marginTop: '10px' }}>
                <Col span={24}>
                  <h5 style={{ fontSize: '1rem', color: '#909192' }}>Gần đây</h5>
                  <List
                    itemLayout="horizontal"
                    dataSource={listSales.slice(2)}
                    renderItem={(item) => {
                      return (
                        <List.Item key={item.id}>
                          <Row gutter={16}>
                            <Col span={16}>
                              <h5 style={{ fontSize: '1rem' }}>{item.title}</h5>
                              <p style={{ color: '#909192' }}>{item.time}</p>
                            </Col>
                            <Col span={3} offset={3}>
                              <p
                                style={{
                                  color: `${item?.isAdd ? '#85C240' : '#f5222d'}`,
                                  fontWeight: 'bold',
                                }}
                              >
                                {item?.isAdd ? `+${item.value}` : `-${item.value}`}
                              </p>
                            </Col>
                          </Row>
                        </List.Item>
                      );
                    }}
                  />
                </Col>
                <Col span={24}>
                  <h5 style={{ fontSize: '1rem', color: '#909192' }}>Hôm qua</h5>
                  <List
                    itemLayout="horizontal"
                    dataSource={listSales.slice(2)}
                    renderItem={(item) => {
                      return (
                        <List.Item key={item.id}>
                          <Row gutter={16}>
                            <Col span={16}>
                              <h5 style={{ fontSize: '1rem' }}>{item.title}</h5>
                              <p style={{ color: '#909192' }}>{item.time}</p>
                            </Col>
                            <Col span={3} offset={3}>
                              <p
                                style={{
                                  color: `${item?.isAdd ? '#85C240' : '#f5222d'}`,
                                  fontWeight: 'bold',
                                }}
                              >
                                {item?.isAdd ? `+${item.value}` : `-${item.value}`}
                              </p>
                            </Col>
                          </Row>
                        </List.Item>
                      );
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <div className="box-item">
              <h4>Doanh thu các sân</h4>
              <Table columns={columnsSale} dataSource={dataSales} size="large" />
            </div>
          </Col>
        </Row>
      </Layout>
    </AdminLayout>
  );
}

export default Sale;
