import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './GraphSectionHeader.scss';

const GraphSectionHeader = () => {
  return (
    <Row>
      <Col sm={8}>
        <ul className="time-ranges">
          <li>1w</li>
          <li>2w</li>
          <li>1m</li>
          <li>3m</li>
          <li>1y</li>
          <li>mtd</li>
          <li>qtd</li>
          <li>ytd</li>
          <li>all</li>
        </ul>
      </Col>
    </Row>
  );
};

export default GraphSectionHeader;
