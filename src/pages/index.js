// File: src/pages/index.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Next.js State Management Demo</h1>
      
      <div className="section">
        <h2 className="subtitle">Navigation</h2>
        <div className="flex">
          <Link href="/products" className="btn btn-primary" style={{ marginRight: '10px' }}>
            Products (useReducer)
          </Link>
          <Link href="/quotes" className="btn btn-primary">
            Quotes (Redux)
          </Link>
        </div>
      </div>
      
      <div className="section">
        <h2 className="subtitle">Implementation Details</h2>
        <ul>
          <li className="mb-1">
            <strong>useReducer</strong> - Used for product management (GET, ADD, DELETE)
          </li>
          <li className="mb-1">
            <strong>useContext</strong> - Used to implement a global loading state
          </li>
          <li className="mb-1">
            <strong>Redux</strong> - Used to fetch quotes from API
          </li>
        </ul>
      </div>
    </div>
  );
}