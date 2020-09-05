import React from 'react';
import './About.css'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

import icon1 from './Images/icon1.svg'
import icon2 from './Images/icon2.svg'
import icon3 from './Images/icon3.svg'
import iconright from './Images/right-icon.svg'
import aboutimg from './Images/about.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(7),
  },
  papers3: {
    padding: theme.spacing(2),
    marginTop: '90px',
  },
  paper: {
    padding: theme.spacing(1),
    alignContent: 'center',
    color: '#256cb5'
  },
  learn: {
    flexGrow: 1,
    padding: theme.spacing(12),
    marginTop: '20px',
    marginBottom: '35px',
  },
}));

function About() {
  const classes = useStyles();
  return (
    <div>
      <div id="topimg">
        <Grid justify="center" alignItems="center" container className={classes.root}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <div id="headingdiv">
              <h2 id="heading">About us</h2>
              <h5>Home | About</h5>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
        </Grid>
      </div>
      <div className={classes.papers3} id="papers3">
        <Grid container spacing={3}  >
          <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Grid container justify="center" alignItems="center" spacing={5} >
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Paper data-aos="flip-down" data-aos-once="true" data-aos-duration="1500" className={classes.paper}>
                  <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={4} sm={4} md={4} lg={3}>
                      <div>
                        <img alt="img1" src={icon1} />
                      </div>
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={9}>
                      <div>
                        <h2>60+ UX cources</h2>
                        <p>The automated process all your website tasks.</p>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Paper data-aos="flip-down" data-aos-once="true" data-aos-duration="1500" className={classes.paper}>
                  <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={4} sm={4} md={4} lg={3}><div><img alt="img2" src={icon2} /></div></Grid>
                    <Grid item xs={8} sm={8} md={8} lg={9}><div ><h2>Expert instructors</h2>
                      <p>The automated process all your website tasks.</p></div></Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Paper data-aos="flip-down" data-aos-once="true" data-aos-duration="1500" className={classes.paper}>
                  <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={4} sm={4} md={4} lg={3} ><div><img alt="img3" src={icon3} /></div></Grid>
                    <Grid item xs={8} sm={8} md={8} lg={9} ><div ><h2>Lifetime access</h2>
                      <p>The automated process all your website tasks.</p></div></Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
        </Grid>
      </div>
      <div id="learningmaindiv" className={classes.learn}>
        <Grid container spacing={5} >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div data-aos="fade-right" data-aos-duration="700" data-aos-once="true" id="learnheading">
              <h2>Learn new skills online with top educators</h2>
              <p id="learnmainpara">The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
            </div>
            <Grid container>

              <Grid data-aos="fade-right" data-aos-duration="900" data-aos-once="true" container spacing={2} justify="center" alignItems="center">
                <Grid item xs={1} sm={1} md={1} lg={1}><div><img alt="learn2" src={iconright} /></div></Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <div id="learnpara"><p>Join millions of people from around the world learning together.</p></div>
                </Grid>
              </Grid>
              <Grid data-aos="fade-right" data-aos-duration="1100" data-aos-once="true" container spacing={2} justify="center" alignItems="center">
                <Grid item xs={1} sm={1} md={1} lg={1}><div><img alt="learn3" src={iconright} /></div></Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <div id="learnpara"><p>Join millions of people from around the world learning together. Online learning is as easy and natural.</p></div>
                </Grid>
              </Grid>
              <Grid data-aos="fade-right" data-aos-duration="1300" data-aos-once="true" container spacing={2} justify="center" alignItems="center">
                <Grid item xs={1} sm={1} md={1} lg={1}><div><img alt="learn4" src={iconright} /></div></Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <div id="learnpara"><p>Techniques to engage effectively with vulnerable children and young people.</p></div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div id="learnimgdiv"><img id="learnimg" alt="learn1" src={aboutimg} /></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;
