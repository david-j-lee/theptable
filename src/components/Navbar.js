import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from '../context';

// material
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/styles';

export default function Navbar() {
  const classes = useStyles();
  const { toggleMenu } = useContext()[1];

  return (
    <AppBar className={classes.muiNavbar} position="fixed">
      <Toolbar>
        <img src="/favicon.png" alt="Logo" />
        <Typography variant="h6" color="inherit">
          All the Atoms
        </Typography>
        <div className={classes.flexGrow} />
        <Button component={Link} to="/" color="inherit" size="small">
          Table
        </Button>
        <Button component={Link} to="/list" color="inherit" size="small">
          List
        </Button>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            className={classes.menuButton}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  muiNavbar: {
    '& img': {
      height: 25,
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      marginRight: 250,
      width: 'calc(100% - 250px)',
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
}));
