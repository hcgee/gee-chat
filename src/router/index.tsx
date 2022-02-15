import { Suspense } from "react";
import routes from "./router.config";
import { BrowserRouter, useRoutes } from "react-router-dom";
const Routes = () => useRoutes(routes);
const RouteView = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default RouteView;
