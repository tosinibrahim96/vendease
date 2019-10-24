import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import GraphSectionHeader from "./GraphSectionHeader";
import GraphSectionNav from "./GraphSectionNav";
import "./GraphSection.scss";

const GraphSection = () => {
  return (
    <Jumbotron className="graph-jumbotron">
      <GraphSectionHeader />
      <GraphSectionNav />
    </Jumbotron>
  );
};

export default GraphSection;
