import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from "./styles";
import {Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add'

const Form = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = styles();

    return (
        <div className={classes.fab}>
           <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
               <AddIcon />
           </Fab>
            <Dialog maxWidth="sm" fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Note</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        color="secondary"
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        autoFocus
                        multiline
                        rows={4}
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        color="secondary"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Form;
