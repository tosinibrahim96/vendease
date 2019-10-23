import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import GraphSectionHeader from "./GraphSectionHeader";
import './GraphSection.scss'


const GraphSection = () => {
  return (
    <Jumbotron className="graph-jumbotron">
      <GraphSectionHeader />
    </Jumbotron>
  );
};

export default GraphSection;
