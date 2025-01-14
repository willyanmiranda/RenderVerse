import React from 'react';
import Button from '../form/button/Button';
import Plus from '../../../../assets/Plus.svg';
import Downl from '../../../../assets/Downl.svg';
import Tick from '../../../../assets/Tick.svg';
import { useDispatch } from 'react-redux';
import { setPhotos } from '../../../../features/photos/photos';
import { saveAs } from 'file-saver';
import "./DownloadImage.css"

const DownloadImage = (props) => {
  const dispatchPhotos = useDispatch()
  const download = () => {
    props.images.forEach((img, index) => {
      saveAs(img.image.url, `image-${index}.jpg`);
    });
  }
  return (
    <div className='download-container'>
      <div className='download-content'>
        <div className='download-text'>
          <img src={Tick} alt="tick" />
          <h3>Criação concluída!</h3>
          <p>Parabéns! Você criou a arte mais incrível do mundo!</p>
        </div>
        <div className='download-buttons'>
          <Button handleClick={() => download()} name="Download" img={Downl}/>
          <Button handleClick={() => dispatchPhotos(setPhotos(null))}  bgColor="#252A41" name="Criar novas imagens" img={Plus}/>
        </div>
      </div>
    </div>
  )
}

export default DownloadImage;