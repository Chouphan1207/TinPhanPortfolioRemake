import type { RouteProps } from "react-router-dom";

import { HomePage } from "@/pages/Home";

import { AppRoutes, routePaths } from "@/shared/config";
import { LoginPage } from "@/pages/Login";

export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <div>not</div>,
  },
];
