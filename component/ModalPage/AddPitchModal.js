import { DeleteOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  TimePicker,
  Tooltip,
  Typography,
  Upload,
} from 'antd';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import regexHelper from 'utils/regexHelper';
import { formatNumber } from 'utils/utils';

const MyEditor = dynamic(() => import('component/Global/MyEditor'), {
  ssr: false,
  loading: () => null,
});
// const NumericInput = dynamic(() => import('component/Global/NumericInput'), {
//   ssr: true,
//   loading: () => null,
// });

const format = 'HH:mm';
const AddPitchModal = ({ toggleOpen, isOpen }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [pitch, setPitch] = useState('7vs7');
  const [amoutPitch, setAmoutPitch] = useState('');
  const [price, setPrice] = useState('');
  const { isNumber } = regexHelper;

  const data = useSelector((state) => state.pitch.data);
  // dispatch({
  //   type: 'pitch/detail',
  //   payload: {},
  // });

  // const rules = {
  //   required: true,
  //   message: null,
  // };

  // title price VND
  const title = <span>{formatNumber(price)} VNĐ</span>;

  // Props Slideshow
  const propsSlideshow = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  // render header table
  const headerTable = () => {
    return (
      <Space>
        <Typography.Text strong>
          Loại sân:&nbsp;{pitch} | SL: {amoutPitch}&nbsp;sân
        </Typography.Text>
        <Button type="primary">Thêm khung giờ</Button>
      </Space>
    );
  };

  const handleChangePitch = (value) => {
    // console.log(`selected ${value}`);
    setPitch(value);
  };

  //
  const handleChangeInput = (event, setNewState) => {
    // console.log(`selected ${value}`);
    const { value } = event.target;
    const reg = isNumber;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setNewState(value);
    }
  };

  // thêm số lượng sân bóng
  const handleAddPitch = () => {
    const dataPitch = { pitch, amoutPitch };
    dispatch({
      type: 'pitch/addPitch',
      payload: { dataPitch },
    });
    setAmoutPitch('');
    console.log('handleAddPitch', data);
  };

  // tạo sân bóng
  const handleCreatePitch = () => {
    console.log('handleCreatePitch');
  };

  // Column Table
  const columns = [
    {
      title: 'Khung giờ',
      dataIndex: 'hour',
      render: () => <TimePicker.RangePicker minuteStep={30} format={format} />,
    },
    {
      title: 'Ngày trong tuần',
      dataIndex: 'day',
      render: () => <DatePicker.RangePicker />,
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      align: 'right',
      render: () => (
        <Tooltip
          trigger={['focus']}
          title={title}
          placement="topLeft"
          overlayClassName="numeric-input"
        >
          <Input
            placeholder="Nhập giá"
            value={price}
            onChange={(event) => handleChangeInput(event, setPrice)}
          />
        </Tooltip>
      ),
    },
    {
      title: 'Xóa',
      dataIndex: null,
      key: '',
      render: () => (
        <Popconfirm title="Chắc chắn xóa?">
          <Button type="primary" icon={<DeleteOutlined />} danger>
            Xóa
          </Button>
        </Popconfirm>
      ),
    },
  ];

  // Data Table
  const dataSource = [
    {
      key: '1',
      hour: 'sa',
      day: 'day',
      price: '30300',
    },
  ];

  return (
    <Modal
      title="Thêm sân mới"
      open={isOpen}
      onCancel={toggleOpen}
      width={850}
      okText="Tạo mới"
      cancelText="Quay lại"
    >
      <Form labelCol={{ span: 4 }} form={form} onFinish={handleCreatePitch}>
        <Divider orientation="left">Thông tin cơ bản</Divider>
        <Form.Item label="Tên sân" labelAlign="left">
          <Input placeholder="Tên sân bóng" />
        </Form.Item>
        <Form.Item label="Giới thiệu sân" labelAlign="left">
          <MyEditor />
          {/* <Input.TextArea rows={4} placeholder="Giới thiệu, mô tả về sân bóng" /> */}
        </Form.Item>
        <Divider orientation="left">Địa chỉ</Divider>
        <Form.Item label="Quận/Huyện" labelAlign="left">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Số nhà / đường" labelAlign="left">
          <Input placeholder="Địa chỉ số nhà, số đường" />
        </Form.Item>
        <Form.Item label="Bản đồ" labelAlign="left">
          <Input placeholder="Địa chỉ số nhà, số đường" />
        </Form.Item>
        <Divider orientation="left">Thông tin liên hệ</Divider>
        <Form.Item label="Số điện thoại" labelAlign="left">
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
        <Form.Item label="Địa chỉ Email" labelAlign="left">
          <Input placeholder="Nhập email" />
        </Form.Item>
        <Form.Item label="Facebook" labelAlign="left">
          <Input placeholder="Nhập link/url facebook" />
        </Form.Item>
        <Form.Item label="Website" labelAlign="left">
          <Input placeholder="Địa chỉ website" />
        </Form.Item>
        <Divider orientation="left">Hình ảnh sân</Divider>
        <Form.Item label="Ảnh đại diện" labelAlign="left">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>TẢI ẢNH LÊN (Tối đa: 1 ảnh)</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="SlideShow" labelAlign="left">
          <Upload.Dragger {...propsSlideshow}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Chọn hoặc kéo thả file</p>
            <p className="ant-upload-hint">
              Hỗ trợ tải lên một lần hoặc hàng loạt. Nghiêm cấm tải lên dữ liệu của công ty hoặc tập
              tin ban nhạc khác!!!
            </p>
          </Upload.Dragger>
        </Form.Item>
        <Divider orientation="left" orientationMargin="0">
          Giá thuê sân/trận
        </Divider>
        {/* <Form.Item> */}
        <Space>
          <Form.Item>
            <Select defaultValue="7vs7" onChange={handleChangePitch}>
              <Select.Option value="5vs5">5 vs 5</Select.Option>
              <Select.Option value="7vs7">7 vs 7</Select.Option>
              <Select.Option value="11vs11">11 vs 11</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số lượng sân',
              },
            ]}
          >
            <Input
              placeholder="Số lượng"
              value={amoutPitch}
              onChange={(event) => handleChangeInput(event, setAmoutPitch)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleAddPitch}>
              Thêm
            </Button>
          </Form.Item>
        </Space>
        {/* </Form.Item> */}
        <Table columns={columns} dataSource={dataSource} bordered title={() => headerTable()} />
      </Form>
    </Modal>
  );
};

export default AddPitchModal;
