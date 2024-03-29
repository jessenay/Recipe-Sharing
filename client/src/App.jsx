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
  
  // Determine if we're on a page that shouldn't show the header or footer
  const hideHeaderAndFooter = location.pathname === '/' || location.pathname === '/signup';

  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        {/* Conditionally render Header and Footer based on the current path */}
        {!hideHeaderAndFooter && <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        <div className="container">
          <Outlet />
        </div>
        {!hideHeaderAndFooter && <Footer />}
      </div>
    </ApolloProvider>
  );
}

export default App;