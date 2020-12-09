import React, {useContext} from 'react';
import CardDetails from './CardDetails';
import Button from '@material-ui/core/Button';
/* import TextField from '@material-ui/core/TextField'; */
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';
import {API_HOST, AUTH_HEADERS} from "../Util/util";
import {TokenContext} from '../token-context';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const context_update = useContext(TokenContext);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const data = {};

  const handleClickVolunteer = () => {
    console.log("Volunteer button clicked");
    // console.log(read_cookie(VNT_TOKEN_COOKIE));

    const data = {
      id: props.postId
    }

    axios.post(`${API_HOST}/vnt_post/volunteer`, data, {headers: AUTH_HEADERS})
      .then(response => {
        console.log(response.data);
        console.log('about to try update volunteered');
        context_update.updateVolunteered();
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen('body')}>
        Show More
      </Button>
      {((props.volunteer === "null" && props.viewingOn !== 'dashboard') ?
        <Button style={{marginLeft: 5}} variant="contained" color="secondary" onClick={() => handleClickVolunteer()}>
          Become Volunteer
        </Button> : ((props.viewingOn === "dashboard" && props.volunteer !== "null") ?
          <Typography paragraph style={{float: 'right', marginLeft: 40}}>Volunteer Found!</Typography> : <div></div>))}
      <Dialog
        scroll={scroll}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}>

        {/* <DialogTitle onClose={handleClose}>
        <div>
          <Typography component="h1" variant="h4">{`${props.category} in ${props.city}, ${props.state}`}</Typography>
          <Typography component="h2" variant="h5">{`${props.category} in ${props.city}, ${props.state}`}</Typography>
        </div></DialogTitle> */}
        <DialogContent dividers>
          <Typography gutterBottom>
          </Typography>
          <CardDetails {...props}/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
