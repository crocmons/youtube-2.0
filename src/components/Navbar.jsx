import React from 'react'
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {BsYoutube} from "react-icons/bs";
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{position:'sticky',background:'#000', top:0, justifyContent:'space-between' }}>
     <Link to="/" style={{display: "flex", alignItems: "center"}}>
     <div className="flex gap-1 items-center justify-center py-3">
                <BsYoutube className='text-3xl text-red-600' />
                <span className='text-xl text-white font-medium'>
                    YouTube
                </span>
            </div>
     </Link>
     <SearchBar />
    </Stack>
    
);
export default Navbar;