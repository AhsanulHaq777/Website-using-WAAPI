import React from 'react';
import './Courses.css';

//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


//images
import featimg from './Images/react.jpg'
import featimg2 from './Images/javasc.jpg'
import featimg3 from './Images/html.jpg'
import featimg4 from './Images/css.jpg'

//for cards
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(7),
    },
    rootfeature_learn: {
        flexGrow: 1,
        padding: theme.spacing(10),

    },
    rootcard: {
        color: '#256cb5',
        '&:hover': {
            color: 'white',
          backgroundColor: '#9edbec'
          }
    },
    button: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        width: 250,
        padding: '0 20px',
        fontSize: '18px',
        letterSpacing: 1,
        wordSpacing: 2,
        '&:hover': {
          background: '#0f3153',
          borderRadius: 5,
          border: '1px solid white',
          }
      },
}));

function Courses() {
    const classes = useStyles();
    return (
        <div >
            <div id="topimg">
                <Grid justify="center" alignItems="center" container className={classes.root}>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <div id="headingdiv">
                            <h2 id="heading">Our Courses</h2>
                            <h5>Home | Cources</h5>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
                </Grid>
            </div>
            <div className={classes.rootfeature_learn}>
                <div id="feature-heading"><h2>Our featured cources</h2></div>
                <div >
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" className={classes.rootcard}>
                                <CardHeader
                                    color='#256cb5'
                                    title="Learn React.js"
                                    subheader="Fundamentals of React for Web Design"
                                />
                                {/* <CardMedia
                                    className={classes.media}
                                    image= "E:/React Projects/project-5-website/src/Images/featureimg1.jpg"
                                    title="React.js"
                                /> */}
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="100" className={classes.rootcard}>
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="200" className={classes.rootcard}>
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="300" className={classes.rootcard}>
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="400" className={classes.rootcard}>
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="500" className={classes.rootcard}>
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="600" className={classes.rootcard}>
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
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Card data-aos="zoom-in" data-aos-once="true" data-aos-delay="700" className={classes.rootcard}>
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
                    <div style={{marginTop: '70px',textAlign: 'center', marginBottom: '50px'}}>
                        <Button className={classes.button}>See More</Button>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Courses;  