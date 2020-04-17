import React, { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' }
  ]);

  function handleTodoClick(todo) {
    // c1
    const newTodoList = todoList.filter(x => x.id !== todo.id)
    setTodoList(newTodoList)

    // c2
    // const index = todoList.findIndex(x => x.id === todo.id)
    // // tim thay return > 0. k tim thay return -1
    // if (index < 0) return;
    // const newTodoList = [...todoList]
    // newTodoList.splice(index, 1)
    // setTodoList(newTodoList)
  }


  return (
    <div className="app">
      <h1>Welcom to React Hooks!</h1>
      {/* < + ten Component. auto import */}
      <TodoList todos={todoList} onTodoClick={handleTodoClick}></TodoList>
    </div>
  );
}

export default App;
