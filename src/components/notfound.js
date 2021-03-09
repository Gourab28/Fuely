import React from 'react';
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

const NotFound = (props) => {
  return (
  <>
  <Helmet>
    <title>Sorry, the page you visited does not exist.</title>
  </Helmet>
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link to="/">Back to Home</Link></Button>}
  />
  </>
  );
}

export default NotFound;