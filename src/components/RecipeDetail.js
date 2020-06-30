import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useToggle from '../hooks/useToggle';

import IngredientList from './IngredientList';
import RecipeDialog from './RecipeDialog';

function RecipeDetail(props) {
  const { id, name, description, ingredients = [],
    updateRecipe, createIngredient, deleteIngredient } = props;
  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ dialogOpen, toggleDialog ] = useToggle();

  function handleSendForm(updatedName, updatedDescription) {
    updateRecipe(id, updatedName, updatedDescription);
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function handleEdit() {
    toggleDialog();
    handleClose();
  }
  function handleDelete() {
    // TODO: Show confirm delete
    handleClose();
  }

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label='settings' onClick={handleClick}>
            <MoreVertIcon/>
          </IconButton>
        }
        title={name}
        subheader={description}
      >
      </CardHeader>
      <Divider/>
      <CardContent>
        <IngredientList
          recipeId={id}
          ingredients={ingredients}
          createIngredient={createIngredient}
          deleteIngredient={deleteIngredient}
        />
      </CardContent>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <RecipeDialog
        title='Edit recipe'
        open={dialogOpen}
        toggleDialog={toggleDialog}
        sendForm={handleSendForm}
        initialName={name}
        initialDescription={description}
      />
    </Card>
  );
}

export default RecipeDetail;
