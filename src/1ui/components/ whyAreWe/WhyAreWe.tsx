import {Box, Paper, Typography} from '@mui/material';
import React from 'react';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import cl from './WhyAreWe.module.css';

type causeType = {
    img: object
    title: string
    description: string
    bg: string
}
const whyAreWeArr = [
    {img: <NightlifeIcon/>, title: "по праздникам", description: "мы работаем ,по праздникам", bg: "#add19a"},
    {img: <AccessTimeFilledIcon/>, title: "в выходные дни", description: "мы работаем ,в выходные дни", bg: "#88a3d6"},
    {img: <AccessAlarmIcon/>, title: "24 часа в сутки", description: "мы работаем ,24 часа в сутки", bg: "#df8b7b"},
    {img: <AddHomeIcon/>, title: "транзитные пункты", description: "вы можете добавить транзитные пункты", bg: "#e296bf"},
    {img: <AddModeratorIcon/>, title: "безопасность", description: "мы следим за сохранностью груза", bg: "#6cb7dd"},
    {img: <AddModeratorIcon/>, title: "безопасность", description: "мы следим за сохранностью груза", bg: "#e9b400"},
]
const WhyAreWe = () => {
    const cartArr = whyAreWeArr.map((i: causeType) => {
            return <Paper className={cl.paper}>
                <Box className={cl.imgWrap} style={{background: `${i.bg}`, color: "#fff"}}>
                   <> {i.img}</>
                </Box>
                <Typography variant="h4">{i.title}</Typography>
                <Typography>{i.description}</Typography>

            </Paper>
        }
    )
    return (
        <Box mt={8} mb={10}>
            <Typography variant="h3" component="h3" mb={5} mt={8} style={{textAlign:"center"}}>Why are<span style={{color:"#0b6eb0"}}> we</span></Typography>
            <Box className={cl.root}>
                {cartArr}
            </Box>
        </Box>
    );
};

export default WhyAreWe;