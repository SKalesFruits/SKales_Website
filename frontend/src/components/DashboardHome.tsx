import React from "react";
import ClientActivity from "./ClientActivity";
import DashboardHeader from "./DashboardHeader ";
import FleetStatus from "./FleetStatus";

const DashboardHome: React.FC = () => {
  return (
    <div>
      <DashboardHeader />
      <ClientActivity />
      <FleetStatus />
    </div>
  );
};

export default DashboardHome;
