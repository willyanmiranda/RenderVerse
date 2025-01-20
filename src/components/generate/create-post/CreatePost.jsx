import React from 'react'
import Header from './header/Header'
import Form from './form/Form'
import "./CreatePost.css"

const CreatePost = () => {
  return (
    <div className='create-post-container'>
      <Header />
      <Form />
    </div>
  )
}

export default CreatePost;