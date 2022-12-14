import React from 'react';
import cl from './RoundedSquare.module.css'
import {Box, Link} from "@mui/material";
import {RoundedSquareItemInner} from "../blueBlockLine/BlueBlockLine";


const RoundedSquare = ({title, img, link, ...props}:RoundedSquareItemInner) => {
    const bgImage = {
        backgroundImage: (img)
    }
    return (
        <a href={link} className={cl.root}>
            {/* <div className={cl.img}
            style={{backgroundImage:`url(${img})center center`}} 
            > */}
                <img src={img} alt={title} className={cl.img}/>
                <Box className={cl.inner}>{title}</Box>
            {/* </div> */}
        </a>
    );
};

export default RoundedSquare;