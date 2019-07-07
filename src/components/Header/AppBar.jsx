import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../CustomButton';
import logo from '../../assets/images/logo.png';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="default" elevation={2}>
        <Toolbar>
          {props.isOpen === true ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={props.handleDrawerClose}
            >
              <ChevronLeftIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={props.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography style={{ cursor: 'pointer' }} variant="h2" noWrap>
            <img
              src={logo}
              alt="Foodiest"
              height="58"
              title="We Love Foodies"
            />
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.menuButton}>
              <CustomButton
                variant="outlined"
                size="large"
                text="Sign in"
                type="secondary"
              />
            </div>
            <CustomButton
              variant="contained"
              size="large"
              text="Sign up"
              type="primary"
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};