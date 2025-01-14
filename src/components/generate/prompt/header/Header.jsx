import { React } from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='prompt-header'>
       <span className={`prompt-properties ${!props.hasPhotos ? 'active' : ''}`}>Propriedades</span>
       <span className={`prompt-info ${props.hasPhotos ? 'active' : ''}`}>Info</span>
    </div>
  )
}

export default Header;