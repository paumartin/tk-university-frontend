import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useToggle from '../hooks/useToggle';

import * as IngredientService from '../services/ingredient.service';
import * as RecipeService from '../services/recipe.service';

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

function RecipeApp() {
  const classes = useStyles();
  const [ dialogOpen, toggleDialog ] = useToggle();

  const [ recipes, setRecipes ] = useState([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  function loadRecipes() {
    RecipeService.getRecipes()
      .then(response => {
        setRecipes(response);
      });
  }

  function createRecipe(name, description) {
    const recipe = { name, description };
    RecipeService.createRecipe(recipe)
      .then(() => {
        loadRecipes();
      });
  }
  function updateRecipe(id, name, description) {
    const recipe = { name, description };
    RecipeService.updateRecipe(id, recipe)
      .then(() => {
        loadRecipes();
      });
  }
  function deleteRecipe(id) {
    RecipeService.deleteRecipe(id)
      .then(() => {
        loadRecipes();
      });
  }
  function createIngredient(recipeId, name) {
    const ingredient = { name };
    IngredientService.createIngredient(recipeId, ingredient)
      .then(() => {
        loadRecipes();
      });
  }
  function deleteIngredient(recipeId, ingredientId) {
    IngredientService.deleteIngredient(recipeId, ingredientId)
      .then(() => {
        loadRecipes();
      });
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
        updateRecipe={updateRecipe}
        deleteRecipe={deleteRecipe}
        createIngredient={createIngredient}
        deleteIngredient={deleteIngredient}
      />
      <RecipeDialog
        title='Create recipe'
        open={dialogOpen}
        toggleDialog={toggleDialog}
        sendForm={createRecipe}
      />
    </Paper>
  );
}

export default RecipeApp;
