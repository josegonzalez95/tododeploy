import React, { useState, useEffect, useRef } from 'react';
import shortid from 'shortid';

const TodoForm = (props) => {
  // keep updates and keep track of the state of value on the input field
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: input,
      // isComplete: false,
    });
    setInput('');
  };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type='text'
            placeholder='UPDATE TODO...'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            autoComplete='off'
            placeholder='ENTER TODO...'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            addTodo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
