import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {TokenContext} from '../token-context';
import {API_host} from "../util";
import NavbarDashboard from './NavbarDashboard';
import Card from '../Card/Card.js';
import './Dashboard.css';

// submitRegistration = () => {
//   const obj = {
//     name: this.state.username,
//     email: this.state.email,
//     password: this.state.password,
//     password2: this.state.password2
//   };

//   axios.get(`${API_host}/vnt_user/my_posts`, obj)
//     .then(response => {
//       console.log(response.data);
//       console.log(this.state.username);
//       this.context.handleNewToken(response.data, this.state.username);
//     })
//     .catch(error => {
//       console.log(error.response.data[0]);
//       this.context.handleErrorMessage(error.response.data);
//     });
// }

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Dashboard-Navbar">
        <NavbarDashboard/>
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