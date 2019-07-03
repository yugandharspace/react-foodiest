import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/images/logo.png';
import OutlinedButton from '../OutlinedButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  img: {
    cursor: 'pointer'
  },
  button: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      elevation={2}
      color="default"
      position="fixed"
      className={classes.root}
    >
      <Toolbar>
        <div className={classes.title}>
          <img
            src={logo}
            className={classes.img}
            alt="Foodiest"
            height="50"
            title="We Love Foodies"
          />
        </div>
        <div className={classes.button}>
          <OutlinedButton size="large" text="Sign in" type="primary" />
        </div>
        <OutlinedButton size="large" text="Sign up" type="secondary" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;