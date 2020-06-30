import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function RecipeDeleteDialog(props) {
  const { open, toggleDialog, deleteRecipe } = props;

  function handleDelete() {
    deleteRecipe();
    toggleDialog();
  }

  return (
    <Dialog
      open={open}
      onClose={toggleDialog}
    >
      <DialogTitle>Delete recipe confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this recipe?
          You will lose all the data for this recipe
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDialog} color='primary'>Cancel</Button>
        <Button onClick={handleDelete} color='primary'>Delete recipe</Button>
      </DialogActions>
    </Dialog>
  );
}

export default RecipeDeleteDialog;
