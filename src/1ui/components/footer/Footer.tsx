import React from 'react';
import cl from './Footer.module.css'
import bg from "../../../assets/offer-bg.jpg";
import {Box, Grid,Paper} from "@mui/material";
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Footer = () => {
    // const tt = []
    return (
        // <Box className={cl.root}>
        //     {/*<Container>*/}
        //     {/*    <p>footer </p>*/}
        //     {/*    */}
        //     {/*</Container>*/}
        //     <Grid container spacing={2}>
        //         <Grid xs={8}>
        //             <Item>xs=8</Item>
        //         </Grid>
        //         <Grid xs={4}>
        //             <Item>xs=4</Item>
        //         </Grid>
        //         <Grid xs={4}>
        //             <Item>xs=4</Item>
        //         </Grid>
        //         <Grid xs={8}>
        //             <Item>xs=8</Item>
        //         </Grid>
        //     </Grid>
        // </Box>
        <Box sx={{ flexGrow: 1 }} className={cl.footer}>
            <Grid container spacing={2}>
                <Grid xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={8}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer;