// File: src/pages/products.js
import { useReducer, useState } from 'react';
import Link from 'next/link';

const initialState = {
  products: [
    { id: 1, name: 'Premium Wireless Headphones', price: 199.99, category: 'Electronics' },
    { id: 2, name: 'Ergonomic Office Chair', price: 299.99, category: 'Furniture' },
    { id: 3, name: 'Smart Fitness Watch', price: 149.99, category: 'Electronics' },
    { id: 4, name: 'Professional Coffee Maker', price: 249.99, category: 'Appliances' },
    { id: 5, name: 'Laptop Stand', price: 49.99, category: 'Accessories' },
  ]
};

function productReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, { ...action.payload, id: state.products.length + 1 }]
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    default:
      return state;
  }
}

export default function ProductsPage() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price || !newProduct.category) return;
    
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        category: newProduct.category
      }
    });
    
    setNewProduct({ name: '', price: '', category: '' });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const categories = ['Electronics', 'Furniture', 'Appliances', 'Accessories'];

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Product Management</h1>
        <Link href="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>

      <div className="section">
        <h2 className="subtitle">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex" style={{ gap: '1rem' }}>
            <div className="form-group" style={{ flex: 2 }}>
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-input"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                placeholder="Enter product name"
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Price ($)</label>
              <input
                type="number"
                className="form-input"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Category</label>
              <select
                className="form-input"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              >
                <option value="">Select category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="section">
        <h2 className="subtitle">Product List</h2>
        <div className="grid">
          {state.products.map(product => (
            <div key={product.id} className="card">
              <div style={{ marginBottom: '0.5rem' }}>
                <span style={{ 
                  backgroundColor: 'var(--background)', 
                  padding: '0.25rem 0.5rem', 
                  borderRadius: '0.25rem',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)'
                }}>
                  {product.category}
                </span>
              </div>
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                {product.name}
              </h3>
              <div className="flex justify-between align-center">
                <span style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '700',
                  color: 'var(--primary-color)'
                }}>
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-secondary"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}