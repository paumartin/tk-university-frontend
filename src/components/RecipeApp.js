import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RecipeList from './RecipeList';

function RecipeApp() {
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
  const [ recipes, setRecipes ] = useState(initialRecipes);

  function createIngredient(recipeId, ingredientName) {
    const ingredient = { id: uuid(), name: ingredientName };
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id !== recipeId) {
        return recipe;
      }
      const ingredients = [ ...(recipe.ingredients || [] ), ingredient ];
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
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>RECIPES APP</Typography>
        </Toolbar>
      </AppBar>
      <RecipeList
        recipes={recipes}
        createIngredient={createIngredient}
        deleteIngredient={deleteIngredient}
      />
    </Paper>
  );
}

export default RecipeApp;
