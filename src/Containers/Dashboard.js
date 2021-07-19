

import { Button, ButtonGroup, Modal } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NewNote from '../components/NewNote';


const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
  
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <NewNote />
        </div>
    );
    return (
        <div>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button onClick={handleOpen}>Add Note</Button>
                <Button>All Notes</Button>
                <Button>Favourites</Button>
                <Button>Logout</Button>
            </ButtonGroup>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >{body}
            </Modal>
        </div>
    );
}

export default Dashboard;