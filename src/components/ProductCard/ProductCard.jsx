import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Container, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductCard = (props) => {
    const actionIcons = {color: 'gray', mx: 1.5} // style for edit and delete icons..
    const style = { margin: 0, padding: 0 , display: 'flex', justifyContent: 'space-between'}; // style for pdt name and price div
    return ( <>
        <Card key={props.products._id.$oid} sx={{maxWidth: 330, margin: 2 }}>
            <CardActionArea> {/* ../../assets/adidas_galaxy5_shoes.png */ }
            {/* Product Image */}
                <CardMedia component="img" height="200" image={props.products.imageURL} alt={props.products.name}/>
            </CardActionArea>
            <CardContent> {/* Product Name and Price Div */}
                <div style={style}>
                    <Typography gutterBottom variant="h6" id='pdtname'>{props.products.name}</Typography>
                    <Typography gutterBottom variant="h6" id='pdtprice'>
                        <CurrencyRupeeIcon sx={{fontSize: 18}} />
                        {props.products.price}
                    </Typography>
                </div>
                {/* Product description / info */}
                <Typography variant="body2" color="text.secondary">
                    {props.products.description}
                </Typography>
            </CardContent>
            {/* Buy button */}
            <CardActions sx={{justifyContent: 'space-between', pb: 1, mx: 1 }}>
                <Button size="small" variant="contained">BUY</Button>
                <span> {/* Edit and delete icons */}
                    <EditIcon sx={actionIcons}></EditIcon>
                    <DeleteIcon sx={actionIcons}></DeleteIcon>
                </span>
            </CardActions>
        </Card>
    </> );
}

export default ProductCard;
