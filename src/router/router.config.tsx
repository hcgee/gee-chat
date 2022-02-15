import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const LoginLayout = lazy(() => import("@/layouts/LoginLayout"));
const HomeLayout = lazy(() => import("@/layouts/HomeLayout"));
const Home = lazy(() => import("@/pages/home"));
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
