import React  from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import useInputState from '../hooks/useInputState';
import useToggle from '../hooks/useToggle';

const useStyles = makeStyles(theme => ({
  textField: {
    display: 'flex'
  }
}));

function RecipeDialog(props) {
  const classes = useStyles();
  const { initialName, initialDescription, open, toggleDialog, dialogTitle, sendForm } = props;

  const [ name, setName, resetName ] = useInputState(initialName);
  const [ description, setDescription, resetDescription ] = useInputState(initialDescription);
  const [ formDirty, toggleFormDirty ] = useToggle();

  function handleSendForm() {
    if (name && description) {
      sendForm(name, description);
      handleClose();
      return;
    }
    if (!formDirty) {
      toggleFormDirty();
    }
  }

  function handleClose() {
    resetName();
    resetDescription();
    toggleDialog()
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Insert the name and the description of the recipe
        </DialogContentText>
        <form>
          <TextField
            error={formDirty && !name}
            helperText={formDirty && !name ? 'Required field' : null}
            className={classes.textField}
            margin='normal'
            label="Name"
            value={name}
            onChange={setName}
          />
          <TextField
            error={formDirty && !description}
            helperText={formDirty && !description ? 'Required field' : null}
            className={classes.textField}
            margin='normal'
            label="Description"
            value={description}
            onChange={setDescription}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          onClick={handleClose}
        >
          Close
        </Button>
        <Button
          color='primary'
          onClick={handleSendForm}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RecipeDialog;
