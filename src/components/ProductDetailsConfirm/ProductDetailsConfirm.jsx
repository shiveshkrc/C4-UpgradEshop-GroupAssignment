import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Container, Typography, Card, CardMedia, CardContent} from '@mui/material';

const ProductDetailsConfirm = () => {
    return ( <>
    <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}></Container>

        {/* Card showing product details to confirm */}
        <Card sx={{ width: 900, height: 350, display: 'flex', flexDirection: 'row'}}>
            {/* Product image */}
            <CardMedia sx={{maxWidth: 380}} component="img" height='350px' alt="product image" image='https://storage.sg.content-cdn.io/cdn-cgi/image/width=600,height=800,quality=60,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITMDN00486Dark%20Wash_1nw.Jpg'></CardMedia>
            <CardContent >
                {/* Product name*/}
                <div style={{padding: 6, display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h5' component='span' >LEVI Jeans </Typography>
                </div>
                {/* Product Quantity */}
                <div style={{padding: 6, fontSize: 14}}>
                    <Typography component='span'>Quantity: </Typography><Typography component='span' fontWeight='bold'>1</Typography>
                </div>
                {/*  Product Category */}
                <div style={{padding: 6, fontSize: 14}}>
                    <Typography component='span'>Category: </Typography><Typography component='span' fontWeight='bold'>Apparel</Typography>
                </div>
                {/*  Product Description */}
                <Typography style={{padding: 6, marginBottom: 4}} fontStyle='italic'>Some info / description of the product, lorem ipsum dolor sit amet.</Typography>
                <div style={{padding: 6, color: 'red', display: 'flex', alignItems: 'center'}}>
                    {/*  Total Price here */}
                    <Typography component='span' variant='h6'>Total Price : </Typography>
                    <CurrencyRupeeIcon /> <Typography component='span' variant='h6'>1700</Typography>
                </div>
            </CardContent>
        </Card>
    <Container/>
    </> );
}

export default ProductDetailsConfirm;