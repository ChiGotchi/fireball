import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, Grid, Link, Toolbar, Typography, IconButton} from '@material-ui/core';
import {NavLink, useLocation} from 'react-router-dom';
import classNames from 'classnames';
import {useStyles} from './styles';

import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../assets/images/logo.png';
import discord from '../../assets/images/discord.svg';

export default function Header() {
    const classes = useStyles();
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Close nav on route change
    useEffect(() => {
        setNavOpen(false);
    }, [location]);

    // Close nav on outside click
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideNav);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideNav);
        };
    }, [navRef]);

    const handleClickOutsideNav = (event) => {
        if (navRef.current && !navRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
            setNavOpen(false);
        }
    };

    return (
        <Toolbar className={classNames(classes.toolbar)}>
            <NavLink className={classes.logoWrapper} to='/'>
                <img className={classes.logo} src={logo} alt='logo' />
                <Typography className={classes.logoText}>
                    <Box component='span'>GHST</Box>
                    <Box component='span' className={classes.highlight}>_</Box>
                    <Box component='span'>GG</Box>
                </Typography>
            </NavLink>
            <Grid item className={classNames(classes.navWrapper, navOpen ? 'opened' : 'closed')} ref={navRef}>
                <nav className={classes.navigation}>
                    <NavLink className={classes.navLink} to='/market'>
                        Market
                    </NavLink>
                    <NavLink className={classes.navLink} to='/explorer'>
                        Explorer
                    </NavLink>
                    <NavLink className={classes.navLink} to='/rarity-hunt-support'>
                        Rarity Hunt Support
                    </NavLink>
                    <NavLink className={classes.navLink} to='/raffle-calculator'>
                        Raffle Calculator
                    </NavLink>
                </nav>
                <Grid className={classes.socialLinkList} container>
                    <Link href='https://discord.gg/NXEEETxSkC' className={classes.socialLink} target='_blank'>
                        <Button className={classes.iconButton} aria-label='add an alarm'>
                            <img src={ discord } alt='' />
                            <Box component='span' className={classes.iconButtonText}>208</Box>
                        </Button>
                    </Link>
                    <Link href='https://t.me/joinchat/hTAWLbZgrKI4YWJk' className={classes.socialLink} target='_blank'>
                        <Button className={classes.iconButton} aria-label='add an alarm'>
                            <TelegramIcon />
                            <Box component='span' className={classes.iconButtonText}>65</Box>
                        </Button>
                    </Link>
                    <Link href='https://twitter.com/ghst_gg' className={classes.socialLink} target='_blank'>
                        <Button className={classes.iconButton} aria-label='add an alarm'>
                            <TwitterIcon />
                            <Box component='span' className={classes.iconButtonText}>159</Box>
                        </Button>
                    </Link>
                    <Box className={classes.socialLinkJoin}>
                        <Typography variant={'caption'}>Join our community!</Typography>
                    </Box>
                </Grid>
            </Grid>
            <IconButton
                color='primary'
                aria-label='menu'
                className={classes.navHamburger}
                onClick={() => setNavOpen(!navOpen)}
                ref={hamburgerRef}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    )
}