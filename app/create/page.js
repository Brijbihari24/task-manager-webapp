'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/actions/taskActions';
import { useRouter } from 'next/router';

const CreateTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createTask({ title, description }));
        router.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Task</button>
        </form>
    );
};

export default CreateTask;
