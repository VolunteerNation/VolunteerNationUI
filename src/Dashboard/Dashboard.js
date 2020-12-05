import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import Card from '../Card/Card.js';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-Navbar">
          <Navbar/>
        </div>
        <div className="Dashboard-Selector">
          <h1>My Dashboard</h1>
          <Button color="secondary" >
            Current
          </Button>
          <Button color="secondary" >
            Completed
          </Button>
        </div>
        <hr/>
        <div className="Dashboard-Volunteering">
          <h2>Volunteer Opportunities</h2>
        </div>
        <hr/>
        <div className="Dashboard-Requests">
          <h2>Requests</h2>
          <Grid container direction="row" spacing={3} justify="space-even">
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                name="John Doe"
                description="lorem ipsum"
                category="Tutoring"
                city="Gainesville"
                state="FL"
                status="New"
                date="December 24, 2020"
              />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                name="John Doe"
                description="lorem ipsum"
                category="Tutoring"
                city="Gainesville"
                state="FL"
                status="New"
                date="December 24, 2020"
              />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                name="John Doe"
                description="lorem ipsum"
                category="Tutoring"
                city="Gainesville"
                state="FL"
                status="New"
                date="December 24, 2020"
              />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                name="John Doe"
                description="lorem ipsum"
                category="Tutoring"
                city="Gainesville"
                state="FL"
                status="New"
                date="December 24, 2020"
              />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                name="John Doe"
                description="lorem ipsum"
                category="Tutoring"
                city="Gainesville"
                state="FL"
                status="New"
                date="December 24, 2020"
              />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                name="John Doe"
                description="lorem ipsum"
                category="Tutoring"
                city="Gainesville"
                state="FL"
                status="New"
                date="December 24, 2020"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Dashboard;
