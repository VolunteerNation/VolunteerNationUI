import React from 'react';
import FormData from '../Registration/FormData';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import ListItemText from "@material-ui/core/ListItemText";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ListItemText onClick={handleClickOpen} primary="Sign Up"/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
                    TransitionComponent={Transition}>
                <DialogContent>
                    <FormData/>
                </DialogContent>
                {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
            </Dialog>
        </div>
    );
}
