import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import Tutoring from '../Images/Tutoring.jpg'
import Yardwork from '../Images/Yardwork.jpg';
import FoodDelivery from '../Images/Food Delivery.jpg';
import GroceryPickup from '../Images/Grocery Pickup.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
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
  const [expanded, setExpanded] = React.useState(false);
  let img = null;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
    <Card className={classes.root} elevation={0}>
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
      <CardContent>
        <Typography paragraph>
          {props.description}
        </Typography>
        {(props.volunteer !== 'null' ? <Typography>Volunteer: {props.volunteer}</Typography> : "")}
      </CardContent>
    </Card>
  );
}
