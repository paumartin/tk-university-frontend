// TODO: Improve services

import { get, post, patch, remove } from './base.service';

export const getRecipes = () => {
  return get('recipe/');
};

export const createRecipe = (recipe) => {
  return post('recipe/', recipe);
};

export const updateRecipe = (id, recipe) => {
  return patch(
    `recipe/${id}/`,
    recipe
  );
};

export const deleteRecipe = (id) => {
  return remove(`recipe/${id}/`);
};
