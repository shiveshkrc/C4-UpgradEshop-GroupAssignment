import { Container, Typography, Card, Divider } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React from 'react';

const OrderDetails = () => {
    return ( <>
        <Container >
            <Card sx={{width: '100%', p: 2, display: 'flex'}}>
                <div id='productdetail' style={{ display: 'flex', flexDirection: 'column', width: '65%'}}>
                                            {/*Product name here*/}
                    <Typography variant='h6' sx={{padding: 1}}>Product Name</Typography>
                    <div style={{padding: 6, fontSize: 14}}>        {/*Product Quantity*/}
                        <Typography component='span'>Quantity: </Typography><Typography component='span' fontWeight='bold'>1</Typography>
                    </div>
                    <div style={{padding: 6, fontSize: 14}}>        {/*Product Category*/}
                        <Typography component='span'>Category: </Typography><Typography component='span' fontWeight='bold'>Apparel</Typography>
                    </div>
                    {/* Product descirption */}
                    <Typography style={{padding: 6, marginBottom: 4}} fontStyle='italic'>Some info / description of the product, lorem ipsum dolor sit amet.</Typography>

                    {/*Total price section */}
                    <div style={{padding: 6, color: 'red', display: 'flex', alignItems: 'center'}}>
                        <Typography component='span' variant='h6'>Total Price : </Typography>
                        <CurrencyRupeeIcon /> <Typography component='span' variant='h6'>1700</Typography>
                    </div>
                </div>

                {/* vertical line dividing the details sections */}
                <Divider orientation='vertical' flexItem sx={{m: 1}}/>

                <div id='addressdetail' style={{width: '35%'}}>
                    {/* Address comes here */}
                    <Typography variant='h6' sx={{padding: 1}}>Address Details</Typography>
                    <div style={{padding: 6}}>
                        <Typography variant='body1'>Address Line1</Typography>
                        <Typography variant='body1'>Address Line2</Typography>
                        <Typography variant='body1'>Address Line3</Typography>
                        <Typography variant='body1'>Address Line4</Typography>
                        <Typography variant='body1'>Address Line5</Typography>
                    </div>
                </div>
            </Card>
        </Container>
    </> );
}

export default OrderDetails;