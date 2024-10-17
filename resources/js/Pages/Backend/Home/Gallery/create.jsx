import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import './create.css'

const Create = () => {
    // Set up state for form inputs
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
    });

    // Handle form submission
    const submit = (e) => {
        e.preventDefault();
        post(route('your.route.name'));  // Replace with your route name
    };

    return (
        <div>
            <h1>Create New Item</h1>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    {errors.title && <span>{errors.title}</span>}
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    ></textarea>
                    {errors.description && <span>{errors.description}</span>}
                </div>

                <button type="submit" disabled={processing} > Create
                    
                </button>
            </form>
        </div>
    );
};

export default Create;
