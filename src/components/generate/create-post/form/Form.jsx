import React from 'react';
import FormField from '../../../common/formField/FormField';
import Button from '../../../common/button/Button';
import Plus from "../../../../assets/Plus.svg";
import "./Form.css"

const Form = () => {
  return (
    <form>
      <FormField name="title" label="Title" type="text" placeholder='Coelho branquinho' />

      <div className='input-container'>
        <FormField type="select" name="tags" label="Tags">
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
          <textarea name="description" id="description"></textarea>
        </div>
      </div>

      <Button name="Criar" img={Plus} />
    </form>
  )
}

export default Form