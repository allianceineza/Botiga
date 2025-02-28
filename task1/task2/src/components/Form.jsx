import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Home() {
    const { register, handleSubmit, watch } = useForm();
    
    const onSubmit = async (data) => {
        const { productTitle,images, productprice, productContent } = data;
        
        const formData = new FormData();
        try {
            formData.append('productTitle', productTitle);
            formData.append('images', images[0]); // Ensure we get the first file
            formData.append('productPrice', productprice);
            formData.append('productContent', productContent);

            const results = await axios.post(
                'https://botiga-kvf9.onrender.com/product/createProduct',
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            console.log("Product Created:", results.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className='form-container'>
            <form className='forms' onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type='text' 
                    placeholder='Product Title' 
                    {...register('productTitle', { required: true })} 
                />

                <label htmlFor='productimage'>Product Images:</label>
                <input 
                    type='file' 
                    id='productimage' 
                    {...register('images', { required: true })} 
                />

                <input 
                    type='text' 
                    placeholder='Product Content' 
                    {...register('productContent', { required: true })} 
                />

                <input 
                    type='text' 
                    placeholder='Product Price' 
                    {...register('productprice', { required: true })} 
                />

                <button type='submit' className='button-form'>Create Product</button>
            </form>
        </div>
    );
}

export default Home;
