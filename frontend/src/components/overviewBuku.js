import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardMedia, CardContent, Typography, Grid,
    IconButton, Box, Divider, Button
} from '@material-ui/core';

import { Icon } from '@iconify/react';
import roundFavoriteBorder from '@iconify/icons-ic/round-favorite-border';
import outlineLibraryBooks from '@iconify/icons-ic/outline-library-books';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

import Review from './Review';
import { RatingAlt } from './Rating';
import BookGrid from './BookGrid';
import NavPeminjaman from './NavPeminjaman';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 132,
        paddingBottom: 'calc(3.8rem + 18px)'
    },
    divider: {
        margin: theme.spacing(0, 2),
    },
    media: {
        width: `calc(100% + ${theme.spacing})`,
        height: 365,
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),
    },
    card: {
        marginTop: -66,
        borderRadius: 10,
        boxShadow: '5px 0px 32px rgba(21, 21, 21, 0.2)',
    },
    content: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(0),
    },
    bottomSpacing: {
        marginBottom: theme.spacing(2),
    },
    text: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3),
    },
    division: {
        width: `calc(100% + ${theme.spacing(4)})`,
        height: 12,
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),
        backgroundColor: '#f2f2f2',
    },
    btn: {
        textTransform: 'inherit',
        textAlign: 'left',
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    botNav: {
        width: `calc(100% + ${theme.spacing(4)})`,
    },
}));

export default function Koleksiku() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavPeminjaman className={classes.botNav} />
            <CardMedia image={require('../images/contohBuku.jpg')} className={classes.media} />
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Grid container direction='row' style={{ marginBottom: '1rem' }}>
                        <Grid item>
                            <Typography variant='h2' component='h1' gutterBottom>
                                Judul Apa ya?
                            </Typography>
                            <Typography variant='h3' component='h2' color='textSecondary'>
                                Oleh Penulis
                            </Typography>
                        </Grid>
                        <div style={{ flexGrow: 1 }} />
                        <IconButton>
                            <Icon icon={roundFavoriteBorder} style={{ color: '#cc5a71', fontSize: '32px' }} />
                        </IconButton>
                    </Grid>
                    <Grid container direction='row'>
                        <RatingAlt />
                        <Divider orientation="vertical" flexItem className={classes.divider} />
                        <Grid item style={{ textAlign: 'center' }}>
                            <Icon icon={outlineLibraryBooks} style={{ color: '#222222', fontSize: '17px' }} />
                            <Typography variant='body1' component='p' color='textSecondary'>eBook</Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem className={classes.divider} />
                        <Grid item style={{ textAlign: 'center' }}>
                            <Typography variant='h3' component='p'>03</Typography>
                            <Typography variant='body1' component='p' color='textSecondary'>
                                Salinan
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Box className={classes.text}>
                <Typography variant='h3' component='h3' className={classes.bottomSpacing} style={{ fontWeight: 600 }}>
                    Detail Buku
                </Typography>
                <Typography variant='body1' component='span' style={{ fontWeight: 600 }}>
                    ISBN &nbsp;
                </Typography>
                <Typography variant='body1' component='span' color='textSecondary'>
                    XX-XXX-XX-XXXX-X
                </Typography>
                <br />
                <Typography variant='body1' component='span' style={{ fontWeight: 600 }}>
                    Penerbit &nbsp;
                </Typography>
                <Typography variant='body1' component='span' color='textSecondary'>
                    PT Angkasa Jaya
                </Typography>
                <br />
                <Typography variant='body1' component='span' style={{ fontWeight: 600 }}>
                    Tahun Terbit &nbsp;
                </Typography>
                <Typography variant='body1' component='span' color='textSecondary'>
                    XXXX
                </Typography>
            </Box>
            <div className={classes.division} />
            <Box className={classes.text}>
                <Typography variant='h3' component='h3' className={classes.bottomSpacing} style={{ fontWeight: 600 }}>
                    Sinopsis buku
                </Typography>
                <Typography variant='body1' component='p'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis cum mi, eget tempus malesuada quis sodales volutpat elementum. Ultrices felis, tellus nunc et. Pellentesque eu in faucibus mi. Ut nisl, ac eu montes, ullamcorper sed vulputate elit sit. Rutrum et, suscipit maecenas mauris phasellus risus purus venenatis id. Dolor fringilla quam malesuada eu. Proin turpis amet et tortor integer massa nisi, amet.
                </Typography>
            </Box>
            <div className={classes.division} />
            <Box className={classes.text}>
                <Grid container direction='row' style={{ width: '100%' }}>
                    <Button
                        fullWidth
                        className={classes.btn}
                        endIcon={
                            <Icon icon={bxChevronRight}
                                style={{ color: '#151515', fontSize: '1.2rem' }} />
                        }
                    >
                        <Grid container direction='column'>
                            <Typography variant='h3' component='h3' style={{ fontWeight: 600 }}>
                                Beri rating buku ini
                            </Typography>
                            <Typography variant='body1' component='p' color='textSecondary'>
                                Sampaikan pendapat Anda
                            </Typography>
                        </Grid>
                        <div style={{ flexGrow: 1 }} />
                    </Button>
                </Grid>
            </Box>
            <div className={classes.division} />
            <Review className={classes.text} />
            <div className={classes.division} />
            <Box className={classes.text}>
                <Grid container direction='row'>
                    <Button
                        fullWidth
                        className={classes.btn}
                        endIcon={
                            <Icon icon={bxChevronRight}
                                style={{ color: '#151515', fontSize: '1.2rem' }} />
                        }
                    >
                        <Typography variant='h3' component='h3' style={{ fontWeight: 600 }}>
                            Buku lain karya Penulis
                        </Typography>
                        <div style={{ flexGrow: 1 }} />
                    </Button>
                </Grid>
                <BookGrid />
            </Box>
            <div className={classes.division} />
            <Box className={classes.text} style={{ marginBottom: 'calc(3.7rem + 18px)' }}>
                <Grid container direction='row'>
                    <Button
                        fullWidth
                        className={classes.btn}
                        endIcon={
                            <Icon icon={bxChevronRight}
                                style={{ color: '#151515', fontSize: '1.2rem' }} />
                        }
                    >
                        <Typography variant='h3' component='h3' style={{ fontWeight: 600 }}>
                            Rekomendasi buku lain untukmu
                        </Typography>
                        <div style={{ flexGrow: 1 }} />
                    </Button>
                </Grid>
                <BookGrid />
            </Box>
        </div>
    );
}