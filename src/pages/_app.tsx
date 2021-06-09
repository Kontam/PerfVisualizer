import React from 'react';
import { Provider } from 'react-redux';
//import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { useStore } from '../redux/store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Provider store={store}>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
