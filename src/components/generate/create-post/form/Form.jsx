import React from 'react';
import FormField from '../../../common/formField/FormField';
import Button from '../../../common/button/Button';
import Plus from "../../../../assets/Plus.svg";
import "./Form.css"

const Form = () => {
  return (
    <form>
      <FormField name="title" label="Título" type="text" placeholder='Coelho branquinho' />

      <div className='input-container'>
        <FormField type="select" name="category" label="Categoria">
          <option value="default">Selecione as tags</option>
          <option value="animals">Animais</option>
          <option value="tatoo">Tatuagens</option>
          <option value="macro">Fotos detalhadas</option>
          <option value="pixel">Pixel art</option>
          <option value="cartoon">Cartoon</option>
          <option value="picture">Pintura</option>
        </FormField>
      </div>

      <div className='input-container'>
        <div className='input-content'>
          <label htmlFor="description">Descrição</label>
          <textarea name="description" id="description" placeholder='Foto muito legal...' />
        </div>
      </div>

      <Button name="Postar" img={Plus} />
    </form>
  )
}

export default Form