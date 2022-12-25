import {
  DollarOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import { Card, Row, Col, Layout, Timeline, Table } from 'antd';
import Chart from 'chart.js/auto';
import AdminLayout from 'layouts/AdminLayout';
import React, { useRef, useEffect } from 'react';
import styles from 'static/scss/pages/dashboard.module.scss';

function Dashboard() {
  const barChart = useRef(null);
  const pieChart = useRef(null);

  const colors = {
    purple: {
      default: 'rgba(149, 76, 233, 1)',
      half: 'rgba(149, 76, 233, 0.5)',
      quarter: 'rgba(149, 76, 233, 0.25)',
      zero: 'rgba(149, 76, 233, 0)',
    },
    indigo: {
      default: 'rgba(80, 102, 120, 1)',
      quarter: 'rgba(80, 102, 120, 0.25)',
    },
  };

  const columns = [
    {
      title: 'Tên chủ sân',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="/admin/dashboard">{text}</a>,
    },
    {
      title: 'Địa chỉ sân',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Số lượng sân',
      dataIndex: 'totalPicths',
      key: 'totalPicths',
    },
  ];

  const dataContract = [
    {
      key: '1',
      name: 'Lê Đức Nam',
      address: 'Nguyễn Trãi',
      totalPitchs: '5',
    },
    {
      key: '2',
      name: 'Trần Đăng Trung',
      address: 'Mỹ Đình',
      totalPitchs: '7',
    },
    {
      key: '3',
      name: 'Phan Anh Phi',
      address: 'Cầu Giấy',
      totalPitchs: '7',
    },
    {
      key: '4',
      name: 'Lê Như Nam',
      address: 'Kim Giang',
      totalPitchs: '4',
    },
    {
      key: '5',
      name: 'Lê Văn Thời',
      address: 'Tây Sơn',
      totalPitchs: '6',
    },
  ];

  const dataTimeline = [
    {
      id: 1,
      title: 'Tài khoản nam08102003 đã đặt sân thành công.',
      color: 'green',
    },
    {
      id: 2,
      title: 'Tài khoản abc1234 đã tạo thành công.',
      color: 'green',
    },
    {
      id: 3,
      title: 'Tài khoản xxxx1234 đặt sân lỗi.',
      color: 'red',
    },
    {
      id: 4,
      title: 'Tài khoản employee112 đã đăng tin tức.',
      color: 'gray',
    },
    {
      id: 5,
      title: 'Tài khoản employee112 đã đăng tin tức.',
      color: 'gray',
    },
    {
      id: 6,
      title: 'Tài khoản employee112 đã đăng tin tức.',
      color: 'gray',
    },
    {
      id: 7,
      title: 'Tài khoản employee112 đã đăng tin tức.',
      color: 'gray',
    },
  ];

  useEffect(() => {
    const ctxBar = barChart.current.getContext('2d');
    const ctxPie = pieChart.current.getContext('2d');

    const gradientBar = ctxBar.createLinearGradient(0, 16, 0, 600);
    const gradientPie = ctxPie.createLinearGradient(0, 16, 0, 600);

    gradientBar.addColorStop(0, colors.purple.half);
    gradientBar.addColorStop(0.65, colors.purple.quarter);
    gradientBar.addColorStop(1, colors.purple.zero);

    gradientPie.addColorStop(0, colors.purple.half);
    gradientPie.addColorStop(0.65, colors.purple.quarter);
    gradientPie.addColorStop(1, colors.purple.zero);

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

    const configBar = {
      type: 'bar',
      data: dataBar,
    };

    const configPie = {
      type: 'pie',
      data: dataPie,
    };

    const myBarChart = new Chart(ctxBar, configBar);
    const myPieChart = new Chart(ctxPie, configPie);

    return function cleanup() {
      myBarChart.destroy();
      myPieChart.destroy();
    };
  });
  return (
    <AdminLayout title="Dashboard" breadName="Bảng điều khiển">
      <Layout className={styles.layout_content}>
        <Row align="middle" gutter={16} className={styles.list_card}>
          <Col span={6}>
            <Card className={styles.card_item}>
              <div className={styles.card_body}>
                <div className={styles.content_card}>
                  <h4>Doanh thu hôm nay</h4>
                  <h5>
                    2000k
                    <span>+30%</span>
                  </h5>
                </div>
                <div className={styles.icon_card}>
                  <DollarOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card className={styles.card_item}>
              <div className={styles.card_body}>
                <div className={styles.content_card}>
                  <h4>Người dùng hôm nay</h4>
                  <h5>
                    3,000
                    <span>+10%</span>
                  </h5>
                </div>
                <div className={styles.icon_card}>
                  <UserOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} className={styles.card_item}>
            <Card>
              <div className={styles.card_body}>
                <div className={styles.content_card}>
                  <h4>Người dùng mới</h4>
                  <h5>
                    1,200
                    <span>+10%</span>
                  </h5>
                </div>
                <div className={styles.icon_card}>
                  <UsergroupAddOutlined />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6} className={styles.card_item}>
            <Card>
              <div className={styles.card_body}>
                <div className={styles.content_card}>
                  <h4>Số lượng đặt sân</h4>
                  <h5>
                    30 Lần
                    <span>+5%</span>
                  </h5>
                </div>
                <div className={styles.icon_card}>
                  <ShopOutlined />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row align="middle" gutter={16}>
          <Col span={8}>
            <div className={styles.chart_bar}>
              <canvas ref={pieChart} />
            </div>
          </Col>
          <Col span={16}>
            <div className={styles.chart_bar}>
              <canvas ref={barChart} />
            </div>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '30px' }}>
          <Col span={16}>
            <div className={styles.box_item}>
              <h3 className={styles.title_box}>Danh sách hợp đồng</h3>
              <Table columns={columns} dataSource={dataContract} />
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.box_item}>
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
