import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
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
        </div>
        <div className="Dashboard-Volunteering">

        </div>
        <div className="Dashboard-Requests">
          <Grid container direction="row" spacing={3} justify="space-even">
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                  name = "John Doe"
                  description = "lorem ipsum"
                  category = "Tutoring"
                  city = "Gainesville"
                  state = "FL"
                  status = "New"
                  date = "December 24, 2020"
                />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                  name = "John Doe"
                  description = "lorem ipsum"
                  category = "Tutoring"
                  city = "Gainesville"
                  state = "FL"
                  status = "New"
                  date = "December 24, 2020"
                />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                  name = "John Doe"
                  description = "lorem ipsum"
                  category = "Tutoring"
                  city = "Gainesville"
                  state = "FL"
                  status = "New"
                  date = "December 24, 2020"
                />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                  name = "John Doe"
                  description = "lorem ipsum"
                  category = "Tutoring"
                  city = "Gainesville"
                  state = "FL"
                  status = "New"
                  date = "December 24, 2020"
                />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                  name = "John Doe"
                  description = "lorem ipsum"
                  category = "Tutoring"
                  city = "Gainesville"
                  state = "FL"
                  status = "New"
                  date = "December 24, 2020"
                />
            </Grid>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                  name = "John Doe"
                  description = "lorem ipsum"
                  category = "Tutoring"
                  city = "Gainesville"
                  state = "FL"
                  status = "New"
                  date = "December 24, 2020"
                />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Dashboard;