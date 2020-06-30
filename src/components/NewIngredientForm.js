import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function NewRecipeForm(props) {
  const { createIngredient } = props;
  const [ name, setName, resetName ] = useInputState('');

  function handleSubmit(event) {
    event.preventDefault();
    createIngredient(name);
    resetName();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin='normal'
        label="Name"
        value={name}
        onChange={setName}
      />
      <IconButton>
        <SendIcon />
      </IconButton>
    </form>
  );
}

export default NewRecipeForm;
