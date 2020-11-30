import React, {Component} from 'react';
import Navbar from './Navbar';
import Card from '../Card/Card.js';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-Navbar">
          <Navbar />
        </div>
        <div className="Dashboard-Selector">
          <Card
            name = "John Doe"
            description = "lorem ipsum"
            category = "Tutoring"
            city = "Gainesville"
            state = "FL"
            status = "New"
            date = "December 24, 2020"
          />
        </div>
        <div className="Dashboard-Volunteering">

        </div>
        <div className="Dashboard-Requests">

        </div>
      </div>
    )
  }
}

export default Dashboard;