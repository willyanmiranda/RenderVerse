const Image = (props) => {
  return (
    <img 
    className="slide-image"
    key={props.url} 
    src={props.url} 
    alt="Foto" 
    style={{ maxWidth: '100%'}} 
    />
  )
}

export default Image