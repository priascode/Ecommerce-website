import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'
export default function Products() {
  return (
    <div >
        <h1>Featured products</h1>
          <div className="products" id='#product'>
            {data.products.map(product => (
              <div key={product.slug} className="product"> 
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <h2>{product.name}</h2>
                  </Link>
                    <h3><strong>${product.Price}</strong></h3>
                    <p>{product.description}</p>
                    <button className="btn" >Add to cart</button>
                 </div>
              </div>
            ))
            }
          </div>
    </div>
  )
}
