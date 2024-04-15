import {
    Box,
    Button,
    Modal,
    Stack,
    TextField,
    Typography,
  } from '@mui/material';
  import React from 'react';
  import Buttons from '../Buttons/Buttons';
  import CloseIcon from '@mui/icons-material/Close';
  
  const style = {
    container: {
      width: 'clamp(10px, 100%, 568px)',
      position: 'absolute',
      top: '48%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
  
      color: 'var(--black-color)',
      bgcolor: 'var(--white-color)',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    },
    closeIcon: {
      position: 'absolute',
      top: '55px',
      right: '30px',
    },
    summitBtn: {
      background: 'var(--primary-color)',
      color: 'var(--white-color)',
    },
    inputBox: {
      '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--primary-color)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--primary-color)',
        },
      },
      '& label.Mui-focused': {
        color: 'var(--primary-color)',
      },
    },
  };
  
  const Modals = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Buttons handleOpen={handleOpen} text={'Give Feedback'} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.container}>
            <Stack spacing={2}>
              <Box style={style.closeIcon}>
                <CloseIcon onClick={handleClose} />
              </Box>
              <Typography
                id="modal-modal-title"
                variant="h4"
                sx={{ textAlign: 'center' }}
              >
                Feedback
              </Typography>
  
              <TextField
                required
                variant="outlined"
                label="Full name"
                fullWidth
                name="fullname"
                sx={style.inputBox}
              />
              <TextField
                required
                variant="outlined"
                label="Email ID"
                fullWidth
                name="emailid"
                sx={style.inputBox}
              />
              <TextField
                required
                variant="outlined"
                label="Subject"
                fullWidth
                name="subject"
                sx={style.inputBox}
              />
              <TextField
                variant="outlined"
                label="Description"
                name="description"
                multiline
                rows={3}
                maxRows={4}
                sx={style.inputBox}
              />
  
              <Button sx={style.summitBtn}>Summit Feedback</Button>
            </Stack>
          </Box>
        </Modal>
      </div>
    );
  };
  
  export default Modals;