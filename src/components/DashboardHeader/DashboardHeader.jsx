import React from "react";
import Container from "react-bootstrap/Container";
import "./DashboardHeader.scss";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <p className="welcome-text">welcome!</p>
      <p>
        <span className="username">oghelli</span> from
        <span className="company-name"> orchid hotel</span>
      </p>
    </div>
  );
};

export default DashboardHeader;
