import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import HomeLogIn from "../pages/HomeLogIn";
import SignUp from "../pages/SignUp";
import UserAccount from '../pages/UserAccount';


const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <HomeLogIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/myAccount', element: <UserAccount /> },

      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
