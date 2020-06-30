import React from 'react';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';

import useInputState from '../hooks/useInputState';
import useToggle from '../hooks/useToggle';

function IngredientAdd(props) {
  const { recipeId, createIngredient } = props;
  const [ name, setName, resetName ] = useInputState();
  const [ showForm, toggleShowForm ] = useToggle();

  function handleCreateIngredient() {
    if (name) {
      createIngredient(recipeId, name);
    }
    resetName();
    toggleShowForm();
  }

  return (
    showForm ? (
      <div style={{ display: 'inline-flex' }}>
        <TextField
          label="Name"
          value={name}
          onChange={setName}
        />
        <IconButton onClick={handleCreateIngredient}>
          <SendIcon/>
        </IconButton>
      </div>
    ) : (
      <IconButton onClick={toggleShowForm}>
        <AddIcon/>
      </IconButton>
    )
  );
}

export default IngredientAdd;
