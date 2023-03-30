import React, {useLayoutEffect} from 'react';
import cl from './Footer.module.css'
import bg from "../../../assets/offer-bg.jpg";
import {Box, Grid, Link, Paper, Typography} from "@mui/material";
import {styled} from '@mui/material/styles';
import logo from './../../../assets/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MailIcon from '@mui/icons-material/Mail';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import {PATH} from "../../../Routes";
import {NavLink} from 'react-router-dom';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Footer = () => {
    // const tt = []
// useLayoutEffect()
    return (
        <Box sx={{flexGrow: 1}} className={cl.footer}>
            <Grid container
                // spacing={2}
                  columns={{xs: 4, sm: 8, md: 12}}>
                <Grid item xs={8} direction="row" alignItems="stretch" container>
                    <Item className={cl.footerItem}>
                        <Box>
                            <p>xs=8</p>
                            <img src={logo} alt="logo" className={cl.logo}/>
                            <Box className={cl.listLinks}>
                                <FacebookIcon/>
                                <InstagramIcon/>
                                <TelegramIcon/>
                            </Box>
                            <p className={cl.Copyright}>2020-{new Date().getFullYear()}<CopyrightIcon/> PaladaTransporte
                            </p>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xs={4} direction="row" alignItems="stretch" container>
                    <Item className={cl.footerItem}>
                        <p>xs=4</p>
                        <Box className={cl.adresWrap}>
                            <Typography variant="h4" component="h4" mt={2}>
                                contacts
                            </Typography>
                            <Typography variant="body2">
                                <FmdGoodIcon/> г. Москва, ул.Покровка д. 50
                            </Typography>
                            <Link href="#" variant="body2" color="inherit" underline="none" className={cl.links}>
                                <MailIcon/> palada@gmail.com
                            </Link>
                            <Link href="#" variant="body2" underline="none" color="inherit" className={cl.links}>
                                <PhoneEnabledIcon/> +49 (495) 739-8-12
                            </Link>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={4} direction="row" alignItems="stretch" container>
                    <Item className={cl.footerItem}>
                        <p>xs=4</p>
                        <Box style={{width:"maxContent"}}>
                        <Typography variant="h4" component="h4" mt={2}>
                            main pages
                        </Typography>
                        <Box className={cl.pagesLinksWrap}>
                            <NavLink to={PATH.CITIES}>Сities list</NavLink>
                            <NavLink to={PATH.FAQ}>FAQ</NavLink>
                            <NavLink to={PATH.CONTACTS}>Contacts</NavLink>
                            <NavLink to={PATH.PRICE}>Prise</NavLink>
                            <NavLink to={PATH.ABOUT}>About</NavLink>
                        </Box>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={8} direction="row" alignItems="stretch" container>
                    <Item className={cl.footerItem}>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;