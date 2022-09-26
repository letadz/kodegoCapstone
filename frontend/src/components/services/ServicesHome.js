import React from "react";
import { useRoutes } from "react-router-dom";
import EngineRepair from "./service/engine-repair/EngineRepair";
import AutoBodyRestoration from "./service/auto-body-restoration/AutoBodyRestoration";
import CollisionRepair from "./service/collision-repair/CollisionRepair";
import GlassRepair from "./service/glass-repair/GlassRepair";
import DentRepair from "./service/dent-repair/DentRepair";
import FrameStraightening from "./service/frame-straightening/FrameStraightening";
import HailDamageRepair from "./service/hail-damage-repair/HailDamageRepair";
import RustRepair from "./service/rust-repair/RustRepair";
import TransmissionRepair from "./service/transmission-repair/TransmissionRepair";
import CarRepairServices from "./service/car-repair-services/CarRepairServices";
import ExteriorBodyServices from "./service/exterior-body-services/ExteriorBodyServices";
import MufflerExhaustServices from "./service/muffler-exhaust-services/MufflerExhaustServices";
import ServiceNavbar from "./ServiceNavbar";

export const ServicesHome = () => {
  const routes = useRoutes([
    { path: "/engine-repair", element: <EngineRepair /> },
    { path: "/transmission-repair", element: <TransmissionRepair /> },
    { path: "/auto-body-restoration", element: <AutoBodyRestoration /> },
    { path: "/collision-repair", element: <CollisionRepair /> },
    { path: "/glass-repair", element: <GlassRepair /> },
    { path: "/dent-repair", element: <DentRepair /> },
    { path: "/frame-straightening", element: <FrameStraightening /> },
    { path: "/hail-damage-repair", element: <HailDamageRepair /> },
    { path: "/rust-repair", element: <RustRepair /> },
    { path: "/car-repair-services", element: <CarRepairServices /> },
    { path: "/exterior-body-services", element: <ExteriorBodyServices /> },
    { path: "/muffler-exhaust-services", element: <MufflerExhaustServices /> },
  ]);
  return (
    <div>
      {routes}
      <ServiceNavbar />
    </div>
  );
};
