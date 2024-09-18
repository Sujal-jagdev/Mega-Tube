import React, { useState } from 'react';
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo';
import Recomm from '../../Components/Recommended/Recomm';
import { useParams } from 'react-router-dom';

const Video = () => {
  const {videoId, categoryId} = useParams()
  return (
    <>
    <div className="play-container col-12 d-lg-flex ps-lg-5 pe-lg-5 overflow-hidden">
      <Playvideo videoId={videoId}/>
      <Recomm categoryId={categoryId}/>
    </div>
    </>
  )
}

export default Video