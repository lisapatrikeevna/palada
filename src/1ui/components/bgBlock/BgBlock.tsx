import React from 'react';
import bg from '../../../assets/offer-bg.jpg'
import cl from './BgBlock.module.css'
import {Box, Typography} from "@mui/material";

type propsType = {
    image: any
    imgText: string
    title: string
    desc?: string
}
const BgBlock = ({image, imgText, title, ...props}: propsType) => {
    return (
        <div style={{backgroundImage: bg}} className={cl.root}>
            <Box className={cl.textWrap}>
                <Typography className={cl.title} variant="h3">{title}</Typography>
                <Typography>{props.desc}</Typography>
            </Box>
            <Box className={cl.imgWrap}><img src={image} alt={imgText}/></Box>
        </div>
    )
        ;
};

export default BgBlock;