import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../routerConfig";
import { Suspense } from "react";

import { PageLoader } from "@/widgets/PageLoader";

export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<PageLoader />}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
