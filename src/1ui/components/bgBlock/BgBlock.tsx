import React from 'react';
import bg from '../../assets/offer-bg.jpg'
import {Typography} from "@material-ui/core";

type propsType={
    image:any
    imgText:string
    title:string
    desc?:string
}
const BgBlock = ({image,imgText,title,...props}:propsType) => {
    return (
        <div style={{background:bg}}>
            <img src={image} alt={imgText}/>
            <Typography variant="h4">{title}</Typography>
            <Typography >{props.desc}</Typography>
        </div>
    );
};

export default BgBlock;