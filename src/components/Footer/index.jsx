import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Facebook from '@material-ui/icons/Facebook';
import LinkedIn from '@material-ui/icons/LinkedIn';

// Footer Component function
const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
        <BottomNavigationAction icon={<Facebook />} className={classes.root} />
      </a>

      <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      </a>
    </BottomNavigation>
  );
};
export default Footer;

// css styles using material ui styes
const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#057',
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: 'white',
      '&:hover': {
        fill: 'teal',
        fontSize: '1.8rem',
      },
    },
  },
});
