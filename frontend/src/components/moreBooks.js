import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid, Typography } from '@material-ui/core'

import { Icon } from '@iconify/react'
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';

import { BookGridAlt } from './BookGrid';
import BookList from './BookList';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        // zIndex: 100,
    },
    items: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(-1),
    }
}));

export default function BukuPopuler() {
    const classes = useStyles();
    return (
        <Grid container direction='column' alignItems='flex-start' className={classes.root}>
            <Grid container alignItems='center' className={classes.items}>
                <IconButton>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Typography variant='h1' component='h1' style={{ marginLeft: '0.75rem', fontWeight: 'bold' }}>
                    Buku Populer
                </Typography>
            </Grid>
            <BookGridAlt />
        </Grid>
    );
}

function ArsipBuku() {
    const classes = useStyles();
    return (
        <Grid container direction='column' alignItems='flex-start' className={classes.root}>
            <Grid container alignItems='center' className={classes.items}>
                <IconButton>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Grid item style={{textAlign: 'left', marginLeft: '0.75rem' }}>
                    <Typography variant='h1' component='h1' style={{ fontWeight: 'bold' }}>
                        Arsip Buku
                    </Typography>
                    <Typography variant='body1' component='p' color='textSecondary'>
                        8 buku telah tersimpan
                    </Typography>
                </Grid>
            </Grid>
            <BookList />
        </Grid>
    );
}

export { BukuPopuler, ArsipBuku }