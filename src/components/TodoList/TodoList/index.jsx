import PropTypes from "prop-types";
import React from "react";
import "./TodoList.scss";

TodoList.propTypes = {
  // pta, ptf tabs
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todo: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
