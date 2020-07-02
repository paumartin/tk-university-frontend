import React from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import IngredientAdd from './IngredientAdd';
import IngredientItem from './IngredientItem';

function IngredientList(props) {
  const { recipeId, ingredients, createIngredient, deleteIngredient } = props;
  const mappedIngredients = (ingredients || []).map(ingredient => (
    <IngredientItem
      key={ingredient.id}
      recipeId={recipeId}
      id={ingredient.id}
      name={ingredient.name}
      deleteIngredient={deleteIngredient}
    />
  ));

  return (
    <>
      { ingredients.length ? (
        <>
          <List>
            { mappedIngredients }
          </List>
          <Divider />
        </>
      ) : null }
      <List>
        <ListItem key='add-ingredient-key'>
          <ListItemText style={{ textAlign: 'center', height: '1rem' }}>
            <IngredientAdd
              recipeId={recipeId}
              createIngredient={createIngredient}
            />
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

export default IngredientList;
