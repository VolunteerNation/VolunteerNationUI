import React, {useContext, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {TokenContext} from '../token-context';
import {API_HOST, AUTH_HEADERS} from "../Util/util";
import Navbar from './Navbar';
import Card from '../Card/Card.js';
import './Dashboard.css';

export default function Dashboard() {
  const [list, setList] = useState([]);
  const context_update = useContext(TokenContext);

  useEffect(() => {
    axios.get(`${API_HOST}/vnt_post/my_posts`, {headers: AUTH_HEADERS()}).then(response => setList(response.data));
    // },[context_update.postsCreated, read_cookie(VNT_TOKEN_COOKIE)]);
  }, [context_update.postsCreated]);
  // },[context_update.postsCreated, read_cookie(VNT_TOKEN_COOKIE)]);

  return (
    <div className="Dashboard">
      <div className="Dashboard-Navbar">
        <Navbar/>
      </div>
      <div className="Dashboard-Selector">
        <h1 style={{marginLeft: 10}}>My Dashboard</h1>
        {/* <Button color="secondary">
          Current
        </Button>
        <Button color="secondary">
          Completed
        </Button> */}
      </div>
      <hr/>
      <div className="Dashboard-Volunteering">
        <h2 style={{marginLeft: 10}}>Volunteer Opportunities</h2>
      </div>
      <hr/>
      <div className="Dashboard-Requests" style={{marginLeft: 10, marginRight: 10}}>
        <h2>Requests</h2>
        <Grid container direction="row" spacing={3} justify="space-even">
          {list.map((post) =>
            <Grid item sm={6} md={4} lg={3} xl={2}>
              <Card
                name={post.firstName}
                description={post.description}
                category={post.category}
                city={post.city}
                state={post.state}
                status={post.completionStatus}
                date={post.completionDate}
                volunteer={post.assignedVolunteer}
                viewingOn="dashboard"
              />
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  )
}
