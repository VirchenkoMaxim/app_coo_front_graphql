import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Stats from './components/Stats';
import Header from './components/common/Header';
import Footer from './components/common/Footer';



const client = new ApolloClient({
  uri: 'https://app-coo-back-graphql.herokuapp.com/graphql',
  cache: new InMemoryCache()
});
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
