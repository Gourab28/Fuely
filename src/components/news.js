import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Carousel } from 'antd';

function FAQ(props) {
  const [faq, setFaq] = useState([]);
  
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
};
const newsCard = {
  background: 'red',
}
    
  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFAQs = () => {
    axios
      .get('"https://api.cretic.co.in/api/price/west-bengal')
      .then((response) => {
        setFaq({ hits: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="FAQ">
      <ul>
        {faq.hits &&
          faq.hits.map((item, index) => (
            <li key={index}>
              <span>{item.district}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FAQ;