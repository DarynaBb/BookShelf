import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Main from "../pages/Main";
import SearchResultPage from '../pages/SearchResultPage';
import MyAccount from '../pages/MyAccount';
import MyBooks from '../pages/MyBooks';



const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/main', element: <Main /> },
      { path: '/search', element: <SearchResultPage /> },
      { path: '/myAccount', element: <MyAccount />},
      { path: '/myBooks', element: <MyBooks />},
      { path: "*", element: <PageNotFound />,},
    ],
  },
]);

export default router;
