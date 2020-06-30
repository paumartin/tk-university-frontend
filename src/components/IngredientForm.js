import React from 'react';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';

function IngredientForm(props) {
  const { recipeId, createIngredient } = props;
  const [ name, setName ] = useInputState('');

  function handleSubmit() {
    createIngredient({ recipeId, name });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField value={name} onChange={setName} />
        <button>Add ingredient</button>
      </form>
    </div>
  )
}

export default IngredientForm;
