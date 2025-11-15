import { Route } from "react-router";
import { routeConfig } from "../routerConfig";

export const AppRouter = () => {
  return (
    <Route>
      {routeConfig.map(({ path, element }) => (
        <Route key={path as string} element={element} />
      ))}
    </Route>
  );
};
