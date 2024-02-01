import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import UserAccount from '../pages/UserAccount';
import SearchResultPage from '../pages/SearchResultPage';


const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/main', element: <Main /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/myAccount', element: <UserAccount /> },
      { path: '/search', element: <SearchResultPage /> },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
