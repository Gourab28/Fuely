import React, {Suspense} from 'react';
import { Spin } from 'antd';
import {Helmet} from 'react-helmet';


//onstt Install = React.lazy(() => import('./state'));
const Welcome = React.lazy(() => import('./welcome'));
const Price = React.lazy(() => import('./price'));
const List = React.lazy(() => import('./list'));
const Alert = React.lazy(() => import('./alert'));
const Footer = React.lazy(() => import('./footer'));

const contentStyle = {
 marginTop: "50%",
 marginLeft: "49%",
 marginRight: "49%",
 justifyContent: "center",
};

const Home = (props) => {
  return (
    <>
    <Helmet>
      <title>Fuley - Daily Fuel Price</title>
    </Helmet>
    <Suspense fallback={<div class="loader"></div>}>
     <List />
     <Welcome />
     <div className="container mt-3 mb-4">
     <Price />
     </div>
     <div className="container mt-3">
      <Alert/>
      <Footer />
     </div>
    </Suspense>
    </>
  );
}

export default Home;