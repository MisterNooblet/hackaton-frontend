import './App.css';
import {
  createBrowserRouter,
  RouterProvider
}
  from 'react-router-dom';
import RootLayout from './pages/Root';
import { LoginPage, ErrorPage, CulturePage, LeadboardPage, HomePage, Register } from './pages/index'
import { useState } from 'react';




function App() {
  const [user, setUser] = useState(null)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout setUser={setUser} user={user} />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },

        { path: '/login', element: <LoginPage setUser={setUser} /> },
        { path: '/culture', element: <CulturePage user={user} /> },
        { path: '/leaderboard', element: <LeadboardPage /> },
        {
          path: '/register', element: < Register />
        },



      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}



export default App;
