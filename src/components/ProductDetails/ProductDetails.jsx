import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Container, Typography, FormControl, Chip, Card, CardMedia, CardContent, TextField, CardActions, Button } from '@mui/material';

const ProductDetails = () => {
    return ( <>
    <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}></Container>
        {/* Product details card*/}
        <Card sx={{ width: 900, height: 350, display: 'flex', flexDirection: 'row'}}>
            {/*Product Image here*/}
            <CardMedia sx={{maxWidth: 380}} component="img" height='350px' alt="product image" image='https://storage.sg.content-cdn.io/cdn-cgi/image/width=600,height=800,quality=60,format=auto,fit=cover,g=top/in-resources/22a79ec5-e694-4d7a-ac5a-85c8fa45b7f1/Images/ProductImages/Source/ITMDN00486Dark%20Wash_1nw.Jpg'></CardMedia>
            <CardContent >
                <div style={{padding: 6, display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h5' component='span' >LEVI Jeans </Typography> {/*Product Name*/}
                    <Chip sx={{mx: 2}} color='primary' size="small" label='Item Availability: 146'></Chip>
                </div>
                <div style={{padding: 6}}> {/*Product Category*/}
                    <Typography component='span'>Category: </Typography><Typography component='span' fontWeight='bold'>Apparel</Typography>
                </div>      {/*Product description*/}
                <Typography style={{padding: 6, marginBottom: 4}} fontStyle='italic'>Some info / description of the product, lorem ipsum dolor sit amet.</Typography>
                <div style={{padding: 6, color: 'red', display: 'flex', alignItems: 'center'}}>
                    {/*Product Price*/}
                    <CurrencyRupeeIcon /> <Typography component='span' variant='h6'>1700</Typography>
                </div>
                <FormControl sx={{my: 2, mx: 1}}> {/* Box to enter quantity */}
                    <TextField id="outlined-basic" label="Enter Quantity *" type='number' variant="outlined" size="small"/>
                </FormControl>
                <CardActions> {/* Order button */}
                <Button size="small" variant="contained">PLACE ORDER</Button>
                </CardActions>
            </CardContent>
        </Card>
    <Container/>
    </> );
}

export default ProductDetails;