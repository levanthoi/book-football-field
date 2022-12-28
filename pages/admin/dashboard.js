import {
  DollarOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { Card, Row, Col, Layout, Timeline, Table } from 'antd';
import { ChartCustom } from 'component/Chart';
import { dataContract, columns, dataTimeline } from 'data/data';
import AdminLayout from 'layouts/AdminLayout';
import styles from 'static/scss/pages/dashboard.module.scss';

function Dashboard() {
  const weightBar = [1000, 1230, 1495, 1594, 1678, 1799, 1923, 2012, 2222, 2375, 3500, 4000];

  const weightPie = [2634, 1489];

  const labelsBar = [
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

  const labelsPie = ['Người dùng đang hoạt động', 'Người dùng không hoạt động'];

  const dataBar = {
    labels: labelsBar,
    datasets: [
      {
        backgroundColor: '#85C240',
        label: 'Số lượng người dùng hoạt động',
        data: weightBar,
        fill: true,
        borderWidth: 2,
        borderColor: '#198754',
        lineTension: 0.2,
        pointBackgroundColor: '#198754',
        pointRadius: 3,
      },
    ],
  };

  const dataPie = {
    labels: labelsPie,
    datasets: [
      {
        backgroundColor: ['#85C240', 'rgb(255, 99, 132)'],
        label: 'Số lượng người dùng đang hoạt động',
        data: weightPie,
        hoverOffset: 4,
      },
    ],
  };
  return (
    <AdminLayout title="Dashboard" breadName="Bảng điều khiển">
      <Layout className={styles.layout_content}>
        <Row align="middle" gutter={16} className={styles.list_card}>
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
                  <h4>Người dùng hôm nay</h4>
                  <h5>
                    3,000
                    <span>+10%</span>
                  </h5>
                </div>
                <div className="icon-card">
                  <UserOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} className="card-item">
            <Card>
              <div className="card-body">
                <div className="content-card">
                  <h4>Người dùng mới</h4>
                  <h5>
                    1,200
                    <span>+10%</span>
                  </h5>
                </div>
                <div className="icon-card">
                  <UsergroupAddOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} className="card-item">
            <Card>
              <div className="card-body">
                <div className="content-card">
                  <h4>Số lượng đặt sân</h4>
                  <h5>
                    30 Lần
                    <span>+5%</span>
                  </h5>
                </div>
                <div className="icon-card">
                  <ShopOutlined />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row align="middle" gutter={16}>
          <Col span={8}>
            <ChartCustom dataChart={dataPie} type="pie" />
          </Col>
          <Col span={16}>
            <ChartCustom dataChart={dataBar} type="bar" />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '30px' }}>
          <Col span={16}>
            <div className="box-item">
              <h3 className={styles.title_box}>Danh sách hợp đồng</h3>
              <Table columns={columns} dataSource={dataContract} />
            </div>
          </Col>
          <Col span={8}>
            <div className="box-item">
              <h3 className={styles.title_box}>Lịch sử hoạt động</h3>
              <Timeline>
                {dataTimeline?.map((timeline) => {
                  return (
                    <Timeline.Item key={timeline.id} color={timeline.color}>
                      {timeline.title}
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </div>
          </Col>
        </Row>
      </Layout>
    </AdminLayout>
  );
}

export default Dashboard;
