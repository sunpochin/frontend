import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const taskFn = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
    console.log('taskFn data: ', data, 'taskFn createdTask: ', createdTask);
  }

  const enterTaskHandler = async (taskText) => {

    sendTaskRequest({url: 'https://react-http-6ba38-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', 
    method: 'POST', 
    body: { text: taskText }}, 
    taskFn.bind(null, taskText) ) 

    // try {
    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
