import { React, useState } from 'react'
import Header from './header/Header';
import Form from './form/Form';
import DownloadImage from './download-image/DownloadImage';
import { useSelector } from 'react-redux';
import './Prompt.css'

const Prompt = () => {
  const photos = useSelector((state) => state.photos.value);
  return (
    <div className='prompt-container'>
      <Header hasPhotos={!!photos}/>
      {!photos ? (<Form/>) : (<DownloadImage images={photos}/>)}
    </div>
  )
}

export default Prompt;