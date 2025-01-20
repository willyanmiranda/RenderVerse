import React from 'react';
import Button from '../../../common/button/Button';
import Plus from '../../../../assets/Plus.svg';
import Downl from '../../../../assets/Downl.svg';
import Tick from '../../../../assets/Tick.svg';
import File from '../../../../assets/File.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setPhotos } from '../../../../features/photos/photos';
import { saveAs } from 'file-saver';
import "./DownloadImage.css"

const DownloadImage = (props) => {
  const dispatchPhotos = useDispatch();
  const navigate = useNavigate(); 

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
          <Button handleClick={() => navigate("/generate/create-post")}  bgColor="#252A41" name="Criar Posts" img={File}/>
        </div>
      </div>
    </div>
  )
}

export default DownloadImage;