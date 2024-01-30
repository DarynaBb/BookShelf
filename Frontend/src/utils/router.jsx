import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import HomeLogIn from "../pages/HomeLogIn";
import SignUp from "../pages/SignUp";
import UserBooks from '../pages/UserBooks';


const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <HomeLogIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/user', element: < UserProfile/> },
      { path: '/myBooks', element: <UserBooks /> },

      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
