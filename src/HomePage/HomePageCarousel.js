import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function HomePageCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          COVID-19 impacts everyone in different ways.
          </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          VoluneerNation is here to connect you with people who can help you meet these new challenges.
          </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Want to help people in your community while maintaining safe social distance?
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
        VolunteerNation puts safety first by allowing you to coordinate your volunteering efforts entirely online!
        </h3>
      </div>
    </Carousel>
  )
}