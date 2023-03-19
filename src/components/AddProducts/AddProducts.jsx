import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

const style={display: 'flex', justifyContent: 'center', justifyItems: 'center'}
const formControlStyle = { margin: 1.5, width: 300, display: 'block'}; // style for the inputs

// main AddProducts component
const AddProductsPage = () => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return ( <>
        <Container sx={{display: 'flex',justifyContent: 'center', flexDirection: 'column'}}>
        <div >          {/* Add product heading */}
            <Typography variant="h5" sx={{p: 2}}>Add Product</Typography>
        </div>
        <form>                 {/* Form inputs */}
                    <FormControl id='pname' sx={formControlStyle}>
                        <TextField label="Name *" variant="outlined" size="small" 
                        type='text' name='pname' fullWidth></TextField>
                    </FormControl>
                    <FormControl id='category' sx={{minWidth: 300, m: 1.5}} size="small" >
                        {/* Category select dropdown */}
                        <InputLabel id="cateogry-select">Category *</InputLabel>
                        <Select labelId="category-select" id="category-select" value={category}
                            label="Category *" onChange={handleChange} >
                            <MenuItem value="">
                            <em>Select...</em>
                            </MenuItem>
                            <MenuItem value="furniture">Furniture</MenuItem>
                            <MenuItem value="apparel">Apparel</MenuItem>
                            <MenuItem value="electronics">Electronics</MenuItem>
                            <MenuItem value="personalcare">Personal Care</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl id='manufacturer' sx={formControlStyle}>
                        <TextField label="Manufacturer *" variant="outlined" size="small" 
                        type='text' name='manufacturer' fullWidth></TextField>
                    </FormControl>
                    <FormControl id='availableitems' sx={formControlStyle}>
                        <TextField label="Available Items *" variant="outlined" size="small" 
                        type='number' name='availableitems' fullWidth></TextField>
                    </FormControl>
                    <FormControl id='price' sx={formControlStyle}>
                        <TextField label="Price *" variant="outlined" size="small" 
                        type='number' name='price' fullWidth></TextField>
                    </FormControl>
                    <FormControl id='imgurl' sx={formControlStyle}>
                        <TextField label="Image URL" variant="outlined" size="small" 
                        type='text' name='imgurl' fullWidth></TextField>
                    </FormControl>
                    <FormControl id='pdesc' sx={formControlStyle}>
                        <TextField label="Product Description" variant="outlined" size="small" 
                        type='text' name='pdesc' fullWidth></TextField>
                    </FormControl>

                        {/* Button to save the new Product */}
                    <Button sx={formControlStyle} size="small" variant="contained" color='primary'>ADD PRODUCT</Button>
                </form>
        </Container>
    </> );
}

export default AddProductsPage;