import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import {red} from '@material-ui/core/colors';
import Tutoring from './Tutoring.jpg';
import Yardwork from './Yardwork.jpg';
import FoodDelivery from './Food Delivery.jpg';
import GroceryPickup from './Grocery Pickup.jpg';
import CardDetailsFormDialog from '../CardDetails/CardDetailsFormDialog.js';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {

  const classes = useStyles();
  let img = null;

  if (props.category === "Tutoring") {
    img = Tutoring;
  }
  if (props.category === "Yardwork") {
    img = Yardwork;
  }
  if (props.category === "Grocery Pickup") {
    img = GroceryPickup;
  }
  if (props.category === "Food Delivery") {
    img = FoodDelivery;
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="requester" className={classes.avatar}>
            {props.name.charAt(0)}
          </Avatar>
        }
        title={`${props.category} in ${props.city}, ${props.state}`}
        subheader={props.date}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title={props.category}
      />
      <CardActions disableSpacing>
        <CardDetailsFormDialog {...props}/>
      </CardActions>
    </Card>
  );
}
