import React from 'react';
import './Footer.css'

// import material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    // textAlign: 'center',
    padding: theme.spacing(7)
  },

  paper: {
    padding: theme.spacing(1),
    alignContent: 'center',
    color: '#256cb5'
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div id="footerbackground">
      <div id="footerinnerdiv" className={classes.root}>
        <Grid container spacing={3} >
          <Grid item xs={0} sm={0} md={0} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <div id="footerbranddiv">
              <h2 id="footerbrandhead">Cources</h2>
              <p>Take the first step to learn with us. And get the life time access to all the cources.</p>
            </div>
          </Grid>

          <Grid item xs={12} sm={4} md={3} lg={2}>
            <div id="list">
              <h4 id="listheading">Our Cources</h4>
              <ul>
                SQA<br />
                Branding<br />
                Design and Creative<br />
                Programming<br />
              </ul>
            </div>
            
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <div id="list">
              <h4 id="listheading">Quick Links</h4>
              <ul>
                <>Jobs</><br />
                <>Brand Assets</><br />
                <>Investor Relations</><br />
                <>Terms of Service</><br />
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <div id="list">
              <h4 id="listheading">Resources</h4>
              <ul>
                <>Guides</><br />
                <>Research</><br />
                <>Experts</><br />
                <>Agencies</><br />
              </ul>
            </div>
          </Grid>
          <Grid item xs={0} sm={0} md={0} lg={1}></Grid>
        </Grid>
        <div id="copyrightdiv">
          <p>Copyright ©2020 All rights reserved | This template is made with  by Ahsan</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
