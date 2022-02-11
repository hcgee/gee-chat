import { RouteObject } from 'react-router-dom'
import LoginLayout from '@/layouts/LoginLayout'
import HomeLayout from '@/layouts/HomeLayout'
import Home from '@/pages/home'
import NotFound from '@/pages/notFound'
const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginLayout />
  },
  {
    path: '/register',
    element: <LoginLayout />
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      }
    ]
  },
  { path: '*', element: <NotFound /> },
]

export default routes