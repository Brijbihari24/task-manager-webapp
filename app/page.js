'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchTasks, deleteTask, toggleTaskComplete } from '../redux/actions/task_action';
import Link from 'next/link';
import {
  useCreateTask,
  useAllTasks,
  useGetDropdownOptions,
} from "@/shared/hooks/useTask";

const Home = () => {
  // const dispatch = useDispatch();
  // const { tasks, loading, error } = useSelector(state => state.tasks);

  const [task, addData] = useCreateTask();
  const { add_task_loading } = task;

  const [data, setPageNumber, deleteBtnClicked] = useAllTasks();
  const { tasks_loading, tasks, total_tasks, page, pages } = data;

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  // const handleDelete = id => {
  //   if (confirm('Are you sure you want to delete this task?')) {
  //     dispatch(deleteTask(id));
  //   }
  // };

  // const handleToggle = id => {
  //   dispatch(toggleTaskComplete(id));
  // };

  return (
    <div>
      <h1>Task Manager</h1>
      <Link href="/create">

        <button>Create Task</button>

      </Link>
      {tasks_loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p>{task.completed ? 'Completed' : 'Incomplete'}</p>
              <button onClick={() => handleToggle(task._id)}>
                {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
              </button>
              <Link href={`/edit/${task._id}`}>

                <button>Edit</button>

              </Link>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
