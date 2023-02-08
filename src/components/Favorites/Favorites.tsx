import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@material-ui/core';
import classes from './Favorite.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import ServiceHandler from '../services/ServiceHandler';
import { Favorite } from '@mui/icons-material';
import {favoriteMoviesActions} from '../../store/index'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Favorites() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const favoriteMovies = useSelector((state:RootState)=>state.favoriteSlice.favoriteMovies)
  const email = useSelector((state:RootState)=>state.authSlice.userEmail)
  const dispatch = useDispatch();

  const removeMovieToFavorites = async (movieTitle:string) => {
    if(email) {
        const res = await ServiceHandler.deleteMovieFromUserFavorites(email,movieTitle);
        dispatch(favoriteMoviesActions.removeMovieFromFavorites(res.data))
    }
  }

  return (
    <div>
      <div>  
      <span style={{color:'white'}}>{favoriteMovies.length > 0 ? favoriteMovies.length : ''}</span>  
      <Button startIcon={<Favorite />} style={{color:'white'}} onClick={handleOpen}>Favorites</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            Favorite movies:
          </Typography>
          {favoriteMovies.map((movie:string)=> (
          <div className={classes['delete-btn-div']}>  
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {movie}
            </Typography>
            <Button variant="outlined" onClick={()=>removeMovieToFavorites(movie)}>
                Delete
            </Button>
          </div>
          ) )}
            <div className={classes['button-container']}>
                <Button variant='outlined' onClick={()=>setOpen(false)}>Close</Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}