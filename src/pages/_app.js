// File: src/pages/_app.js
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { LoadingProvider } from '../contexts/LoadingContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
    </Provider>
  );
}

export default MyApp;

