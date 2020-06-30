import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function IngredientItem(props) {
  const { recipeId, id, name, deleteIngredient } = props;

  function handleDeleteIngredient() {
    deleteIngredient(recipeId, id);
  }

  return (
    <ListItem>
      <ListItemText>{ name }</ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={handleDeleteIngredient}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default IngredientItem;
