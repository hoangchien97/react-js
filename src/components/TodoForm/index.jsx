import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    // console.log(11, e.target.value);
    setValue(e.target.value);
  }

  // event Submit
  function handleSubmitForm(e) {
    // prevent reloading browser
    e.preventDefault();
    if (!onSubmit) return;

    const formValues = {
      title: value,
    };
    onSubmit(formValues);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input type="text" value={value} onChange={(e) => handleValueChange(e)} />
    </form>
  );
}

export default TodoForm;
