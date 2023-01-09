import { Row, Table, Layout, Col, Button } from 'antd';
import { ChartCustom } from 'component/Chart';
import AdminLayout from 'layouts/AdminLayout';

function Blogs() {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'idNumber',
      key: 'idNumber',
      width: 50,
    },
    {
      title: 'Tên tin tức',
      dataIndex: 'title',
      key: 'title',
      width: 300,
      render: (text) => <a href="/">{text}</a>,
    },
    {
      title: 'Người đăng',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Ngày đăng',
      dataIndex: 'timePost',
      key: 'timePost',
    },
    {
      title: 'Lượt xem',
      dataIndex: 'countRead',
      key: 'countRead',
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

  const dataBlogs = [
    {
      idNumber: '1',
      title:
        'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
      author: 'Lê Đức Nam',
      timePost: '20-12-2022',
      countRead: '500',
    },
    {
      idNumber: '2',
      title:
        'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
      author: 'Lê Đức Nam',
      timePost: '20-12-2022',
      countRead: '500',
    },
    {
      idNumber: '3',
      title:
        'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
      author: 'Lê Đức Nam',
      timePost: '20-12-2022',
      countRead: '500',
    },
    {
      idNumber: '4',
      title:
        'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
      author: 'Lê Đức Nam',
      timePost: '20-12-2022',
      countRead: '500',
    },
    {
      idNumber: '5',
      title:
        'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
      author: 'Lê Đức Nam',
      timePost: '20-12-2022',
      countRead: '500',
    },
  ];

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
        label: 'Số lượt đọc tin tức',
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

  return (
    <AdminLayout title="Tin tức" breadName="Tin tức">
      <Layout style={{ paddingInline: '20px' }}>
        <Row>
          <Col span={24}>
            <div className="box-item">
              <h4>Số lượt đọc bài viết mỗi tháng</h4>
              <ChartCustom dataChart={dataChart} type="bar" />
            </div>
          </Col>
        </Row>
        <Row className="box-item" style={{ marginTop: '20px' }}>
          <Col span={12}>
            <h4>Danh sách tin tức: 159 tin tức</h4>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Button type="primary">Thêm tin tức</Button>
          </Col>
          <Col span={24}>
            <Table columns={columns} dataSource={dataBlogs} style={{ width: '100%' }} />
          </Col>
        </Row>
      </Layout>
    </AdminLayout>
  );
}

export default Blogs;
