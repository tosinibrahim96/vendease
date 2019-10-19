import React from "react";
import { ReactComponent as FourOhFour } from "../assets/notfound.svg";
import './Dashboard/Dashboard.scss'

export default function NotFound() {
  return (
    <div className="dashboard-container">
    <h1>Page Not Found</h1>
      <FourOhFour />
    </div>
  );
}
