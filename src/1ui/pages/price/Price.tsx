import React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cl from './Price.module.css'

const tarifs = [
    {title: "One recipient", subheader: "up to 10 kg",minPrice:"60 UAH",minPriceText:"",desc:"No weight allowance!"},
    {title: "Multiple recipients", subheader: "up to 10 kg",minPrice:"55 UAH",minPriceText:"each item",desc:"No weight allowance!"},
    {title: "One recipient", subheader: "up to 100 kg",minPrice:"65 UAH",minPriceText:"",desc:"+ UAH 3 for each kg over 10 kg"},
    {title: "Multiple recipients", subheader: "up to 100 kg",minPrice:"60 UAH",minPriceText:"each item",desc:"+ UAH 3 for each kg over 10 kg"},
    {title: "Out of city", subheader: "up to 10 kg",minPrice:"70 UAH",minPriceText:"",desc:"No weight allowance!"},
    {title: "Out of city", subheader: "up to 100 kg",minPrice:"70 UAH",minPriceText:"",desc:"+ UAH 3 for each kg over 10 kg"},
]
type tarifsType={
    title:string
    subheader:string
    minPrice:string
    minPriceText:string
    desc:string
}
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const RecipeReviewCard = ({title,subheader,minPrice,minPriceText,desc}:tarifsType) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{maxWidth: 345, m:1}}>
            <CardHeader sx={{background:"#0b6eb0"}}
                // avatar={
                //     <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                //         R
                //     </Avatar>
                // }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />
            {/*<CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish"/>*/}
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

const Price = () => {
    return (
        <div className={cl.root}>
            {tarifs.map(t=> <RecipeReviewCard desc={t.desc} title={t.title} minPrice={t.minPrice} minPriceText={t.minPriceText} subheader={t.subheader}/>)}
        </ div>
    );
};

export default Price;

