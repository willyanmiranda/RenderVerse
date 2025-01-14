import React from 'react'
import ImageGenerated from '../components/generate/image-generated/ImageGenerated';
import CreatePost from '../components/generate/create-post/CreatePost';

const CreatePostPage = () => {
  return (
    <div className='generator-container'>
      <ImageGenerated/>
      <CreatePost/>
    </div>
  )
}

export default CreatePostPage;