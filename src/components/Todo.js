import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <span
        key={todo.id}
        style={
          todo.isComplete
            ? { textDecoration: 'line-through' }
            : { textDecoration: '' }
        }
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </span>
      <span className='icons'>
        <RiCloseCircleLine
          className='delete-icon'
          onClick={() => removeTodo(todo.id)}
        ></RiCloseCircleLine>
        <TiEdit
          className='edit-icon'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </span>
    </div>
  ));
}

export default Todo;
