import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Error from './pages/Error'
import LoginForm from './pages/LoginForm.jsx'
import CreateAccountForm from './pages/CreateAccount'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <CreateAccountForm />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
