'use client'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    useCreateTask,
    useAllTasks,
    useGetDropdownOptions,
} from "@/shared/hooks/useTask";
import { useRouter } from 'next/router';

const CreateTask = () => {
    const [task, addData] = useCreateTask();
    const { add_task_loading } = task;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addData({ title, description }));
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
