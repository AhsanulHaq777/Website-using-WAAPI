import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
  brandname: {
    textDecoration: 'none',
    color: 'white'
  },
  navlink: {
    textDecoration: 'none',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: '20px',
    width: 'normal',
    padding: '10px 10px',
    '&:hover': {
      background: '#0f3153',
      borderRadius: 5,
      border: '1px solid white',
      }
  }
}));



export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar id="navbar">
        <Toolbar>
          
          <Typography id = "brandname"  hidden-xs variant="h6" className={classes.title}>
            <Link to="/" className={classes.brandname}>Courses</Link>
          </Typography>
          <Button><Link to="/" className={classes.navlink} >Home</Link></Button>
          <Button><Link to="courses" className={classes.navlink} >Courses</Link></Button>
          <Button><Link to="about" className={classes.navlink} >About</Link></Button>
          <Button><Link to="contact" className={classes.navlink} >Contact</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
