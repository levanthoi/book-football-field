import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const MyEditor = () => {
  const [value, setValue] = useState('');
  return (
    <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Giới thiệu sân bóng" />
  );
};

export default MyEditor;
