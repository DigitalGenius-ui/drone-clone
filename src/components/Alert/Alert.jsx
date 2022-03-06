import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { DroneState } from '../../context/Context';
import { Alert } from '@material-ui/lab';

export default function AlertMessage() {
    const {message, setMessage} = DroneState();

  const {open, text, type } = message;

  const handleClose = () => {
    setMessage({ ...message, open: false });
  };

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={1500}
      >
          <Alert severity={type}>{text}</Alert>
    </Snackbar>
    </div>
  );
}