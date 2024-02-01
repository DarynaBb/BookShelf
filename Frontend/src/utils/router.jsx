import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import HomeLogIn from "../pages/HomeLogIn";
import SignUp from "../pages/SignUp";
import UserAccount from '../pages/UserAccount';
import MyAccount from '../pages/MyAccount';
import MyBooks from '../pages/MyBooks';


const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <HomeLogIn /> },
      { path: '/signup', element: <SignUp /> },
      {path: '/myAccount', element: <MyAccount />},
      {path: '/myBooks', element: <MyBooks />},
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
