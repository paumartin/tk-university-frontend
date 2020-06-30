import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useToggle from '../hooks/useToggle';

import RecipeList from './RecipeList';
import RecipeDialog from './RecipeDialog';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'static',
    height: '64px'
  },
  title: {
    flexGrow: 1
  }
}));

// Mocked data
const initialRecipes = [{
  id: 1,
  name: 'Recipe 1',
  description: 'Description blah blah blah blah',
  ingredients: [ { id: 1, name: 'Ingredient 1' }, { id: 2, name: 'Ingredient 2'}, { id: 3, name: 'Ingredient 3'} ]
}, {
  id: 2,
  name: 'Recipe 2',
  description: 'Description blah blah blah blah',
  ingredients: [ { id: 1, name: 'Ingredient 1' }, { id: 2, name: 'Ingredient 2'} ]
}]

function RecipeApp() {
  const classes = useStyles();
  const [ dialogOpen, toggleDialog ] = useToggle();

  const [ recipes, setRecipes ] = useState(initialRecipes);

  function createRecipe(name, description) {
    // TODO: Call API
    const recipe = { id: uuid(), name, description };
    setRecipes([ ...recipes, recipe ]);
  }
  function createIngredient(recipeId, ingredientName) {
    // TODO: Call API
    const ingredient = { id: uuid(), name: ingredientName };
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id !== recipeId) {
        return recipe;
      }
      const ingredients = [ ...(recipe.ingredients || []), ingredient ];
      return { ...recipe, ingredients };
    });
    setRecipes(updatedRecipes);
  }
  function deleteIngredient(recipeId, ingredientId) {
    // TODO: Call API
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id !== recipeId) {
        return recipe;
      }
      const filteredIngredients = (recipe.ingredients || []).filter(ingredient => ingredient.id !== ingredientId);
      return { ...recipe, ingredients: filteredIngredients }
    });
    setRecipes(updatedRecipes);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography color='inherit' className={classes.title}>RECIPES APP</Typography>
          <Button color="inherit" onClick={toggleDialog}>Create recipe</Button>
        </Toolbar>
      </AppBar>
      <RecipeList
        recipes={recipes}
        createIngredient={createIngredient}
        deleteIngredient={deleteIngredient}
      />
      <RecipeDialog
        dialogTitle='Create recipe'
        open={dialogOpen}
        toggleDialog={toggleDialog}
        sendForm={createRecipe}
      />
    </Paper>
  );
}

export default RecipeApp;
