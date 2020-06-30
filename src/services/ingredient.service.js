// TODO: Improve services

import { post, remove } from './base.service';

export const createIngredient = (recipeId, ingredient) => {
  return post(
    `recipe/${recipeId}/ingredients/`,
    ingredient
  );
};

export const deleteIngredient = (recipeId, ingredientId) => {
  return remove(`recipe/${recipeId}/ingredients/${ingredientId}/`);
};

