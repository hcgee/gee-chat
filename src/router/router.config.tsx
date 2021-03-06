/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:51:20 
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-10 22:03:08
 */
import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const LoginLayout = lazy(() => import("@/layouts/LoginLayout"));
const HomeLayout = lazy(() => import("@/layouts/HomeLayout"));
const Home = lazy(() => import("@/pages/home"));
const Chat = lazy(() => import("@/pages/chat"));
const NotFound = lazy(() => import("@/pages/notFound"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/chat/:id/:name",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
  },
  {
    path: "/register",
    element: <LoginLayout />,
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
