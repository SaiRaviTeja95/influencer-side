import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import icon from "../img/contact/contact us icon.png";
import DotMenu from "../components/DotMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className="navbar" style={{ background: '#fac912' }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <DotMenu />
          </Typography>
          <Button color="inherit" style={{ float: 'right'}}>
            <img src={icon} alt=""/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;