import React from 'react';
import './App.css';

//material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

//images imports
import landingleftimage from './Images/landingleft6.png'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignContent: 'center',
    // backgroundImage: `url(${landingpageimage})`
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div >
      <div id="main-grid-image" >
        <Grid container spacing={3} >
          <Grid container item xs={12} sm={12} md={6} lg={6}>
            <Grid container item xs={12} sm={12} md={12} lg={12}></Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={3} lg={3}>
              </Grid>
              <Grid item xs={10} sm={10} md={9} lg={9} >
                <div id="main-left">
                  <h2 id="heading-main-left">Online learning platform</h2>
                  <p id="para-main-left">Build skills with cources, certificates and degrees online from world-class universities and companies</p>
                  <br />
                  <Button id="button-main-left"  >Join For Free</Button>
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={0} lg={0}>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
            <Grid container ></Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid item xs={1} sm={1} md={0} lg={0}>
            </Grid>
            <Grid item xs={10} sm={10} md={12} lg={12}>
              <div id="main-right">
                <img id="image-main-right" src={landingleftimage} />
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={0} lg={0}>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3} style={{ paddingTop: '12px' }} >
        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
        <Grid item xs={8} sm={8} md={8} lg={8}>
          <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={6} lg={4}><div id="treediv" ><h2>first</h2></div></Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}><div id="treediv" ><h2>second</h2></div></Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}><div id="treediv" ><h2>third</h2></div></Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
      </Grid>
    </div>
  );
}

export default Home;
