import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { AppRoutes, routePaths } from "@/shared/config/router/routePaths";
import type { RouteProps } from "react-router";



export const routeConfig:RouteProps[] = [
    {
        path: routePaths[AppRoutes.HOME],
        element: <HomePage/>,
    },
    {
        path: routePaths[AppRoutes.LOGIN],
        element: <LoginPage/>,
    }
]

export const navigate = (to: string) => {
  if (typeof window === 'undefined') return
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
}