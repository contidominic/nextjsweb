import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
 
import { AccessAlarm, ArrowRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
   
    fontSize: "5vw"
  
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "teal",
    
  },
 Buttons1: {
  display: 'flex',
   justifyContent: 'center',
    alignItems: 'center',
    fontSize: "5vw",
    color: "rgba(0,0,0,.6);",
  },
  button: {
  color: "white",
    backgroundColor: "transparent",
    outline: `1px solid transparent`, 
    margin: theme.spacing(1),
   
    '&:hover': { 
    backgroundColor: "red",
   

    },

  },
  title: {
    flexGrow: 1,
  },
}));

const style = {
  backgroundColor: "teal",
  color: "white",
  
boxShadow: "2px 2px 2px black",
}

export default function ButtonAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id = "AppB" className={classes.root}>
    <div id = "flexy">
     
      <AppBar id = "Appb2"  position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
        
            <div className={classes.Buttons1}>
            <Button
href="http://127.0.0.1"
          style={style}
        variant="contained"
      
        className={classes.button}
        endIcon={<ArrowRight />}
      >
        Delete
      </Button>
      <Button
          
          variant="contained"
        
          className={classes.button}
        
        >
          Delete
        </Button>
        <Button
          
          variant="contained"
        
          className={classes.button}
    
        >
          Delete
        </Button>
            </div>
       
        </Toolbar>
      </AppBar>
    </div></div>
  );
}
