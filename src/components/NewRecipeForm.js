import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';

function NewRecipeForm(props) {
  const { createRecipe } = props;
  const [ name, setName, resetName ] = useInputState('');
  const [ description, setDescription, resetDescription ] = useInputState('');

  function handleSubmit(event) {
    event.preventDefault();
    createRecipe({ name, description });
    resetForm();
  }
  function resetForm() {
    resetName();
    resetDescription();
  }

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          label="Name"
          value={name}
          onChange={setName}
        />
        <TextField
          margin='normal'
          label="Description"
          value={description}
          onChange={setDescription}
        />
        <button>Add recipe</button>
      </form>
    </Paper>
  );
}

export default NewRecipeForm;
