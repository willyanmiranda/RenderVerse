import React from 'react'
import ImageGenerated from '../components/generate/image-generated/ImageGenerated';
import Prompt from '../components/generate/prompt/Prompt';

const GeneratePage = () => {
  return (
    <div className='generator-container'>
        <ImageGenerated/>
        <Prompt/>
    </div>
  )
}

export default GeneratePage;