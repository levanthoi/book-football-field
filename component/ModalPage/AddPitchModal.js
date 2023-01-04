import { DeleteOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Divider,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Select,
  Space,
  Table,
  Upload,
} from 'antd';
// import { EditorState } from 'draft-js';
import React, { useState, useEffect } from 'react';

// import { Editor } from 'react-draft-wysiwyg';

const AddPitchModal = ({ toggleOpen, isOpen }) => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const onEditorStateChange = () => {
  //   console.log('editorState');
  // };
  const rules = {
    required: true,
    message: null,
  };

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

  // Column Table
  const columns = [
    {
      title: 'Khung giờ',
      dataIndex: 'hour',
    },
    {
      title: 'Ngày trong tuần',
      dataIndex: 'day',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      align: 'right',
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
  const data = [
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
      width={700}
      okText="Tạo mới"
      cancelText="Quay lại"
    >
      <Form labelCol={{ span: 4 }}>
        <Divider orientation="left">Thông tin cơ bản</Divider>
        <Form.Item label="Tên sân" labelAlign="left">
          <Input placeholder="Tên sân bóng" />
        </Form.Item>
        <Form.Item label="Giới thiệu sân" labelAlign="left">
          {/* <Editor
              editorState={editorState}
              // wrapperClassName="wrapper-class"
              // editorClassName="editor-class"
              // toolbarClassName="toolbar-class"
              toolbar={{
                options: [
                  'inline',
                  'blockType',
                  'fontSize',
                  'fontFamily',
                  'list',
                  'textAlign',
                  'colorPicker',
                  'link',
                ],
                fontFamily: {
                  options: [
                    'Arial',
                    'Georgia',
                    'Impact',
                    'Tahoma',
                    'Times New Roman',
                    'Verdana',
                    'Roboto',
                  ],
                },
              }}
              onEditorStateChange={() => setEditorState(editorState)}
            /> */}
          <Input.TextArea rows={4} placeholder="Giới thiệu, mô tả về sân bóng" />
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
        <Form.Item>
          <Space>
            <Select>
              <Select.Option value="5vs5">5 vs 5</Select.Option>
              <Select.Option value="7vs7">7 vs 7</Select.Option>
              <Select.Option value="11vs11">11 vs 11</Select.Option>
            </Select>
            <Input placeholder="Số lượng" />
            <Button type="primary">Thêm</Button>
          </Space>
        </Form.Item>
        <Table columns={columns} dataSource={data} bordered title={() => 'Loại sân ...'} />
      </Form>
    </Modal>
  );
};

export default AddPitchModal;
