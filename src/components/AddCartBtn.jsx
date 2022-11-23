import '../styles/AddCartBtn.css';

const AddCartBtn = () => {
  return (
    <button onClick={()=>{alert(`Has presionado el botón comprar`)}}>Comprar</button>
  )
}

export {AddCartBtn}