import React from 'react';
import Product from './components/Product';
import data from './db.json';

function App() {
  const [products, setProducts] = React.useState(data);

  const handleQty = (id, payload) => {
    setProducts(prevState => {
      const updatedProducts = prevState.map(product => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + payload };
        }
        return product;
      });
      return updatedProducts;
    });
  }

  return (
    <div>
      <div id="product-container">
        {products.map(product => (
          <Product key={product.id} name={product.name} price={product.price} quantity={product.quantity} id={product.id} handleQty={handleQty} />
        ))}
      </div>
    </div>
  );
}

export default App;