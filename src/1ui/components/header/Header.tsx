import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Menu, MenuItem} from '@mui/material';
import logo from '../../../assets/logo01.png';
import MenuIcon from '@mui/icons-material/Menu';
import cl from './Header.module.css'
import {Link} from "react-router-dom";
import {PATH} from "../../../Routes";

const Header = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        debugger
        setAnchorEl(null);
    };

    return (

        <AppBar position="static" className={cl.header}>
                <Toolbar className={cl.root}>
                    <Link className={cl.logo} to={PATH.HOME}><img src={logo} style={{width: 90}}/></Link>
                    {/*<Link className={cl.logo} to={"/"}><img src={logo} style={{width:90}} /></Link>*/}
                    <IconButton aria-label="menu" aria-controls="menu-appbar" aria-haspopup="true" edge="end"
                                onClick={handleMenu} color="inherit" className={cl.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                          keepMounted transformOrigin={{vertical: 'top', horizontal: 'right',}}
                          open={open} onClose={handleClose} className={cl.listMenu}>
                        <MenuItem onClick={handleClose}><Link to={PATH.ABOUT}>About</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={PATH.PRICE}>Price</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={PATH.CITIES}>Сities list</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={"/"}>Reviev</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={PATH.FAQ}>Faq</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to={PATH.CONTACTS}>Contacts</Link></MenuItem>
                    </Menu>
                </Toolbar>
        </AppBar>

    );
};

export default Header;