import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation(); // Get the current location

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        {/* Conditionally render Header and Footer based on the current path */}
        {location.pathname !== '/login' && <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        <div className="container">
          <Outlet />
        </div>
        {location.pathname !== '/login' && <Footer />}
      </div>
    </ApolloProvider>
  );
}

export default App;
