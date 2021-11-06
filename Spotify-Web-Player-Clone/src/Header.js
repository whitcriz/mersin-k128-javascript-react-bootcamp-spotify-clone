import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "./DataLayer";

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();

    return (
      <div className="header">
        <div className="header__left">
            <ChevronLeftIcon fontSize="large" />
            <ChevronRightIcon fontSize="large" />
            <div className="header__search">
               <SearchIcon />
               <input placeholder="Search for Artists, Songs, or Podcasts" type="text" />
            </div>   
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </div>
      </div>
    );
}

export default Header;
