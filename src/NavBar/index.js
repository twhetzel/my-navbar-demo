import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbuttons: {
        marginRight: theme.spacing(2),
        color: 'inherit',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Button href='/' className={classes.navbuttons} style={{ float: 'right' }} color='inherit'>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                    </Button>
                    {/* <Button href='/about/' className={classes.navbuttons} style={{ float: 'right' }}>About</Button> */}
                    <Link to='/about/' className={classes.navbuttons} style={{ float: 'right' }}>About</Link>
                    <Button href='/users/' className={classes.navbuttons} style={{ float: 'right' }}>Users</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
