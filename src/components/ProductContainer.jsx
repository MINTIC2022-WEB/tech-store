import React from 'react';
import '../styles/ProductContainer.css';

const ProductContainer = (props) => {
  return (
    <section className='products__section'>
       <h1 className="products__title">Lista de Productos</h1> 
       <div className="products__container">
            {props.children} {/* Indica que tendra compomentes hijos */}
       </div>
    </section>
  )
}

export default ProductContainer