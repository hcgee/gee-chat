import React from 'react'
import routes from './router.config'
import { BrowserRouter, useRoutes } from 'react-router-dom'
const Routes = () => useRoutes(routes);
const RouteView = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default RouteView