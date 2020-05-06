import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'

import { Icon } from '@iconify/react';
import bxHomeSmile from '@iconify/icons-bx/bx-home-smile';
import bookIcon from '@iconify/icons-ps/book';
import roundFavoriteBorder from '@iconify/icons-ic/round-favorite-border';
import bxUserCircle from '@iconify/icons-bx/bx-user-circle';

const secondary = '#C89B7B';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '3.8rem',
    bottom: '0',
    position: 'fixed',
  },
});

export default function Botnav( {value, onChange}) {
  const classes = useStyles();

  return (
    <BottomNavigation value={value} onChange={(e, tab) => onChange(tab)} className={classes.root}>
      <BottomNavigationAction label="Beranda" value="beranda" icon={<Icon icon={bxHomeSmile} style={{ color: secondary, fontSize: '28px' }} />} />
      <BottomNavigationAction label="Koleksiku" value="koleksiku" icon={<Icon icon={bookIcon} style={{ color: secondary, fontSize: '24px' }} />} />
      <BottomNavigationAction label="Favorit" value="favorit" icon={<Icon icon={roundFavoriteBorder} style={{ color: secondary, fontSize: '28px' }} />} />
      <BottomNavigationAction label="Profil" value="profil" icon={<Icon icon={bxUserCircle} style={{ color: secondary, fontSize: '28px' }} />} />
    </BottomNavigation>
  );
}