import React from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import {MdOutlineSlowMotionVideo,MdOutlineVideoLibrary,MdHistory, MdOutlineSmartDisplay,MdOutlineWatchLater,MdThumbUpOffAlt} from "react-icons/md";
import { MdOutlinedFlag, MdOutlineHelpOutline, MdOutlineFeedback,MdSettings} from "react-icons/md";
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
// import LiveTvIcon from '@mui/icons-material/LiveTv';
// import SchoolIcon from '@mui/icons-material/School';
// import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
// import CheckroomIcon from '@mui/icons-material/Checkroom';
// import GraphicEqIcon from '@mui/icons-material/GraphicEq';
// import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

// export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
  { name: 'Home', icon: <HomeIcon />, },
    { name: 'Explore', icon: <ExploreOutlinedIcon style={{fontSize:"30px"}}/> },
    { name: 'Shorts', icon: <MdOutlineSlowMotionVideo style={{fontSize:"30px"}} />, },
    { name: 'Subscription', icon: <SubscriptionsOutlinedIcon style={{fontSize:"30px"}}/>, },
    {
      icon: <MdOutlineVideoLibrary style={{fontSize:"30px"}} />,
      name: "Library",
    },
    {
      icon: <MdHistory style={{fontSize:"30px"}} />,
      name: "History",
    },
    {
      icon: <MdOutlineSmartDisplay style={{fontSize:"30px"}} />,
      name: "Lama Dev",
    },
    {
      icon: <MdOutlineWatchLater style={{fontSize:"30px"}} />,
      name: "Watch Later",
    },
    {
      icon: <MdThumbUpOffAlt style={{fontSize:"30px"}} />,
      name: "Liked Videos",
    },
    { name: 'Music', icon: <MusicNoteIcon /> },
    { name: 'Gaming', icon: <SportsEsportsIcon />, },

      {
        icon: <MdSettings style={{fontSize:"30px"}} />,
        name: "Settings",
      },
      {
        icon: <MdOutlinedFlag style={{fontSize:"30px"}} />,
        name: "Report history",
      },
      {
        icon: <MdOutlineHelpOutline style={{fontSize:"30px"}}/>,
        name: "Help",
      },
      {
        icon: <MdOutlineFeedback style={{fontSize:"30px"}} />,
        name: "Send feedback",
      },
  
    ];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';