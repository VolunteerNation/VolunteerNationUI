import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RTETextField from './RTETextArea';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'

export default function NewPostForm() {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography>Title</Typography>
                <TextField 
                    variant = "outlined"
                    width = "100%"
                />
            </Grid>
            <Grid item xs={12}>
                <Typography>Poster</Typography>
                <TextField
                    variant = "filled"
                    disabled                
                />
            </Grid>
            <Grid item xs={12}>
                <RTETextArea/>
            </Grid>

            <Grid item xs={12}>
                <Button variant = "contained" color = "primary">Publish</Button>
            </Grid>
        </Grid>
    )
}
 