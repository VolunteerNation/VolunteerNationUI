import React, {useEffect, useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {TokenContext} from '../token-context';
import {API_host} from "../util";
import Navbar from '../Dashboard/Navbar';
import Card from '../Card/Card.js';
import './Search.css';
import { read_cookie } from 'sfcookies';

export default function Search() {
  const [list, setList] = useState([]);

  const context_update = useContext(TokenContext);

  useEffect(() =>{
    axios.get(`${API_host}/vnt_post/`, { headers: {"auth-token":read_cookie('vntToken')}}).then(response => setList(response.data));
  },[context_update.volunteered])

  return (
    <div className="Search">
      <div className="Search-Navbar">
        <Navbar/>
      </div>
      <div className="Search-Requests" style={{marginLeft: 10, marginRight: 10}}>
        <h1>Active Volunteer Requests</h1>
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
              volunteer={post.assignedVolunteer}
              postId={post._id}
              viewingOn="search"
            />
          </Grid> 
            )}
        </Grid>
      </div>
    </div>
  )
}