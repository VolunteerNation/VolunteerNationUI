import React from 'react';
import 'antd/dist/antd.css';
import {Carousel} from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#7ECCCC',
};

export default function HomePageCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          COVID-19 has impacted everyone differently.
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          VolunteerNation is here to connect you with people who can help you meet these new challenges.
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Want to help people in your community while maintaining safe social distance?
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          VolunteerNation puts safety first by allowing you to coordinate your volunteering efforts entirely
          online!
        </h3>
      </div>
    </Carousel>
  )
}
