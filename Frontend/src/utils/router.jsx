import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import PageNotFound from "../pages/PageNotFound";
import Home from "../pages/Home";
import Main from "../pages/Main";
import SearchResultPage from '../pages/SearchResultPage';
import MyAccount from '../pages/MyAccount';
import MyBooks from '../pages/MyBooks';
import SignUp from "../components/SignUp";
import TestSearch from "../pages/TestSearch";
import TestResult from "../pages/TestResult";



const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/main', element: <Main /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/search', element: <SearchResultPage /> },
      { path: '/myAccount', element: <MyAccount />},
      { path: '/myBooks', element: <MyBooks />},
      { path: '/testsearch', element: <TestSearch />},
      { path: '/testresult', element: <TestResult />},
      { path: "*", element: <PageNotFound />,},
    ],
  },
]);

export default router;
