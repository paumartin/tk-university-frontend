import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import IngredientList from './IngredientList';

function RecipeDetail(props) {
  const { id, name, description, ingredients, createIngredient, deleteIngredient } = props;

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={description}
      />
      <Divider />
      <CardContent>
        <IngredientList
          recipeId={id}
          ingredients={ingredients}
          createIngredient={createIngredient}
          deleteIngredient={deleteIngredient}
        />
      </CardContent>
    </Card>
  );
}

export default RecipeDetail;
