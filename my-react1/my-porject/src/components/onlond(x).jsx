import { Upload, Button, Icon } from 'antd';
import React from 'react'

import {
  withRouter,
  // Link
} from "react-router-dom";
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  
};
export default withRouter(class onlondx extends React.Component {
  render() {
    return (
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Upload
    </Button>
      </Upload>
    )
  }
})