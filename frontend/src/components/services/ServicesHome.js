import React from "react";
import { useRoutes } from "react-router-dom";
import EngineRepair from "./service/EngineRepair";
import TransmissionRepair from "./service/TransmissionRepair";
import ServiceNavbar from "./ServiceNavbar";

export const ServicesHome = () => {
  const routes = useRoutes([
    { path: "/transmission-repair", element: <TransmissionRepair /> },
    { path: "/engine-repair", element: <EngineRepair /> },
  ]);
  return (
    <div>
      <ServiceNavbar />
      {routes}
    </div>
  );
};
