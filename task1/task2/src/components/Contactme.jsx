import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(
                'https://botiga-kvf9.onrender.com/contact/createContact',
                data,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            console.log("Contact me:", response.data);
            // Optionally, reset the form or provide user feedback here
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    console.error("Server responded with an error:", error.response.data);
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
                    console.error("Error in setting up the request:", error.message);
                }
            } else {
                console.error("Unexpected error:", error);
            }
        }
    };

    return (
        <div className='contact-container'>
            <form className='forms' onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='Names'
                    {...register('names', { required: 'Names are required' })}
                />
                {errors.names && <p>{errors.names.message}</p>}

                <input
                    type='email'
                    placeholder='Email'
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Entered value does not match email format'
                        }
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    type='text'
                    placeholder='Subject'
                    {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <p>{errors.subject.message}</p>}

                <textarea
                    placeholder='Message'
                    {...register('message', { required: 'Message is required' })}
                />
                {errors.message && <p>{errors.message.message}</p>}

                <button type='submit' className='button-form'>Contact me</button>
            </form>
        </div>
    );
}

export default Contact;
