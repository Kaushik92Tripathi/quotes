// File: src/pages/quotes.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../redux/quotesSlice';
import Loader from '../components/Loader';
import Link from 'next/link';

export default function QuotesPage() {
  const dispatch = useDispatch();
  const { data: quotes, status, error } = useSelector(state => state.quotes);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuotes());
    }
  }, [status, dispatch]);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Inspirational Quotes</h1>
        <Link href="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>

      {status === 'loading' && <Loader />}
      
      {status === 'failed' && (
        <div className="section">
          <p className="error">Error: {error}</p>
        </div>
      )}

      {status === 'succeeded' && (
        <div className="grid">
          {quotes.map(quote => (
            <div key={quote.id} className="card">
              <p className="quote-text">{quote.quote}</p>
              <p className="quote-author">― {quote.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}