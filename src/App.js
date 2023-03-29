import './App.css';
import {
  createBrowserRouter,
  RouterProvider
}
  from 'react-router-dom';
import RootLayout from './pages/Root';
import { LoginPage, ErrorPage, CulturePage, LeadboardPage, HomePage, Register } from './pages/index'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },

      { path: '/login', element: <LoginPage /> },
      { path: '/culture', element: <CulturePage /> },
      { path: '/leaderboard', element: <LeadboardPage /> },
      {
        path: '/register', element: < Register />
      },



    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;
