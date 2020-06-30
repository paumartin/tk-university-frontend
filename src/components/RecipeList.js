import React from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import RecipeDetail from './RecipeDetail';

function RecipeList(props) {
  const { createIngredient, deleteIngredient } = props;

  const recipes = props.recipes.map(recipe => (
    <Grid key={recipe.id} item xs={12} md={4} lg={2} style={{ margin: '1rem' }}>
      <RecipeDetail
        { ...recipe }
        createIngredient={createIngredient}
        deleteIngredient={deleteIngredient}
      />
      <Divider />
    </Grid>
  ));
  return (
    <Grid container>
      { recipes }
    </Grid>
  );
}

export default RecipeList;
