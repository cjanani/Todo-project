import React, { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const taskInputRef = useRef(null); // Ref to store reference of the input field

  // useEffect to update task count whenever tasks state changes
  useEffect(() => {
    document.h4 = `You have (${tasks.length}) task(s)`; // Update document title with task count
  }, [tasks]);

  // useCallback to memoize the function to add a task
  const handleAddTask = useCallback(() => {
    if (inputValue.trim() === '') return; // empty task check
    if (editIndex === -1) {
      // Add new task
      setTasks([...tasks, inputValue]);
    } else {
      // Edit existing task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = inputValue;
      setTasks(updatedTasks);
      setEditIndex(-1); // Reset edit mode
    }
    setInputValue(''); // Clear input field
    
    taskInputRef.current.focus(); // Focus back on input field after adding/editing task
  }, [tasks, editIndex, inputValue]);

  // useCallback to memoize the function to edit a task
  const handleEditTask = useCallback((index) => {
    setInputValue(tasks[index]);
    setEditIndex(index);
    taskInputRef.current.focus(); // Focus on input field when editing task
  }, [tasks]);

  // useCallback to memoize the function to delete a task
  const handleDeleteTask = useCallback((index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }, [tasks]);

  return (
    <div className='container'>
      <div className='containerstart'>
      <h1>TODO List</h1>

      <input
        className='inputbox'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={taskInputRef} // Assign ref to input field
        placeholder="Enter task"
      />


      <button onClick={handleAddTask}>{editIndex === -1 ? 'Add Task' : 'Update Task'}</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
      <div className='containerend'>
        <h4>You have {tasks.length} task(s)</h4>
      </div> 
    </div>
  );
};

export default TodoApp;
