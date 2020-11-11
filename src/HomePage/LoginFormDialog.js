import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import LoginForm from '../Login/LoginForm';

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
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen('body')}>
      Login
      </Button>
      <Dialog 
      scroll={scroll}
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title" 
      TransitionComponent={Transition}>

        <DialogTitle onClose={handleClose}><div>
        <Typography component="h1" variant="h5">Login</Typography></div></DialogTitle>
        <DialogContent dividers>
        <Typography gutterBottom>
        </Typography>
        <LoginForm/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
