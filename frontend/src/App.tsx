import React, {useMemo} from "react"
import {createHashRouter, Navigate, Outlet} from "react-router-dom"
import {
  DistributorsPage,
  MainPage,
  OrganizationPage,
  PredictionsLink,
  PredictionsRelations,
  SalePointsPage,
} from "./pages"
import Predictions from "./pages/Predictions"


function AppLayout() {
  return (
    <>
      <Outlet/>
    </>
  )
}

const router = createHashRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path: "/org/:inn",
        element: <OrganizationPage/>
      },
      {
        path: "/org/:inn/:gtin/sale-points",
        element: <SalePointsPage/>
      },
      {
        path: "/org/:inn/:gtin/distributors",
        element: <DistributorsPage/>
      },
      {
        element: <Predictions/>,
        children: [
          {
            path: "/pred",
            element: <Navigate to="/"/>,
          },
          {
            path: "/pred/link",
            element: <PredictionsLink/>
          },
          {
            path: "/pred/relations",
            element: <PredictionsRelations/>
          }
        ]
      }
    ]
  }
])

export default router
