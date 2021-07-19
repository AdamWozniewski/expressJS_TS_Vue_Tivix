import React from 'react';
import { Route } from 'react-router-dom';

interface SingleRoute {
  path: string,
  component: any,
  routes: this[],
}

function RouteWithSubRoutes(route: SingleRoute) {
  return (
    <Route
      path={route.path}
      render={props => (<route.component {...props} routes={route.routes} />)}
    />
  );
}

export default RouteWithSubRoutes;
