import React, { useRef, useEffect } from 'react';
import { Card, Row, Col, Layout } from 'antd';
import {
  DollarOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import AdminLayout from 'layouts/AdminLayout';
import styles from 'static/scss/pages/dashboard.module.scss';
import Chart from 'chart.js/auto';

function Dashboard() {
  const canvasEl = useRef(null);

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

  useEffect(() => {
    const ctx = canvasEl.current.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [1000, 1230, 1495, 1594, 1678, 1799, 1923, 2012, 2222, 2375];

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
    ];
    const data = {
      labels,
      datasets: [
        {
          backgroundColor: 'linear-gradient(62deg,#00369e,#005cfd 53%,#a18dff)',
          label: 'Người dùng hoạt động',
          data: weight,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };
    const config = {
      type: 'bar',
      data,
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
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
        <Row align="middle">
          <div className={styles.chart_bar}>
            <canvas id="myChart" ref={canvasEl} />
          </div>
        </Row>
      </Layout>
    </AdminLayout>
  );
}

export default Dashboard;
