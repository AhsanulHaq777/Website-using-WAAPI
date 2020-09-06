import React from 'react';
import './Home.css';

//material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Paper } from '@material-ui/core';
//for cards
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

//images imports
import landingleftimage from './Images/landingleft6.png'
import icon1 from './Images/icon1.svg'
import icon2 from './Images/icon2.svg'
import icon3 from './Images/icon3.svg'
import featimg from './Images/react.jpg'
import featimg2 from './Images/javasc.jpg'
import featimg3 from './Images/html.jpg'
import featimg4 from './Images/css.jpg'
import learning from './Images/learn.png'
import iconright from './Images/right-icon.svg'

//animations imports
import useWebanimations from "@wellyshen/use-web-animations";
import {zoomIn } from "@wellyshen/use-web-animations";
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },

  paper: {
    padding: theme.spacing(1),
    alignContent: 'center',
    color: '#256cb5'
    // backgroundImage: `url(${landingpageimage})`
  },
  papers3: {
    padding: theme.spacing(2),
    marginTop: '-30px',
  },
  button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 1,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      color: 'white',
    background: '#0f3153',
    borderRadius: 5,
    border: '1px solid white',
    }
  },
  rootfeature_learn: {
    flexGrow: 1,
    padding: theme.spacing(7),

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9

  },
  rootcard: {
    color: '#256cb5',
    '&:hover': {
      color: 'white',
    backgroundColor: '#9edbec'
    }
  },

}));

function Home() {
  const classes = useStyles();
  
  const {ref} = useWebanimations({...zoomIn});
  return (
    <div >
      <div className={classes.root} id="main-grid-image" >
        <Grid container spacing={3} >
          <Grid container item xs={12} sm={12} md={6} lg={6}>
            <Grid container item xs={12} sm={12} md={12} lg={12}></Grid>
            <Grid container item xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={1} sm={1} md={3} lg={3}></Grid>
              <Grid item xs={10} sm={10} md={9} lg={9} >
                <div ref={ref} id="main-left">
                  <h2 id="heading-main-left">Online learning <br /> platform</h2>
                  <p id="para-main-left">Build skills with cources, certificates and degrees online from world-class universities and companies</p>
                  <br />
                  <Button className={classes.button}   >Join For Free</Button>
                </div>
              </Grid>
              <Grid item xs={1} sm={1} md={0} lg={0}></Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
            <Grid container ></Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Grid item xs={1} sm={1} md={0} lg={0}>
            </Grid>
            <Grid item xs={10} sm={10} md={12} lg={12}>
              <div id="main-right">
                <img id="image-main-right" alt="mainimg" src={landingleftimage} />
              </div>
            </Grid>
            <Grid item xs={1} sm={1} md={0} lg={0}>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={classes.papers3}>
        <Grid container spacing={3}  >
          <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Grid container spacing={5} >
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Paper data-aos="flip-down" data-aos-once="true" data-aos-duration="1500" className={classes.paper}>
                  <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={4} sm={4} md={4} lg={3}><div><img alt="img1" src={icon1} /></div></Grid>
                    <Grid item xs={8} sm={8} md={8} lg={9}><div ><h2>60+ UX cources</h2>
                      <p>The automated process all your website tasks.</p></div></Grid>
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
      <div className={classes.rootfeature_learn}>
        <div id="feature-head"><h2>Our featured cources</h2></div>
        <div >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card data-aos="zoom-in" data-aos-once="true" className={classes.rootcard}>
                <CardHeader
                  color='#256cb5'
                  title="Learn React.js"
                  subheader="Fundamentals of React for Web Design"
                />
                <img style={{ width: '100%' }} src={featimg} alt="myreact" />
                <CardContent>
                  <Typography variant="body2" color="#256cb5" component="p">
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="300"  className={classes.rootcard}>
                <CardHeader
                  title="Learn JavaScript"
                  subheader="Fundamentals of JS for Web Design"
                />
                <img style={{ width: '100%' }} src={featimg2} alt="myreact" />
                <CardContent>
                  <Typography variant="body2" color="#256cb5" component="p">
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="500" className={classes.rootcard}>
                <CardHeader
                  title="Learn HTML5"
                  subheader="Fundamentals of HTML5 for Web Design"
                />
                <img style={{ width: '100%' }} src={featimg3} alt="myreact2" />
                <CardContent>
                  <Typography variant="body2" color="#256cb5" component="p">
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="800" className={classes.rootcard}>
                <CardHeader
                  title="Learn CSS3"
                  subheader="Fundamentals of CSS3 for Web Design"
                />
                <img style={{ width: '100%' }} src={featimg4} alt="myreact3" />
                <CardContent>
                  <Typography variant="body2" color="#256cb5" component="p">
                    Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore. Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
      <div id="learnmaindiv" className={classes.rootfeature_learn}>
        <Grid container spacing={5} >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div id="learnimgdiv"><img id="learnimg" alt="learn1" src={learning} /></div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div data-aos="fade-left" data-aos-duration="400" data-aos-once="true" id="learnheading">
              <h2>Take the next step <br /> toward your personal <br /> and professional goals <br /> with us.</h2>
            </div>
            <Grid container>

              <Grid data-aos="fade-left" data-aos-duration="600" data-aos-once="true" container spacing={2} justify="center" alignItems="center">
                <Grid item xs={1} sm={1} md={1} lg={1}><div><img alt="learn2" src={iconright} /></div></Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <div  id="learnpara">
                    <p>Join millions of people from around the world learning together.</p>
                  </div>
                </Grid>
              </Grid>
              <Grid data-aos="fade-left" data-aos-duration="800" data-aos-once="true" container spacing={2} justify="center" alignItems="center">
                <Grid item xs={1} sm={1} md={1} lg={1}><div><img alt="learn3" src={iconright} /></div></Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <div id="learnpara">
                    <p>Join millions of people from around the world learning together. Online learning is as easy and natural.</p>
                  </div>
                </Grid>
              </Grid>
              <Grid data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" container spacing={2} justify="center" alignItems="center">
                <Grid item xs={1} sm={1} md={1} lg={1}><div><img alt="learn4" src={iconright} /></div></Grid>
                <Grid item xs={11} sm={11} md={11} lg={11}>
                  <div id="learnpara">
                    <p>Techniques to engage effectively with vulnerable children and young people.</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;