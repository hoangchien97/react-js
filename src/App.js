import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' }
  ]);

  function handleTodoClick(todo) {
    const newTodoList = todoList.filter(x => x.id !== todo.id)
    setTodoList(newTodoList)
  }

  function handleTodoFormClick(formValues) {
    // console.log("form values", formValues);
    // ada new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      // title: formVaues
      ...formValues // lấy hết obj
    }
    const newTodoList = [...todoList]
    newTodoList.push(newTodo)
    setTodoList(newTodoList)
  }

  return (
    <div className="app">
      <h1>Welcom to React Hooks!</h1>
      {/* < + ten Component. auto import */}
      <TodoForm onSubmit={handleTodoFormClick}></TodoForm>
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}

export default App;
