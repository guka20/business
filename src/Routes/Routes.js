import React from "react";
import { useRoutes } from "react-router-dom";
import * as All from ".";
import { MainLayout } from "../Layout/MainLayout";
export const Page = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <All.Home />,
    },
    {
      path: "/About",
      element: <All.About />,
    },
    {
      path: "/Contact",
      element: <All.Contact />,
    },
    {
      path: "/Careers",
      element: <All.Careers />,
    },
    {
      path: "/Features",
      element: <All.Features />,
    },
    {
      path: "/Integration",
      element: <All.Integration />,
    },
    {
      path: "/License",
      element: <All.License />,
    },
    {
      path: "/Price",
      element: <All.Price />,
    },
    {
      path: "*",
      element: <All.Error />,
    },
  ]);
  return <MainLayout>{routes}</MainLayout>;
};
