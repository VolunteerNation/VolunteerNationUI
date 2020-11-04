import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './HomePageCarousel.css';
import tutor from './tutor.jpg';


export default function HomePageCarousel() {
  return (
    <Carousel autoplay>
      <div class='HomePageCarousel-Card'>
        <h3 class='HomePageCarousel-Content'><img src={tutor} alt=""/></h3>
      </div>
      <div class='HomePageCarousel-Card'>
        <h3 class='HomePageCarousel-Content'>2</h3>
      </div>
      <div class='HomePageCarousel-Card'>
        <h3 class='HomePageCarousel-Content'>3</h3>
      </div>
      <div class='HomePageCarousel-Card'>
        <h3 class='HomePageCarousel-Content'>4</h3>
      </div>
    </Carousel>
  )
}