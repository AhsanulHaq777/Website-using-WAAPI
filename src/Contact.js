import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import contactimg from './Images/contact.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(7),

  },
  button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '8px',
    '&:hover': {
      background: '#0f3153',
      borderRadius: 5,
      border: '1px solid white',
      }
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <div id="topimg">
        <Grid justify="center" alignItems="center" container className={classes.root}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <div id="headingdiv">
              <h2 id="heading">Contact us</h2>
              <h5>Home | Contact</h5>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
        </Grid>
      </div>
      <div id="maindiv" className={classes.root}>
        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid spacing={5} item xs={12} sm={12} md={6} lg={6}>
            <div data-aos="zoom-in-up" data-aos-duration="1300" className={classes.root}>
              <h2 style={{color: '#256cb5', margin: '8px'}}>Get in Touch</h2><br /><br />
             <TextField
                id="outlined-full-width"
                label="Name"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              /><br /><br />
              <TextField
                id="outlined-full-width"
                label="Email"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              /><br /><br />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <br /><br />
              <Button className={classes.button} endIcon={<Icon>send</Icon>}>
                Send
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div id="learnimgdiv"><img id="learnimg" alt="learn1" src={contactimg} /></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;
