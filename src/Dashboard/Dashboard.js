import React, {useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {TokenContext} from '../token-context';
import {API_host} from "../util";
import Navbar from './Navbar';
import Card from '../Card/Card.js';
import './Dashboard.css';
import { read_cookie } from 'sfcookies';

export default function Dashboard() {
  const [list, setList] = useState([]);

  useEffect(() =>{
    axios.get(`${API_host}/vnt_post/my_posts`, { headers: {"auth-token":read_cookie('vntToken')}}).then(response => setList(response.data));
  },[])

  return (
    <div className="Dashboard">
      <div className="Dashboard-Navbar">
        <Navbar/>
      </div>
      <div className="Dashboard-Selector">
        <h1 style={{marginLeft: 10}}>My Dashboard</h1>
        <Button color="secondary" >
          Current
        </Button>
        <Button color="secondary" >
          Completed
        </Button>
      </div>
      <hr/>
      <div className="Dashboard-Volunteering">
        <h2 style={{marginLeft: 10}}>Volunteer Opportunities</h2>
      </div>
      <hr/>
      <div className="Dashboard-Requests" style={{marginLeft: 10, marginRight: 10}}>
        <h2>Requests</h2>
        <Grid container direction="row" spacing={3} justify="space-even">
          {list.map((post)=>
            <Grid item sm={6} md={4} lg={3} xl={2}>
            <Card
              name={post.firstName}
              description={post.description}
              category={post.category}
              city={post.city}
              state={post.state}
              status={post.completionStatus}
              date={post.completionDate}
            />
          </Grid> 
            )}
          {/* <Grid item sm={6} md={4} lg={3} xl={2}>
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
          </Grid> */}
        </Grid>
      </div>
    </div>
  )
}