import React from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import GraphSection from "../../components/GraphSection/GraphSection";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <GraphSection />
    </div>
  );
}
