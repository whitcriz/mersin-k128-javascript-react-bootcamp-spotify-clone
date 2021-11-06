import React from 'react';
import './Footer.css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';


function Footer() {
    return (
        <div className="footer">

            <div className="footer__left">
               <img
                  className="footer__albumLogo" 
                  src="https://img.discogs.com/sJWDGGuIi-OyXni8z1a_ptslecI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-13838707-1562270074-3530.jpeg.jpg
                  " 
                  alt="" 
               />
               <div className="footer__songInfo">
                   <h4>Çemberimde Gül Oya</h4>
                   <p>Gülnur Gökçe</p>
               </div>
            </div>

            <div className="footer__center">
              <ShuffleIcon className="footer__green" />
              <SkipPreviousIcon className="footer__icon" />
              <PlayCircleFilledWhiteIcon fontSize="large" className="footer__white" />
              <SkipNextIcon className="footer__icon" />
              <RepeatIcon className="footer__green" />
            </div>
            
            <div className="footer__right">
               <Grid container spacing={2}>
                   <Grid item>
                       <PlaylistPlayIcon />
                   </Grid>
                   <Grid item>
                       <DevicesOtherIcon />
                   </Grid>
                   <Grid item>
                       <VolumeUpIcon />
                   </Grid>
                   <Grid item xs>
                       <Slider size="small" />
                   </Grid>
               </Grid>
            </div>
        </div>
    );
}

export default Footer;
