import React, { useState, useEffect } from 'react';
import { Container, ToggleButtonGroup, ToggleButton, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import productsArr from '../../common/products';

const Products = () => {
    const [category, setCategory] = React.useState('all'); // state for category
    const [sortby, setSortBy] = React.useState('default'); // state for sort by
    const [products, setProducts] = React.useState(productsArr);

    const handleSelectChange = (event) => { // sort by dropdown change handler
        setSortBy(event.target.value);
        console.log(sortby);
        if(sortby==='ltoh'){
            
        }else if(sortby==='htol'){

        }else if(sortby==='newest'){

        }
    };

    const handleChange = (event) => { // category toggle handler
        setCategory(event.target.value);
        console.log(category);
    };
    
    return ( <>
        {/* Container for Toggle buttons to select category */}
        <Container sx={{display: 'flex', justifyContent: 'center', margin: 2}} maxWidth='xl'>
            <ToggleButtonGroup color='primary' value={category} exclusive onChange={handleChange}>
                <ToggleButton value="all">ALL</ToggleButton>
                <ToggleButton value="apparel">APPAREL</ToggleButton>
                <ToggleButton value="electronics">ELECTRONICS</ToggleButton>
                <ToggleButton value="personalcare">PERSONAL CARE</ToggleButton>
            </ToggleButtonGroup>
        </Container>

        {/* Container for Sort by option to sort the products */}
        <Container sx={{mx: 2}}>
                <Typography >Sort By: </Typography>
                <Select defaultValue='Select..' size="small" displayEmpty id="demo-select-small" value={sortby} onChange={handleSelectChange}>
                    <MenuItem value="" disabled>Select..</MenuItem>
                    <MenuItem value="default">Default</MenuItem>
                    <MenuItem value="ltoh">Price: Low to High</MenuItem>
                    <MenuItem value="htol">Price: High to Low</MenuItem>
                    <MenuItem value="newest">Newest</MenuItem>
                </Select>
        </Container>

        {/* Container for displaying product cards */}
        <Container sx={{display: 'flex', flexWrap: 'wrap', maxWidth: 'xl', justifyContent: 'space-evenly'}}>
            {productsArr.map( products => (
                (<ProductCard key={products._id.$oid} products={products}></ProductCard>)
            ))}
        </Container>
    </> );
}

export default Products;