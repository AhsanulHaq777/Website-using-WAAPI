// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
// import './App.css';
// import { red } from '@material-ui/core/colors';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   } 
//   }));

// export default function Home() {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar id="Navi" >
//         <Toolbar variant="dense">
//           {/* <img id="navimage" alt="logo animation" src={logo} /> &nbsp;&nbsp; */}
          
//           <Button id ="navbutton"   variant="outlined" >Home</Button> &nbsp;&nbsp;
//           <Button  id ="navbutton" variant="outlined">Cources</Button> &nbsp;&nbsp;
//           <Button  id="navbutton" variant="outlined">About</Button> &nbsp;&nbsp;
//           <Button  id="navbutton" variant="outlined">Contact</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

import React from 'react';
import './App.css';
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
  buttons: {
    textDecoration: 'none',
    color: 'white'
  }
}));



export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'skyblue'}}>
        <Toolbar>
          
          <Typography id = "brandname"  hidden-xs variant="h6" className={classes.title}>
            Courses
          </Typography>
          <Button color="inherit"><Link to="/" className={classes.buttons} >Home</Link></Button>
          <Button color="inherit"><Link to="cources" className={classes.buttons} >Cources</Link></Button>
          <Button color="inherit"><Link to="about" className={classes.buttons} >About</Link></Button>
          <Button color="inherit"><Link to="contact" className={classes.buttons} >Contact</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
