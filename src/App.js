import React from 'react';
import './App.css';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink } from 'apollo-boost';
import Stats from './components/Stats';

import { InMemoryCache } from 'apollo-cache-inmemory';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://app-coo-back-graphql.herokuapp.com/graphql'
});

const client = new ApolloClient({
  cache,
  link
});
//  const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache()
// });
function App() {

  return (
    <ApolloProvider client={client}>
      <Header />
      <Stats />
      <Footer />
    </ApolloProvider>

  );
}

export default App;
