import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Paper, IconButton } from '@mui/material';
// import { Search } from '@mui/icons-material';
import {TiMicrophone} from "react-icons/ti";
import {BsCameraVideo, BsBell} from "react-icons/bs";
import {IoAppsSharp} from "react-icons/io5";
import {AiOutlineSearch} from "react-icons/ai";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      
      setsearchTerm("");
    }
  }
  return (
    <div className="flex items-center justify-center gap-5" sx={{width:"20px"}}>
    <form action='' onSubmit={handleSubmit}>
        <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0'>
            <div className="flex gap-4 items-center pr-5">
               
                <input type="text" className='w-30 bg-zinc-900 focus:outline-none border-none' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} placeholder="Search"/>
            </div>
            <button type='submit' className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
            <AiOutlineSearch className='text-xl' />
            </button>
        </div>
    </form>
   
  </div>
)
}

export default SearchBar