import 'styles/globals.css';
import Layout from 'layouts';
import type { AppProps } from 'next/app';
import React from 'react';
import { store } from 'store';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
