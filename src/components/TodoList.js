import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeTodo = todos.filter((todo) => todo.id !== id);
    setTodos(removeTodo);
  };

  return (
    <>
      <h1>Enter Todo Task</h1>
      <TodoForm onSubmit={addTodo} todos={todos}></TodoForm>
      <Todo
        removeTodo={removeTodo}
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
      ></Todo>
      <button className='todoClr-button' onClick={() => setTodos([])}>
        Clear TodoList
      </button>
    </>
  );
};

export default TodoList;
